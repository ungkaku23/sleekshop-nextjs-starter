import { setCookies, getCookie } from 'cookies-next';
const { default: SleekShop } = require("@trefox/sleekshop-js");

export default function verifyUser(req, res) {
  const { userId, session } = req.body;
  const sleekShop = new SleekShop(process.env.SERVER, process.env.LICENCE_USERNAME, process.env.LICENCE_PASSWORD, process.env.LICENCE_SECRET);

  console.log(userId, session);

  return sleekShop.user.verifyUser(userId, session)
    .then((response) => {
      return res.status(200).json(response)
    })
    .catch((error) => {
      console.log(error);
      return res.status(403).json({error})
    });
}
