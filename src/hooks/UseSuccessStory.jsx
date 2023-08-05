import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "../baseurl/BaseUrl";

const UseSuccessStory = () => {
    const { refetch, data: successStory = [], isLoading } = useQuery({
        queryKey: ["success",],
        queryFn: async () => {
            const res = await fetch(`${baseUrl}/success`)
            return res.json()
        },
    })
    return [successStory, refetch, isLoading]
};



export default UseSuccessStory;