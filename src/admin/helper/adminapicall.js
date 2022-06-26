import { API } from "../../backend";


//==============product calls========================
//create a product
export const createProduct = (userId, token, product) => {
  return fetch(`${API}/placement/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: product,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

//get all products
export const getAllProducts = () => {
  return fetch(`${API}/placements`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//get a product
export const getProductPhoto = (productId) => {
  return fetch(`${API}/placements/pdf/${productId}`, {
    method: "GET",
  })
    .then((response) => {
      return response;
    })
    .catch((err) => console.log(err));
};

//get a product
export const getProduct = (productId) => {
  return fetch(`${API}/product/${productId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
