import { addtoCart, delettoCart } from "../const/action";
let initialState = {
  items: [],
  error: null,
  pending: false,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case addtoCart:
      let findingDuplicate = state.items.find(
        (item) => item.product._id === action.payload._id
      );
      return {
        ...state,
        pending: false,
        items: findingDuplicate
          ? state.items.map((item) => {
              if (item.product._id === action.payload._id) {
                return {
                  product: item.product,
                  count: item.count + 1,
                };
              }
              return item;
            })
          : [...state.items, { product: action.payload, count: 1 }],
      };
    case delettoCart:
      let selectedObj = state.items.find(
        (item) => item.product._id === action.payload
      );
      if (!selectedObj) {
        return {
          ...state,
        };
      }
      if (selectedObj.count > 1) {
        return {
          ...state,
          items: state.items.map((item) => {
            if (item.product._id === action.payload) {
              return {
                product: item.product,
                count: item.count - 1,
              };
            }
            return item
          }),
        };
      }else { 
        return {
          ...state,
          items:state.items.filter((item)=> item.product._id !== action.payload)
        }
      }
    default:
      return state;
  }
};
