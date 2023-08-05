import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "../baseurl/BaseUrl";

const usePrograms = () => {
    const { refetch, data: programs = [], isLoading } = useQuery({
        queryKey: ["programs",],
        queryFn: async () => {
            const res = await fetch(`${baseUrl}/programs`)
            return res.json()
        },
    })
    return [programs, refetch, isLoading]
};


export default usePrograms;