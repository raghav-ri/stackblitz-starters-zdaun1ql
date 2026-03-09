import mongoose from "mongoose";

const userSchema=mongoose.Schema({
  userName:{
    type:String,
    required:true,
    unique:true,
    lowercase:true
  },
  email:{
    type:String,
    require:true,
    unique:true,
    lowecase:true
  },
  password:{
    type:String,
    required:true,
    minlegth:6
  }
},{timestamps:true})

export const User=mongoose.model("User",userSchema);