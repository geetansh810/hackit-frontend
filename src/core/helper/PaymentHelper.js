import { API } from "../../backend";
import { isAuthenticated } from "../../auth/helper";

const { user, token } = isAuthenticated();

export const processPayment = async (userId, token, paymentInfo) => {
  var metaData = {};
  await fetch(`${API}/payment/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(paymentInfo),
  })
    .then(async (t) => {
      await t.json().then((data) => {
        console.log(data);
        metaData = data;
      });
      console.log(t);
    })
    .catch((err) => console.log(err));

  console.log(metaData);
  return metaData;
};

export default function displayRazorpay(paymentInfo) {
  const demoPaymentInfo = {
    amount: 50000,
    currency: "INR",
    receipt: "Receipt#500",
  };

  const data = processPayment(user._id, token, demoPaymentInfo);

  console.log(data);

  const options = {
    key: process.env.key_id,
    currency: "INR",
    amount: 500,
    name: "Learn Code Online",
    description: "Wallet Transaction",
    // image: "http://localhost:1337/logo.png",
    order_id: data.id,
    handler: function (response) {
      alert("PAYMENT ID ::" + response.razorpay_payment_id);
      alert("ORDER ID :: " + response.razorpay_order_id);
    },
    prefill: {
      name: "Anirudh Jwala",
      email: "anirudh@gmail.com",
      contact: "9999999999",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}
