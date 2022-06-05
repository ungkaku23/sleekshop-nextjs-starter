import { setCookies, getCookie } from 'cookies-next';
const { default: SleekShop } = require("@trefox/sleekshop-js");

export default function addToCart(req, res) {
  const { id, quantity, attributes } = req.body;
  const session = getCookie('session', { req, res });
  const sleekShop = new SleekShop(process.env.SERVER, process.env.LICENCE_USERNAME, process.env.LICENCE_PASSWORD, process.env.LICENCE_SECRET);

  return sleekShop.cart.addToCart(session, id, "PRODUCT", 0, quantity, "price", "name", "short_description", "de_DE", "DE", attributes)
    .then((response) => {
      return res.status(200).json({...response.data})
    })
    .catch((error) => {
      console.log(error);
      return res.status(403).json({error})
    });
}
