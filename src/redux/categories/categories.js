const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

export default function categoriesReducer(state = [], action) {
  switch (action.type) {
    case CHECK_STATUS:
      return [
        ...state,
        'Under Construction',
      ];
    default: return state;
  }
}

export const checkStatus = (book) => ({
  type: CHECK_STATUS,
  book,
});
