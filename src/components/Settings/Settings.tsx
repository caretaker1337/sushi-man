import React, { useEffect, useState } from "react";
import { gql, useMutation } from "@apollo/client";

import client from "~/apollo-client";
import { useStore, setShopSettings } from "~/store";
import { StyledButton, StyledWrapper } from "./styled";

const Settings: React.FC = () => {
  const { dispatch, store } = useStore();
  const { shopSettings } = store;
  const { ordersStop } = shopSettings;
  const [buttonIsActive, toggleButtonActive] = useState<boolean>();
  const [sendOrdersStop] = useMutation(
    gql`
      mutation Mutation($updateShopInput: updateShopInput) {
        updateShop(input: $updateShopInput) {
          shop {
            ordersStop
          }
        }
      }
    `,
    { client }
  );

  const handleOrdersStopToggle = (): void => {
    sendOrdersStop({
      variables: {
        updateShopInput: {
          data: {
            ordersStop: !ordersStop,
          },
        },
      },
    });

    dispatch(
      setShopSettings({
        ...shopSettings,
        ordersStop: !ordersStop,
      })
    );
  };

  useEffect((): void => {
    toggleButtonActive(ordersStop);
  }, [ordersStop]);

  return (
    <StyledWrapper>
      <StyledButton isActive={buttonIsActive} onClick={handleOrdersStopToggle}>
        {ordersStop
          ? "Запустить приёмку заказов"
          : "Остановить приёмку заказов"}
      </StyledButton>
    </StyledWrapper>
  );
};

export { Settings };
