import { create } from "zustand";


const useWeatherstore = create((set) => ({
    weatherOrgApi: [],
    openMeteoApi:[],
    airQualityApi:[],
    oceanApi:[],
    soilApi:[],
    geminiResponse:[],
    loading: false,

    setWeatherOrgApi: (data) => set(()=>({ weatherOrgApi:data })),
    setopenMeteoApi: (data) => set(()=>({ openMeteoApi:data })),
    setAirQualityApi: (data) => set(()=>({ airQualityApi:data })),
    setOceanApi: (data) => set(()=>({ oceanApi:data })),
    setSoilApi: (data) => set(()=>({ soilApi:data })),
    setGeminiResponse: (data) => set(()=>({ geminiResponse:data})),
    setLoading: () => set(()=>({ loading:true})),
}))

export default useWeatherstore;