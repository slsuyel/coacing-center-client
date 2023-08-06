import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "../baseurl/BaseUrl";

const useAllStudent = () => {
    const { refetch, data: allStudents = [], isLoading } = useQuery({
        queryKey: ["addclass",],
        queryFn: async () => {
            const res = await fetch(`${baseUrl}/sell/programs`)
            return res.json()
        },
    })
    return [allStudents, refetch, isLoading]
};



export default useAllStudent;