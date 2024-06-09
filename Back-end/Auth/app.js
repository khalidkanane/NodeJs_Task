require("dotenv").config();
require("./config/database").connect();
const express = require("express");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

// La logique va ici <=

module.exports = app;

const User = require("./model/user");

// Register
app.post("/register", async (req, res) => {
  try {
    // Obtenir l'entrée de l'utilisateur
    const { first_name, last_name, email, password } = req.body;

    // Valider la saisie de l'utilisateur
    if (!(email && password && first_name && last_name)) {
      res.status(400).send("Tous les champs sont obligatoires");
    }
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res
        .status(409)
        .send("L'utilisateur existe déjà . Veuillez vous connecter");
    }

    //Crypter le mot de passe de l'utilisateur
    encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      first_name,
      last_name,
      email: email.toLowerCase(),

      password: encryptedPassword,
    });

    const token = jwt.sign({ user_id: user._id }, process.env.TOKEN_KEY, {
      expiresIn: "2h",
    });

    res.status(200).json({ token });

    // Ensure you close the try-catch block properly
  } catch (error) {
    // Handle any errors that occurred during registration
    console.error(error);
    res.status(500).send("Erreur lors de l'inscription");
  }
});

// Login
app.post("/login", async (req, res) => {
  // notre logique de connexion va ici
  try {
    // Obtenir l'entrée de l'utilisateur
    const { email, password } = req.body;

    // Valider la saisie de l'utilisateur
    if (!(email && password)) {
      res.status(400).send("Tous les champs sont obligatoires");
    }
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign({ user_id: user._id }, process.env.TOKEN_KEY, {
        expiresIn: "2h",
      });
      user.token = token;

      // user
      res.status(200).json(user);
    } else {
      res.status(400).send("Invalid Credentials");
    }
  } catch (err) {
    console.log(err);
  }
  // Notre logique de connexion se termine ici
});



const auth = require("./middleware/auth");

app.all("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});
