const UserModel = require("../models/user");
const bcrypt = require("bcryptjs");

module.exports = {
  async post(req, res) {
    try {
      const { email } = req.body;

      if (await UserModel.findOne({ email })) {
        return res.status(400).send({ error: "Email já existente." });
      }

      const user = await UserModel.create(req.body);

      return res.status(200).json(user);
    } catch (err) {
      return res.status(400).json({ error: "Erro ao finalizar operação" });
    }
  },
  async get(req, res) {
    try {
      const { id } = req.params;
      const user = await UserModel.findById(id);

      return res.status(200).json(user);
    } catch (err) {
      return res.status(400).json({ error: "Usuário não encontrado." });
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await UserModel.findOne({ email }).select("+password");

      if (!(await bcrypt.compare(password, user.password))) {
        return res.status(400).send({ error: "Senha incorreta." });
      } else {
        return res.status(200).send({ id: user.id });
      }
    } catch (err) {
      return res.status(400).json({ error: "Conta não encontrada." });
    }
  },
  async getStudents(req, res) {
    try {
      const type = "Aluno";
      const user = await UserModel.find({ type });

      return res.status(200).json(user);
    } catch (err) {
      return res.status(400).json({ error: "Nenhum aluno cadastrado." });
    }
  },
};
