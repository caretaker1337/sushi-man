import { NextApiRequest, NextApiResponse } from "next";
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
  const { code } = request.body;

  const {
    data: { promos },
  } = await client.query({
    query: gql`
      query PromoCodesQuery($where: JSON) {
        promos(where: $where) {
          id
          percent
        }
      }
    `,
    variables: {
      where: {
        code: code,
        isApplied: false,
      },
    },
  });

  response.send({
    id: (promos && !!promos.length && promos[0]?.id) || "",
    percent: (promos && !!promos.length && promos[0]?.percent) || null,
    statusCode: promos && !!promos.length ? 200 : 403,
  });
};

export { config };
export default handler;
