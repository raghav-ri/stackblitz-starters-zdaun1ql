import mongoose from "mongoose";
import { SubTodo } from "./sub_todo.models";

const todoSchema=mongoose.Schema({
  title:{
    type:String,
    required:true,
    unique:true
  },
  SubTodo:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"SubTodo"
  },
  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"

  }
},{timestamps:true});


export const Todo=mongoose.model("Todo",todoSchema);