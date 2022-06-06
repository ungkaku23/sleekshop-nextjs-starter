import { setCookies, getCookie } from 'cookies-next';
const { default: SleekShop } = require("@trefox/sleekshop-js");

export default function setOrderDetails(req, res) {
  const {
    email,
    delivery_companyname,
    delivery_firstname,
    delivery_lastname,
    delivery_street,
    delivery_number,
    delivery_zip,
    delivery_city,
    id_payment_method
  } = req.body;
  const session = getCookie('session', { req, res });
  const sleekShop = new SleekShop(process.env.SERVER, process.env.LICENCE_USERNAME, process.env.LICENCE_PASSWORD, process.env.LICENCE_SECRET);

  console.log(delivery_firstname);

  sleekShop.orders.setOrderDetails(
    session, 
    id_payment_method,
    1,
    delivery_companyname,
    "",
    "",
    delivery_firstname,
    delivery_lastname,
    delivery_street,
    delivery_number,
    delivery_zip,
    "",
    delivery_city,
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    []
  )
    .then((response) => {
      return res.status(200).json(response)
    })
    .catch((error) => {
      console.log(error);
      return res.status(403).json({error})
    });
}
