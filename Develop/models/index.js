// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

Products.belongsToMany(Tags, {
  through: {
    model: ProductTag,
    unique: false,
  },

  as: "product_tags",
});

Tags.belongsToMany(Products, {
  through: {
    model: ProductTag,
    unique: false,
  },

  as: "tags_products",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)
