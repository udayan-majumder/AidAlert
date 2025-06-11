import { Average } from "next/font/google";
import { create } from "zustand";

const  AdminInfoStore = create((set)=>({
    UserList:[],
    SOSInfoList:[],
    AverageRiskList:[],
    setUserList:(data) => set({UserList:data}),
    setSOSInfo:(data) =>set({SOSInfoList:data}),
    setAverageRiskList:(data) =>set({AverageRiskList:data})
}))

export default AdminInfoStore;
