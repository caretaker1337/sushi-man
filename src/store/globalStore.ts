import { get as getFromLocalStorage } from "local-storage";

import { TProduct, TProductModifier } from "~/components";
import { TProductSubmodifier } from "~/components/ProductDetails/types";

export interface TAdditional {
  id: string;
  price: number;
  quantity: number;
  title: string;
}

export interface TSchedule {
  locale: string;
  schedule: string;
  text: string;
  title: string;
}

export interface TCartProduct extends TProduct {
  product_modifiers: TProductModifier[];
  product_submodifiers: TProductSubmodifier[];
  quantity: number;
  totalPrice: number;
}

export interface TShopSettings {
  ordersStop: boolean;
  shopIsClosed: boolean;
}

export interface TModalDay {
  text: string;
  title: string;
}

export interface TModalOrder {
  text: string;
  title: string;
}

export enum TPayment {
  CARD = "card",
  CARDCOURIER = "cardCourier",
  CARDPICKUP = "cardPickup",
  CASH = "cash",
}

export interface TPromo {
  code: string;
  id: string;
  percent: number;
  promoCodeError: boolean;
  promoCodeSuccess: boolean;
}

export interface TStore {
  cart: {
    additionals: TAdditional[];
    customerAddress: string;
    customerAddressError: boolean;
    customerEmail: string;
    customerEmailError: boolean;
    customerName: string;
    customerNameError: boolean;
    customerNote: string;
    customerPhone: string;
    customerPhoneError: boolean;
    cutleryAmount: number;
    cutleryAmountError: boolean;
    cutleryPrice: number;
    deliveryDistance: number;
    deliveryError: boolean;
    deliveryPrice: number;
    isAgreeChecked: boolean;
    isAgreeCheckedError: boolean;
    isPickupChecked: boolean;
    modifiers: TProductModifier[];
    paymentType: TPayment;
    products: TCartProduct[];
    promoCode: TPromo;
    totalRollsDiscount: number;
  };
  modalDay: TModalDay;
  modalOrder: TModalOrder;
  schedule: {
    schedule_cs: TSchedule;
    schedule_ru: TSchedule;
  };
  shopSettings: TShopSettings;
}

const initialStore: TStore = {
  cart: {
    additionals: [],
    customerAddress: "",
    customerAddressError: false,
    customerEmail: "",
    customerEmailError: false,
    customerName: "",
    customerNameError: false,
    customerNote: "",
    customerPhone: "",
    customerPhoneError: false,
    cutleryAmount: 0,
    cutleryAmountError: false,
    cutleryPrice: 0,
    deliveryDistance: 0,
    deliveryError: false,
    deliveryPrice: null,
    isAgreeChecked: false,
    isAgreeCheckedError: false,
    isPickupChecked: false,
    modifiers: [],
    paymentType: TPayment.CARD,
    products: [],
    promoCode: {
      code: "",
      id: "",
      percent: null,
      promoCodeError: false,
      promoCodeSuccess: false,
    },
    totalRollsDiscount: 0,
  },
  modalDay: {
    text: "",
    title: "",
  },
  modalOrder: {
    text: "",
    title: "",
  },
  schedule: {
    schedule_cs: {
      locale: "",
      schedule: "",
      title: "",
      text: "",
    },
    schedule_ru: {
      locale: "",
      schedule: "",
      title: "",
      text: "",
    },
  },
  shopSettings: {
    ordersStop: false,
    shopIsClosed: false,
  },
};

const globalStore: TStore = getFromLocalStorage("sushiManShopStorage")
  ? getFromLocalStorage<TStore>("sushiManShopStorage")
  : initialStore;

export { globalStore, initialStore };
