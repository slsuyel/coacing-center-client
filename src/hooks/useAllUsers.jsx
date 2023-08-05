import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "../baseurl/BaseUrl";

const useAllUsers = () => {
    const { refetch, data: users = [], isLoading } = useQuery({
        queryKey: ["users",],
        queryFn: async () => {
            const res = await fetch(`${baseUrl}/users`)
            return res.json()
        },
    })
    return [users, refetch, isLoading]
};

export default useAllUsers;