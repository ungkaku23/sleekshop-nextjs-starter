import { setCookies, getCookie } from 'cookies-next';
import { apiText } from '../../lang/de';
const { default: SleekShop } = require("@trefox/sleekshop-js");

export default function getUserData(req, res) {
  const session = getCookie('session', { req, res });
  const sleekShop = new SleekShop(process.env.SERVER, process.env.LICENCE_USERNAME, process.env.LICENCE_PASSWORD, process.env.LICENCE_SECRET);

  return sleekShop.user.getUserData(session)
    .then((response) => {
      console.log('success user data: ', response);
      return res.status(200).json(response)
    })
    .catch((error) => {
      console.log('error user data: ', error);
      return res.status(403).json({expired: true, message: apiText.sessionExpired})
    });
}
// import { setCookies, getCookie } from 'cookies-next';
// import axios from "axios";
// import qs from "qs";
// import {apiText} from '../../lang/de';

// export default function getProducts(req, res) {
//   const session = getCookie('session', { req, res });
  
//   return axios.post(process.env.SERVER, qs.stringify({
//     licence_username: process.env.LICENCE_USERNAME,
//     licence_password: process.env.LICENCE_PASSWORD,
//     request: 'get_user_data',
//     session: session
//   }))
//     .then((response) => {
//       console.log('success user data: ', response);
//       return res.status(200).json(response)
//     })
//     .catch((error) => {
//       console.log('error user data: ', error);
//       return res.status(403).json({expired: true, message: apiText.sessionExpired})
//     })
  
// }