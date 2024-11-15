const User=require("./../models/user")
const Pro=require("../models/product")


async function addUser(userModel){

let user=new User({
    ...userModel
})
await user.save()
return user.toObject();

}

async function addProduct(productModel){

  let product=new Pro({
      ...productModel
  })
  await product.save()
  return product.toObject();
  
  }


async function getUsers(){
    const user= await  User.find()
    return user.map(x=>x.toObject())
   }

   
   async function allProducts() {
    try {
      const products = await Pro.find();
      return products.map(x => x.toObject());
    } catch (error) {
      console.error("Error retrieving products:", error);
      throw error;
    }
  }
 
  async function deleteProduct(id) {
    const filter = { id: id };  
    console.log("filter :", filter);
    
    const product = await Pro.findOneAndDelete(filter); 
    return product ? product.toObject() : null;
}

async function loginUser(email, password) {
  const user = await User.findOne({ email: email });

  if (user && user.password === password) {
      return { status: "ok", user };
  } else {
      throw new Error("Invalid email or password");
  }
}

  
module.exports={addUser,getUsers,deleteProduct,loginUser,addProduct,allProducts}; 