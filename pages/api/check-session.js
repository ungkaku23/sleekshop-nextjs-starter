import { setCookies, getCookie } from 'cookies-next';
import { apiText } from '../../lang/de';
const { default: SleekShop } = require("@trefox/sleekshop-js");

export default function checkSession(req, res) {
  const sleekShop = new SleekShop(process.env.SERVER, process.env.LICENCE_USERNAME, process.env.LICENCE_PASSWORD, process.env.LICENCE_SECRET);
  const session = getCookie('session', { req, res });

  if (session) {
    return res.status(200).json({expired: false})
  }

  return sleekShop.sessions.getNewSession()
    .then((response) => {
      setCookies('session', response.code, { req, res, expires: new Date(response.expiration_date) });
      return res.status(200).json({expired: false})
    })
    .catch((error) => {
      console.log(error);
      return res.status(403).json({expired: true, message: apiText.sessionExpired})
    });
}
