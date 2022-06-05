import { setCookies, getCookie } from 'cookies-next';
const { default: SleekShop } = require("@trefox/sleekshop-js");

export default function setUserData(req, res) {
  const { firstname, lastname, street, number, zip, city } = req.body;
  const session = getCookie('session', { req, res });
  const sleekShop = new SleekShop(process.env.SERVER, process.env.LICENCE_USERNAME, process.env.LICENCE_PASSWORD, process.env.LICENCE_SECRET);

  return sleekShop.user.setUserData(
    session,
    {
      "firstname": firstname,
      "lastname": lastname,
      "street": street,
      "number": number,
      "zip": zip,
      "city": city,
    }
  )
  .then((response) => {
    return res.status(200).json({...response.data})
  })
  .catch((error) => {
    console.log(error);
    return res.status(403).json({error})
  });
}
