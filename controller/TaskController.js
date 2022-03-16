const models = require('../models');
const { User } = models;
const getAllTask = async (req, res) => {
  const AllTask = await User.findAll();
  res.status(200).json(AllTask);
};

const addNewTask = async (req, res) => {
  let { f_name, l_name, e_mail } = req.body;
  await User.create({
    firstName: f_name,
    lastName: l_name,
    email: e_mail,
  })
    .then(() => {
      res.status(200).json('task inserted');
    })
    .catch((err) => {
      console.log(err);
    });
};
const getSingleUser = async (req, res) => {
  let id = req.params.id;
  await User.findOne({ where: { id: id } })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(404).json('not found');
    });
};

const taskUpdate = async (req, res) => {
  let { id, last_name } = req.body;
  try {
    const user = await User.findOne({
      where: { id: id },
    });
    user.lastName = last_name;
    user.save();
    res.status(200).json('record has been Updated');
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
const deleteTask = async (req, res) => {
  const id = req.params.id;
  try {
    await User.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json('record has been deleted');
  } catch (error) {
    res.status(500).json('not found');
  }
};

module.exports = {
  getAllTask,
  addNewTask,
  getSingleUser,
  taskUpdate,
  deleteTask,
};
