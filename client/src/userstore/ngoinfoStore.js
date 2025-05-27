import { create } from "zustand";

const NgoStore = create((set)=>({
    NgoProductList:[],
    setNgoProductList:(data)=>set({NgoProductList:data})
}))

export default NgoStore
