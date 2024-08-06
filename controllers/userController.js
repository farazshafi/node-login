import session from "express-session";
import { userData } from "../data/userData.js";

// Method: GET
// Url: /users/login
// description: get user details
export const userLogin = (req, res) => {
  if (req.session.email) {
    return res.redirect("/user/home");
  }
  const err = req.session.emptymessage;
  res.render("signIn.hbs", { message: err });
  delete req.session.emptymessage;
};

// Method: POST
// Url: /users/login
// description: user validation
export const userValdation = (req, res) => {
  const { email, password } = req.body;
  if (email.length <= 0 && password.length <= 0) {
    req.session.emptymessage = "Type at least 3 characters";
    return res.redirect("/user/login");
  }

  if (userData.password == password && email == userData.email) {
    req.session.email = email;
    return res.redirect("/user/home");
  } else {
    req.session.emptymessage = "Invalid username or password";
    return res.redirect("/user/login");
  }
};

// Method: GET
// Url: /users/home
// description: userHome
export const userHome = (req, res) => {
  if (req.session.email) {
    const user = {
      name: userData.name,
      email: userData.email,
      about: userData.about,
      profession: userData.profession,
    };
    return res.render("home", { user });
  } else {
    return res.redirect("/user/login");
  }
};

// Method: POST
// Url: /users/logout
// description: logout
export const userLogout = (req, res) => {
  delete req.session.email;
  return res.redirect("/user/login");
};
