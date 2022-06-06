import { getCookie } from 'cookies-next';
const { default: SleekShop } = require("@trefox/sleekshop-js");

export default function checkout(req, res) {
  const session = getCookie('session', { req, res });
  const sleekShop = new SleekShop(process.env.SERVER, process.env.LICENCE_USERNAME, process.env.LICENCE_PASSWORD, process.env.LICENCE_SECRET);

  return sleekShop.orders.checkout(session)
    .then((response) => {
      return res.status(200).json(response)
    })
    .catch((error) => {
      console.log(error);
      return res.status(403).json({error})
    });
}
