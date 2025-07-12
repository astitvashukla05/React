import { createContext, useState } from "react";

const UserContext=createContext({
    progress:'', 
    showCart:()=>{},
    hideCart:()=>{},
    showCheckOut:()=>{},
    hideCheckOut:()=>{},
})


export function UserContextProvider({children}){
   const[userProgress,setUserProgress]= useState('')
   function showCart(){
    setUserProgress('cart')

   }
   function hideCart(){
     setUserProgress('')

   }
   function showCheckOut(){
     setUserProgress('checkout')

   }
   function hideCheckOut(){
     setUserProgress('')

   }
   function handleFinish(){
    setUserProgress('')

   }

   const valueCtx={
    progress:userProgress,
    showCart:showCart,
    hideCart:hideCart,
    showCheckOut:showCheckOut,
    hideCheckOut:hideCheckOut,
    handleFinish:handleFinish
   }
    return <UserContext value={valueCtx}>{children}</UserContext>

}
export default UserContext