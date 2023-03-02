interface TDeliveryTitle {
  locale: string;
  title: string;
}

export interface TDeliveryItem {
  locale: string;
  text: string;
  title: string;
}

export interface TDelivery {
  deliveryTitle: {
    deliveryTitle_cs: TDeliveryTitle;
    deliveryTitle_ru: TDeliveryTitle;
  };
  deliveryItems: TDeliveryItem[];
}

export type TProps = TDelivery
