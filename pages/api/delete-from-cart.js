import { getCookie } from 'cookies-next';
const { default: SleekShop } = require("@trefox/sleekshop-js");

export default function deleteFromCart(req, res) {
  const { id } = req.body;
  const session = getCookie('session', { req, res });
  const sleekShop = new SleekShop(process.env.SERVER, process.env.LICENCE_USERNAME, process.env.LICENCE_PASSWORD, process.env.LICENCE_SECRET);

  return sleekShop.cart.delFromCart(session, id)
    .then((response) => {
      return res.status(200).json(response)
    })
    .catch((error) => {
      return res.status(403).json({error})
    });
}
