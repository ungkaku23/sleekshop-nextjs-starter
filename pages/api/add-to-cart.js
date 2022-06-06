import { setCookies, getCookie } from 'cookies-next';
const { default: SleekShop } = require("@trefox/sleekshop-js");

export default function addToCart(req, res) {
  const { id, quantity, attributes } = req.body;
  const session = getCookie('session', { req, res });
  const sleekShop = new SleekShop(process.env.SERVER, process.env.LICENCE_USERNAME, process.env.LICENCE_PASSWORD, process.env.LICENCE_SECRET);

  return sleekShop.cart.addToCart(session, id, "PRODUCT", 0, quantity, "price", "name", "short_description", "de_DE", "DE", attributes)
    .then((response) => {
      return res.status(200).json(response)
    })
    .catch((error) => {
      console.log(error);
      return res.status(403).json({error})
    });
}

// import { setCookies, getCookie } from 'cookies-next';
// import axios from "axios";
// import qs from "qs";

// export default function getProduct(req, res) {
//   const { id, quantity, attributes } = req.body;
//   const session = getCookie('session', { req, res });

//   return axios.post(process.env.SERVER, qs.stringify({
//     licence_username: process.env.LICENCE_USERNAME,
//     licence_password: process.env.LICENCE_PASSWORD,
//     request: 'add_to_cart',
//     session: session,
//     id_shopobject: id,
//     quantity: quantity,
//     element_type: 'PRODUCT',
//     price_field: "price",
//     name_field: "name",
//     description_field: "short_description",
//     language: "de_DE",
//     country: "DE",
//     attributes: JSON.stringify(attributes)
//   }))
//     .then((response) => {
//       console.log(response)
//       return res.status(200).json(response)
//     })
//     .catch((error) => {
//       console.log(error);
//       return res.status(403).json({error})
//     })
// }