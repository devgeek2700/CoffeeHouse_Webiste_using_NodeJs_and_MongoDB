const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt =  require('jsonwebtoken');




const coffeeSchema = new mongoose.Schema({
    Name: {
        type : String,
        required: true,
        unique:true
    },

    Email: {
        type : String,
        required: true,
        unique:true
    },

    Password:{
        type : String,
        required: true,
        unique:true
    },

    Confirmpassword: {
        type : String,
        required: true,
    },

    tokens:[{
        token:{
          type: String,
          required: true
        }
    }]
})



// Token generate -----> cookies
coffeeSchema.methods.generateToken = async function(){
    try{
  
      const token = jwt.sign({_id:this._id.toString()}, process.env.SECRET_KEY);
      this.tokens = this.tokens.concat({token: token});
      await this.save();
      return token;
  
    }catch(error){
      console.log(error);
    }
  }

 // Password Encryption
 coffeeSchema.pre("save", async function(next){
    if(this.isModified("Password")){
      this.Password = await bcrypt.hash(this.Password , 10);
      this.Confirmpassword = await bcrypt.hash(this.Confirmpassword , 10);
      
      next();
  
    }
  });






const Coffee = new mongoose.model("Coffee", coffeeSchema);

module.exports = Coffee;