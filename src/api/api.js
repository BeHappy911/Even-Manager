import axios from "axios";

const authData = JSON.parse(localStorage.getItem('fairytales_auth'));
const accessToken = authData ? authData : null;


const instance = axios.create({
  baseURL: 'ya.ru',
  headers: {
    Authorization: `${accessToken}`
  }
});

export const auth = {
  checkAuth() {
    return instance.post(`user/login`, {
      "name": "test",
      "password": "00000"
    }).then((response) => {
      if(response && response.data) {
        localStorage.setItem('fairytales_auth', JSON.stringify(response.data.data));
        instance.defaults.headers = {Authorization: `${response.data.data}`};
      }
      return response
    })
  }
}

export const booksAPI = {
  getGenreList() {
    return instance.get('genre/list')
  }
}

export const searchAPI = {
  getBooks(title) {
    return instance.get(`book/get/list?author=${authorName ? authorName : ''}&title=${title ? title : ''}`)
  }
}
