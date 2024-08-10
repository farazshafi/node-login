import {productsData} from "../data/productData.js"

export const getAllProduct = (req,res) =>{
    // const product = {
    //     id: productsData.id ,
    //   name: productsData.name,
    //   category: productsData.category,
    //   price: productsData.price,
    //   stock: productsData.stock,
    //   rating:productsData.rating,
    //   description: productsData.description,
    //   brand: productsData.brand
    // }
    return res.render("product",{product: productsData})
}
