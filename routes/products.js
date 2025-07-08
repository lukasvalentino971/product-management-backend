const express = require('express');
const {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');
const { validateProduct } = require('../utils/validator');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProduct);
router.post('/', auth, upload.single('image'), validateProduct, createProduct);
router.put('/:id', auth, upload.single('image'), validateProduct, updateProduct);
router.delete('/:id', auth, deleteProduct);

module.exports = router;