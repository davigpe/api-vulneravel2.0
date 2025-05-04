const express = require('express');
const { body } = require('express-validator');
const {
  register,
  login,
  getAllUsers,
  updateUser,
  deleteUser
} = require('../controllers/userController');
const { verifyToken } = require('../middlewares/authMiddleware');

const router = express.Router();

// Registro
router.post('/register', [
  body('username').isString().notEmpty(),
  body('email').isEmail(),
  body('password').isLength({ min: 6 })
], register);

// Login
router.post('/login', login);

// Listar usuários (protegido)
router.get('/users', verifyToken, getAllUsers);

// Atualizar usuário (protegido)
router.put('/users/:id', verifyToken, [
  body('username').isString().notEmpty()
], updateUser);

// Deletar usuário (protegido)
router.delete('/users/:id', verifyToken, deleteUser);

module.exports = router;
