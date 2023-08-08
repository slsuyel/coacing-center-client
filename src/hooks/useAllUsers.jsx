import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "../baseurl/BaseUrl";

const useAllUsers = () => {
    const token = localStorage.getItem("access-token");
    const { refetch, data: users = [], isLoading } = useQuery({
        queryKey: ["users",],
        queryFn: async () => {
            const res = await fetch(`${baseUrl}/users`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            })
            return res.json()
        },
    })
    return [users, refetch, isLoading]
};

export default useAllUsers;