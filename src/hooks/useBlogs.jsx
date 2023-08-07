import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "../baseurl/BaseUrl";

const useBlogs = () => {
    const { refetch, data: allBlogs = [], isLoading } = useQuery({
        queryKey: ["blogs",],
        queryFn: async () => {
            const res = await fetch(`${baseUrl}/blogs`)
            return res.json()
        },
    })
    return [allBlogs, refetch, isLoading]
};

export default useBlogs;;