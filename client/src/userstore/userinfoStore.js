import { create } from "zustand";


const UserDetails =  create((set)=>({
    UserInfo:[],
    Userloading:true,
    setUserInfo:(data)=>set({UserInfo:data}),
    setUserloading:(data)=>set({Userloading:data})
}))


export default UserDetails

