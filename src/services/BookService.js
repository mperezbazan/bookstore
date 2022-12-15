import http from '../http-common';

const appId = 'qfKhgpl9t5ZJEuai997d';

const getAll = () => http.get(`/apps/${appId}/books`);

const create = (data) => http.post(`/apps/${appId}/books`, data);

const remove = (id) => http.delete(`/apps/${appId}/books/${id}`);

const BookService = {
  getAll,
  create,
  remove,
};

export default BookService;
