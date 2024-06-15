import path from 'path';
import ProductModel from '../Models/product.models.js';


export default class ProductController
{
    getProducts(req, res){
        const products = ProductModel.get();
        return res.render('products', {products})
    }

    getAddForm(req, res){
        return res.render('new-product');
    }

    addNewProduct(req, res){
        const products = ProductModel.get();
        ProductModel.add(req.body)
        return res.render('products', {products})
    }
}