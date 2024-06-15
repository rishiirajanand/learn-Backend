

export default class ProductModel {
  constructor(_id, _name, _desc, _price, _imageUrl) {
    this.id = _id;
    this.name = _name;
    this.desc = _desc;
    this.price = _price;
    this.imageUrl = _imageUrl;
  }

  static get() {
    return products;
  }

  static add({name, desc, price, imageUrl}){
    const myProduct = new ProductModel(products.length+1, name, desc, price, imageUrl)
    products.push(myProduct)
  }


}

let products = [
  new ProductModel(
    1,
    "Product 1",
    "Description for Product 1",
    19.99,
    "https://m.media-amazon.com/images/I/61jBLw5Bq9L._SY425_.jpg"
  ),
  new ProductModel(
    2,
    "Product 2",
    "Description for Product 2",
    10.99,
    "https://m.media-amazon.com/images/I/5177eLEs+YL._SY445_SX342_.jpg"
  ),
  new ProductModel(
    3,
    "Product 3",
    "Description for Product 3",
    60.55,
    "https://m.media-amazon.com/images/I/81TwewImvVL._AC_UY327_FMwebp_QL65_.jpg"
  ),
];
