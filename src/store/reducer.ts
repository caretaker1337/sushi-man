import React from "react";
import { set as setToLocalStorage } from "local-storage";

import { TProduct } from "~/components";
import { TAction, TActionTypes } from "./actions";
import { TStore, TAdditional, TCartProduct, initialStore } from "./globalStore";

const setStoreToLocalStorage = (currentStore: TStore): TStore => {
  setToLocalStorage<TStore>("sushiManShopStorage", currentStore);

  return currentStore;
};

const reducer: React.Reducer<TStore, TAction> = (store, { payload, type }) => {
  const actions = {
    [TActionTypes.SET_MODAL_DAY]: (): TStore =>
      setStoreToLocalStorage({
        ...store,
        modalDay: payload,
      }),

    [TActionTypes.SET_MODAL_ORDER]: (): TStore =>
      setStoreToLocalStorage({
        ...store,
        modalOrder: payload,
      }),

    [TActionTypes.SET_SHOP_SETTINGS]: (): TStore =>
      setStoreToLocalStorage({
        ...store,
        shopSettings: payload,
      }),

    [TActionTypes.ADD_PRODUCT]: (): TStore => {
      const products = [...store.cart.products];
      const foundIndex = products.findIndex(
        (product: TCartProduct): boolean => product.id === payload.id
      );

      if (products[foundIndex]) {
        if (payload.product_modifiers && !!payload.product_modifiers.length) {
          products.push(payload);
        } else {
          products[foundIndex].quantity = products[foundIndex].quantity + 1;
          products[foundIndex].totalPrice =
            products[foundIndex].totalPrice + parseInt(payload.price);
        }
      } else {
        products.push(payload);
      }

      return setStoreToLocalStorage({
        ...store,
        cart: {
          ...store.cart,
          products,
        },
      });
    },

    [TActionTypes.REMOVE_PRODUCT]: (): TStore => {
      const products = [...store.cart.products].filter(
        (product: TCartProduct) => product.id !== payload.id
      );

      return setStoreToLocalStorage({
        ...store,
        cart: {
          ...store.cart,
          products,
        },
      });
    },

    [TActionTypes.CLEAR_CART]: (): TStore =>
      setStoreToLocalStorage({
        ...store,
        cart: {
          ...store.cart,
          products: [],
        },
      }),

    [TActionTypes.DECREASE_QUANTITY]: (): TStore => {
      const products = [...store.cart.products];
      const foundIndex = products.findIndex(
        (product: TProduct) => product.id === payload.id
      );

      products[foundIndex].quantity = payload.quantity;

      if (products[foundIndex].product_modifiers[0]) {
        products[foundIndex].totalPrice =
          (parseInt(products[foundIndex].price) +
            products[foundIndex].product_modifiers.length *
              parseInt(products[foundIndex].product_modifiers[0].price)) *
          payload.quantity;
      } else {
        products[foundIndex].totalPrice =
          parseInt(products[foundIndex].price) * payload.quantity;
      }

      return setStoreToLocalStorage({
        ...store,
        cart: {
          ...store.cart,
          products,
        },
      });
    },

    [TActionTypes.INCREASE_QUANTITY]: (): TStore => {
      const products = [...store.cart.products];
      const foundIndex = products.findIndex(
        (product: TProduct) => product.id === payload.id
      );

      products[foundIndex].quantity = payload.quantity;

      if (products[foundIndex].product_modifiers[0]) {
        products[foundIndex].totalPrice =
          (parseInt(products[foundIndex].price) +
            products[foundIndex].product_modifiers.length *
              parseInt(products[foundIndex].product_modifiers[0].price)) *
          payload.quantity;
      } else {
        products[foundIndex].totalPrice =
          parseInt(products[foundIndex].price) * payload.quantity;
      }

      return setStoreToLocalStorage({
        ...store,
        cart: {
          ...store.cart,
          products,
        },
      });
    },

    [TActionTypes.CHANGE_ADDITIONAL_QUANTITY]: (): TStore => {
      const additionals = [...store.cart.additionals];
      const foundIndex = additionals.findIndex(
        (additional: TAdditional) => additional.id === payload.id
      );
      additionals[foundIndex].quantity = payload.quantity;

      return setStoreToLocalStorage({
        ...store,
        cart: {
          ...store.cart,
          additionals,
        },
      });
    },

    [TActionTypes.SET_ADDITIONALS]: (): TStore =>
      setStoreToLocalStorage({
        ...store,
        cart: {
          ...store.cart,
          additionals: payload,
        },
      }),

    [TActionTypes.SET_SCHEDULE]: (): TStore =>
      setStoreToLocalStorage({
        ...store,
        schedule: payload,
      }),

    [TActionTypes.SET_CUTLERY_AMOUNT]: (): TStore =>
      setStoreToLocalStorage({
        ...store,
        cart: {
          ...store.cart,
          cutleryAmount: payload,
        },
      }),

    [TActionTypes.SET_CUTLERY_PRICE]: (): TStore =>
      setStoreToLocalStorage({
        ...store,
        cart: {
          ...store.cart,
          cutleryPrice: payload,
        },
      }),

    [TActionTypes.SET_CUTLERY_AMOUNT_ERROR]: (): TStore =>
      setStoreToLocalStorage({
        ...store,
        cart: {
          ...store.cart,
          cutleryAmountError: payload,
        },
      }),

    [TActionTypes.SET_PICKUP]: (): TStore =>
      setStoreToLocalStorage({
        ...store,
        cart: {
          ...store.cart,
          isPickupChecked: payload,
        },
      }),

    [TActionTypes.SET_TOTAL_ROLLS_DISCOUNT]: (): TStore =>
      setStoreToLocalStorage({
        ...store,
        cart: {
          ...store.cart,
          totalRollsDiscount: payload,
        },
      }),

    [TActionTypes.SET_DELIVERY_PRICE]: (): TStore =>
      setStoreToLocalStorage({
        ...store,
        cart: {
          ...store.cart,
          deliveryPrice: payload,
        },
      }),

    [TActionTypes.SET_DELIVERY_DISTANCE]: (): TStore =>
      setStoreToLocalStorage({
        ...store,
        cart: {
          ...store.cart,
          deliveryDistance: payload,
        },
      }),

    [TActionTypes.SET_AGREE]: (): TStore =>
      setStoreToLocalStorage({
        ...store,
        cart: {
          ...store.cart,
          isAgreeChecked: payload,
        },
      }),

    [TActionTypes.SET_AGREE_ERROR]: (): TStore =>
      setStoreToLocalStorage({
        ...store,
        cart: {
          ...store.cart,
          isAgreeCheckedError: payload,
        },
      }),

    [TActionTypes.SET_CUSTOMER_EMAIL]: (): TStore =>
      setStoreToLocalStorage({
        ...store,
        cart: {
          ...store.cart,
          customerEmail: payload,
        },
      }),

    [TActionTypes.SET_CUSTOMER_EMAIL_ERROR]: (): TStore =>
      setStoreToLocalStorage({
        ...store,
        cart: {
          ...store.cart,
          customerEmailError: payload,
        },
      }),

    [TActionTypes.SET_CUSTOMER_NAME]: (): TStore =>
      setStoreToLocalStorage({
        ...store,
        cart: {
          ...store.cart,
          customerName: payload,
        },
      }),

    [TActionTypes.SET_CUSTOMER_PHONE]: (): TStore =>
      setStoreToLocalStorage({
        ...store,
        cart: {
          ...store.cart,
          customerPhone: payload,
        },
      }),

    [TActionTypes.SET_CUSTOMER_ADDRESS]: (): TStore =>
      setStoreToLocalStorage({
        ...store,
        cart: {
          ...store.cart,
          customerAddress: payload,
        },
      }),

    [TActionTypes.SET_CUSTOMER_ADDRESS_ERROR]: (): TStore =>
      setStoreToLocalStorage({
        ...store,
        cart: {
          ...store.cart,
          customerAddressError: payload,
        },
      }),

    [TActionTypes.SET_CUSTOMER_NAME_ERROR]: (): TStore =>
      setStoreToLocalStorage({
        ...store,
        cart: {
          ...store.cart,
          customerNameError: payload,
        },
      }),

    [TActionTypes.SET_CUSTOMER_PHONE_ERROR]: (): TStore =>
      setStoreToLocalStorage({
        ...store,
        cart: {
          ...store.cart,
          customerPhoneError: payload,
        },
      }),

    [TActionTypes.SET_DELIVERY_ERROR]: (): TStore =>
      setStoreToLocalStorage({
        ...store,
        cart: {
          ...store.cart,
          deliveryError: payload,
        },
      }),

    [TActionTypes.SET_PAYMENT_TYPE]: (): TStore =>
      setStoreToLocalStorage({
        ...store,
        cart: {
          ...store.cart,
          paymentType: payload,
        },
      }),

    [TActionTypes.SET_CUSTOMER_NOTE]: (): TStore =>
      setStoreToLocalStorage({
        ...store,
        cart: {
          ...store.cart,
          customerNote: payload,
        },
      }),

    [TActionTypes.SET_PROMO_CODE]: (): TStore =>
      setStoreToLocalStorage({
        ...store,
        cart: {
          ...store.cart,
          promoCode: payload,
        },
      }),

    [TActionTypes.CLEAR_STORE]: (): TStore => initialStore,

    DEFAULT: (): TStore => {
      return store;
    },
  };

  return (actions[type] || actions["DEFAULT"])();
};

export { reducer };
