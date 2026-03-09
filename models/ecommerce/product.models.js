import mongoose from "mongoose";
import { Category } from "./category.models";

const productSchema=new mongoose.Schema({
    productName:{
        type:String,
        required:true,
        unique:true,
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        default:0
    },
    prodImage:{
        type:String
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId;
        ref:"User"
    }
},{timestamps:true});


export const Product=mongoose.model("Product",productSchema);