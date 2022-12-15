const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

export default function reducer(state = { categories: [], text: '' }, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return {
        ...state,
        text: action.text,
      };
    default: return state;
  }
}

export const checkStatus = () => ({
  type: CHECK_STATUS,
  text: 'Under Construction',
});
