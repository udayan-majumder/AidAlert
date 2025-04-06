
import { create } from "zustand";

const UserLocationDetails = create((set)=>({

 coordinates:[] ,
 Refresh:false,
 setcoordinates:(lat,long)=>set(()=>({
   coordinates:{lat,long}
 })),
 setRefresh:(param) =>set(()=>({
 Refresh:param
 }))
}))

export default UserLocationDetails;