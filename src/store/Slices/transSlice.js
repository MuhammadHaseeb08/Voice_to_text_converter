import { createSlice } from "@reduxjs/toolkit";

let transactionsSlice=createSlice({
  name:"Transactions",
  initialState:[],
  reducers:{
    addTrans(state,action){},
    delTrans(state,action){}
  }
})
export {transactionsSlice}