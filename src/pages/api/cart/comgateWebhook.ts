import { NextApiRequest, NextApiResponse } from "next";
import { gql } from "@apollo/client";

import client from "~/apollo-client";
import { TAdditional } from "~/store";
import { telegramSendMessage } from "./telegramSendMessage";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { refId, status, promoCodeSuccess, promoCodeDiscount } = request.body;
  const {
    data: { order },
  } = await client.query({
    query: gql`
      query OrderQuery($orderId: ID!) {
        order(id: $orderId) {
          id
        }
      }
    `,
    variables: {
      orderId: refId,
    },
  });

  if (order && !!Object.keys(order).length) {
    const {
      data: { updateOrder },
    } = await client.mutate({
      mutation: gql`
        mutation UpdateOrderMutation($input: updateOrderInput) {
          updateOrder(input: $input) {
            order {
              additionals
              address
              comgatePaymentStatus
              cutleryAmountPaid
              deliveryPrice
              cutleryAmount
              email
              id
              name
              note
              phone
              price
              products
              paymentType
            }
          }
        }
      `,

      variables: {
        input: {
          data: {
            comgatePaymentStatus: status,
          },
          where: {
            id: refId,
          },
        },
      },
    });

    if (
      updateOrder["order"] &&
      !!Object.keys(updateOrder["order"]).length &&
      updateOrder["order"].comgatePaymentStatus === "PAID"
    ) {
      const message: string[] = [];

      message.push(`Заказ №${updateOrder["order"].id}`);

      if (
        updateOrder["order"].products &&
        !!updateOrder["order"].products.length
      ) {
        const productsList: string[] = updateOrder["order"].products.map(
          ({
            product_modifiers,
            product_submodifiers,
            title,
            quantity,
          }): string => {
            const modifiers: string[] = [];

            if (product_modifiers && !!product_modifiers.length) {
              const modifiersList = product_modifiers.map(
                ({ name: modifier_name, modifierIndex }): string => {
                  const modifier =
                    modifier_name && modifier_name.length > 0
                      ? `\n<b>-${modifier_name}</b>`
                      : "";

                  const modifier_submodifiers = product_submodifiers.filter(
                    ({ modifierIndex: subModifierIndex }) =>
                      subModifierIndex === modifierIndex
                  );
                  
                  const submodifiers = modifier_submodifiers.map(
                    ({ name: submodifier_name }): string => {
                      return submodifier_name && submodifier_name.length > 0
                        ? `\n--<b>${submodifier_name}</b>`
                        : "";
                    }
                  );

                  return modifier + submodifiers;
                }
              );

              modifiers.push(modifiersList);
            }

            return `\n<b>${title} ${
              quantity !== 1 ? `x${quantity}` : ""
            }</b>${modifiers}`;
          }
        );

        message.push(`\n ${productsList}`);
      }

      if (
        updateOrder["order"].additionals &&
        !!updateOrder["order"].additionals.length
      ) {
        const additionalsList: string[] = updateOrder["order"].additionals.map(
          ({
            title: additional_title,
            quantity: additional_quantity,
          }: TAdditional): string => {
            return additional_title && additional_title.length > 0
              ? `\n--<b>${additional_title} x${additional_quantity}</b>`
              : "";
          }
        );

        message.push(`\n ${additionalsList}`);
      }

      if (updateOrder["order"].note && updateOrder["order"].note.length > 0) {
        message.push(`\n`);
        message.push(`\n${updateOrder["order"].note}`);
      }

      if (updateOrder["order"].cutleryAmount) {
        message.push(`\n`);
        message.push(
          `\n<b>Приборы:</b> ${updateOrder["order"].cutleryAmount} ${
            updateOrder["order"].cutleryAmountPaid &&
            updateOrder["order"].cutleryAmountPaid > 0
              ? `(${updateOrder["order"].cutleryAmountPaid} из них платны${
                  updateOrder["order"].cutleryAmountPaid === 1 ? "й" : "е"
                })`
              : ``
          }`
        );
        message.push(`
        \n<b>Доставка:</b> ${
          updateOrder["order"].deliveryPrice >= 50 &&
          updateOrder["order"].deliveryPrice < 100
            ? "Обычная"
            : updateOrder["order"].deliveryPrice >= 100
            ? "Повышенная"
            : updateOrder["order"].deliveryPrice === 0
            ? "Бесплатная"
            : "Самовывоз"
        }`);
        message.push(`\n`);
      }

      if (updateOrder["order"].email) {
        message.push(`\n <b>Email:</b> ${updateOrder["order"].email}`);
        message.push(`\n`);
        message.push(`\n <b>Тип оплаты:</b> Картой онлайн`);
        message.push(`\n`);
      }

      if (promoCodeSuccess) {
        message.push(`\n Помокод: ${promoCodeDiscount}%`);
        message.push("");
      }

      if (updateOrder["order"].price) {
        message.push(`\n <b>Цена:</b> ${updateOrder["order"].price}Kč`);
        message.push(`\n`);
      }

      if (updateOrder["order"].phone) {
        message.push(
          `\n <a href="tel:+420${updateOrder["order"].phone.replace(
            / /g,
            ""
          )}">+420${updateOrder["order"].phone.replace(/ /g, "")} ${
            updateOrder["order"].name
          }</a>`
        );
      }

      const result = message.join(" ");

      telegramSendMessage(result, () => {
        if (updateOrder["order"].address) {
          telegramSendMessage(`${updateOrder["order"].address}`);
        }
      });
    }
  }

  response.status(200).send({ refId });
};

export default handler;
