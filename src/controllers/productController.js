const { product: Product } = require("./../../app/models");

const showRecord = async (req, res) => {
  const foundProduct = await Product.findById(req.params.id);
  return res.json(foundProduct);
};

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const limit = 10;
    const offset = (page - 1) * limit;
    const productlist = await Product.findAndCountAll({ limit, offset });
    const total = productlist.count;
    const pages = Math.ceil(total / limit);

    return res.json({ data: productlist.rows, total, limit, page: Number(page), pages });
  },

  async show(req, res) {
    return await showRecord(req, res);
  },

  async store(req, res) {
    const createdProduct = await Product.create(req.body);
    return res.json(createdProduct);
  },

  async update(req, res) {
    await Product.update(req.body, { where: { id: req.params.id } });
    return await showRecord(req, res);
  },

  async destroy(req, res) {
    const productToDelete = await showRecord(req, res);
    await Product.destroy({ where: { id: req.params.id } });
    return res.json(productToDelete);
  }
};
