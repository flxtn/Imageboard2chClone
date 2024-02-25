import axiosInstance from "@/shared/api/api-instance"
import { useQuery } from "@tanstack/react-query"

const deskskey = ['desks']

export function getQueryDesks(){
    return useQuery({
        queryKey: deskskey,
        queryFn: () => axiosInstance.get('/desks'),
        
    })
}
export function getCurrentDeskQuery(desk: string){
    return useQuery({
        queryKey: deskskey.concat(desk),
        queryFn: () => axiosInstance.get(`/${desk}`),
    })
}
