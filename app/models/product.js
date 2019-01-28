module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "product",
    {
      id: { primaryKey: true, type: DataTypes.INTEGER, autoIncrement: true },
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      url: DataTypes.STRING
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );
  return Product;
};
