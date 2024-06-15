import express from 'express';
import ProductController from './src/Controllers/products.controllers.js';
import path from 'path'
import ejsLayout from 'express-ejs-layouts'

const server = express();

server.use(express.static('src/views'));
server.use(ejsLayout);
server.use(express.urlencoded({extended: true}))

server.set('view engine', 'ejs');
server.set('views', path.join(path.resolve(), 'src','Views'))

let productController = new ProductController();
server.get('/', productController.getProducts);
server.get('/addproduct', productController.getAddForm);

server.post('/', productController.addNewProduct);

server.listen(3000, () => {
    console.log('Server is running at port 3000');
})

