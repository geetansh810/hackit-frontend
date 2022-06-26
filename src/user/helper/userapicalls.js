import { API } from "../../backend";

export const getUserPurchases = (userId , token) => {
    return fetch(`${API}/orders/user/${userId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
            })
        .then((response) => {
          return response.json();
        })
        .catch((err) => console.log(err));
    
}