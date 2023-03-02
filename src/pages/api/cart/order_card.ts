import { NextApiRequest, NextApiResponse } from "next";
import fetch from "isomorphic-unfetch";
import { gql } from "@apollo/client";

import client from "~/apollo-client";

const config = {
  api: {
    bodyParser: {
      sizeLimit: "100mb",
    },
  },
};

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { orderId, orderPrice, email, name, phone } = request.body;

  const comgateResponse = await fetch(
    "https://payments.comgate.cz/v1.0/create",
    {
      body: `merchant=457844&price=${orderPrice * 100}
          &country=ALL
          &curr=CZK
          &label=sushiManOrder
          &refId=${orderId}
          &email=${email}
          &lang=cs
          &method=ALL
          &phone=${phone}
          &payerName=${name}
          &prepareOnly=true
          &secret=44j6AON7H3NQuXClU62bfNIeniPbhOk3`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
    }
  )
    .then((response) => response.text())
    .catch((error) => error.text());

  const params = new URLSearchParams(comgateResponse);
  const comgateData = Object.fromEntries(params);
  const { code, message, redirect, transId } = comgateData;

  if (!code) {
    client.mutate({
      mutation: gql`
        mutation UpdateOrderMutation($input: updateOrderInput) {
          updateOrder(input: $input) {
            order {
              comgatePaymentStatus
            }
          }
        }
      `,
      variables: {
        input: {
          data: {
            comgatePaymentStatus: "CANCELLED",
          },
          where: {
            id: orderId,
          },
        },
      },
    });

    response.send({ statusCode: 500, message });
  } else {
    client.mutate({
      mutation: gql`
        mutation UpdateOrderMutation($input: updateOrderInput) {
          updateOrder(input: $input) {
            order {
              comgateTransId
              comgatePaymentStatus
            }
          }
        }
      `,
      variables: {
        input: {
          data: {
            comgateTransId: transId,
          },
          where: {
            id: orderId,
          },
        },
      },
    });

    response.status(200).send({ redirect });
  }
};

export { config };
export default handler;
