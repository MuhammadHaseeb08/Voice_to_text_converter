
import { combineReducers, createStore } from "redux";
let init= ["Free Ebooks","24/7 Homework Help","24/7  Free college conseling service","About Us"]
let hsi=[{
  name:"Free Ebooks",
  image:"/images/a (1).png"
},
{
  name:"24/7 Home work Help",
  image:"/images/a (2).png"
},
{
  name:"24/7  Free  College conseling"
        
  ,
  image:"/images/a (3).png"
},]
let sub=[{
  name:"Expert Tutor",
  image:"/images/a.png",
  des:"Get personalized help from subject matter experts  "
 
},
{
  name:"Step by Step Explanations",
  image:"/images/b.png",
  des:"We break it down for you "

},
{
  name:"Fast Answers"
        
  ,
  image:"/images/c.png",
  des:"We’ll get you unstuck in as few as 10 mintues"
  

},



]
function Nav(oldData = init, newData) {
  return [...oldData];
}
function hData(oldData = hsi, newData) {
 
  return [...oldData];
}
function subPar(oldData = sub, newData) {
 
  return [...oldData];
}

let compData = combineReducers({ Nav,hData,subPar });
let meraStore = createStore(compData);
export default meraStore;
