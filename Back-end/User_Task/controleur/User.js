const UserModel = require("../model/user");

exports.create = async (res, req) => {
  if (!req.body.email && !req.body.firstname && !req.body.lastname) {
    res.status(400).send({ message: "le contune ne peut pas null" });
  }

  const user = UserModel({
    email: req.body.email,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    phone: req.body.phone,
  });
  await user
    .save()
    .then((data) => {
      res.send({
        message: "new utilisature",
        user: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Une erreur s'est produite lors de la création de l'utilisateur",
      });
    });
};

exports.update = async (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Les données à mettre à jour ne peuvent pas être vides !",
    });
  }

  const id = req.params.id;

  await UserModel.findByIdAndUpdate(id, req.body, {
    useFindAndModify: false,
  })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: "Utilisateur non trouvé.",
        });
      } else {
        res.send({ message: "L'utilisateur a été mis à jour avec succès." });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

exports.findOne = async (res, req) => {
  try {
    const user = await UserModel.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.findAll = async (res, req) => {
  try { 
    const user = await UserModel.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}; 
 
exports.delete = async (req, res) => {
  await UserModel.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: "Utilisateur non trouvé.",
        });
      } else {
        res.send({
          message: "Utilisateur supprimé avec succès !",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
