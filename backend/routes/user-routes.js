const express = require('express');
const router=express.Router()

const {addUser,getUsers,deleteProduct,loginUser,addProduct,allProducts}=require('./../handlers/userhandler')

router.post('/users', async (req, res) => {
    try {
       let user= await addUser(req.body);
        res.send(user);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding user");
    }
});

router.post('/product', async (req, res) => {
    try {
       let product= await addProduct(req.body);
        res.send(product);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding product");
    }
});

router.get('/products', async (req, res) => {
    try {
      const products = await allProducts();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).send("Error retrieving products");
    }
  });

router.get('/users', async (req, res) => {
    console.log("data :",req.body);
   let user= await getUsers();
    res.send(user)
    
 });

 router.delete('/product/:id', async (req, res) => {
    const productId = req.params.id;
    
    try {
        const deletedProduct = await deleteProduct(productId);
        if (deletedProduct) {
            res.status(200).send({ message: "Product deleted successfully", product: deletedProduct });
        } else {
            res.status(404).send({ message: "Product not found" });
        }
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).send({ message: "Internal server error" });
    }
});


 router.post('/users/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await loginUser(email, password);
        res.send(user);
    } catch (err) {
        console.error(err.message);
        res.status(401).send("Invalid email or password");
    }
});




 module.exports=router;
