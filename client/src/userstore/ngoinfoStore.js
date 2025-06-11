import { create } from "zustand";

const NgoStore = create((set)=>({
    NgoProductList:[],
    NgoCartList:[],
    NgoList:[],
    setNgoProductList:(data)=>set({NgoProductList:data}),
    setNgoCartList:(data)=>set({NgoCartList:data}),
    setNgoList:(data)=>set({NgoList:data})
}))

export default NgoStore
