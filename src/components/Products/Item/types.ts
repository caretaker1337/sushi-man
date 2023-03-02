import { TProduct } from "~/components";

export interface TProps extends TProduct {
  triggerOrdersStopModal: (modalIsOpened: boolean) => void;
  triggerShopModal: (modalIsOpened: boolean) => void;
}
