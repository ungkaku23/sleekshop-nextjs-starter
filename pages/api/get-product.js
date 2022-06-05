import { setCookies, getCookie } from 'cookies-next';
import { apiText } from '../../lang/de';
const { default: SleekShop } = require("@trefox/sleekshop-js");

export default function getProduct(req, res) {
  const { slug } = req.query;
  const session = getCookie('session', { req, res });
  const sleekShop = new SleekShop(process.env.SERVER, process.env.LICENCE_USERNAME, process.env.LICENCE_PASSWORD, process.env.LICENCE_SECRET);

  return sleekShop.shopobjects.seoGetProductDetails(slug, "DE", [])
    .then((response) => {
      return res.status(200).json({...response.data})
    })
    .catch((error) => {
      return res.status(403).json({expired: true, message: apiText.sessionExpired})
    });
}
