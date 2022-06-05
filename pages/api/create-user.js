const { default: SleekShop } = require("@trefox/sleekshop-js");

export default function createUser(req, res) {
  const { username, email, password, password2 } = req.body;
  const sleekShop = new SleekShop(process.env.SERVER, process.env.LICENCE_USERNAME, process.env.LICENCE_PASSWORD, process.env.LICENCE_SECRET);

  return sleekShop.user.registerUser(
    "de_DE", 
    {
      "username": email,
      "passwd1": password,
      "passwd2": password2,
      "email": email
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
