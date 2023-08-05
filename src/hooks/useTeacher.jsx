import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "../baseurl/BaseUrl";

const useTeacher = () => {
    const { refetch, data: teachers = [], isLoading } = useQuery({
        queryKey: ["teachers",],
        queryFn: async () => {
            const res = await fetch(`${baseUrl}/teachers`)
            return res.json()
        },
    })
    return [teachers, refetch, isLoading]
};


export default useTeacher;