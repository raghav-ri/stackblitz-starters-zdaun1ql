import mongoose from "mongoose";

const itemquantity=new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId;
        ref:"Product"
    },
    quantity:{
        type:Number,
        required:true
    }
})

const orderSchema=new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId;
        ref:"User"
    },
    orderItem:[itemquantity],
    address:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["Ordered","Shipped","Out For Delivery","Delivered","Not Delivered"],
        default:"Pending"

    }
},{timestamps:true});


export const Order=mongoose.model("Order",orderSchema);
