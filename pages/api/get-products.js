import { setCookies, getCookie } from 'cookies-next';
import { apiText } from '../../lang/de';
const { default: SleekShop } = require("@trefox/sleekshop-js");

export default function getProducts(req, res) {
  const session = getCookie('session', { req, res });
  const sleekShop = new SleekShop(process.env.SERVER, process.env.LICENCE_USERNAME, process.env.LICENCE_PASSWORD, process.env.LICENCE_SECRET);
  console.log('start product fetching')
  // return res.status(200).json({})
  return sleekShop.categories.getProductsInCategory(1, "de_DE", "DE", "price", "DESC", 0, 16, ["name","price","img1"])
    .then((response) => {
      // console.log("max: ", response);
      return res.status(200).json(response)
    })
    .catch((error) => {
      // console.log("max err: ", error);
      return res.status(403).json({expired: true, message: apiText.sessionExpired})
    });
}