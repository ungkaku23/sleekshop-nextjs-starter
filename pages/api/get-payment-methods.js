const { default: SleekShop } = require("@trefox/sleekshop-js");

export default function getPaymentMethods(req, res) {
  const sleekShop = new SleekShop(process.env.SERVER, process.env.LICENCE_USERNAME, process.env.LICENCE_PASSWORD, process.env.LICENCE_SECRET);

  return sleekShop.payment.getPaymentMethods()
    .then((response) => {
      return res.status(200).json({...response.data})
    })
    .catch((error) => {
      return res.status(403).json({error})
    });
}
