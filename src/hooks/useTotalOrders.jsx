import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "../baseurl/BaseUrl";

const useTotalOrders = () => {
    const { refetch, data: orders = [], isLoading } = useQuery({
        queryKey: ["orders",],
        queryFn: async () => {
            const res = await fetch(`${baseUrl}/orders`)
            return res.json()
        },
    })
    return [orders, refetch, isLoading]
};

export default useTotalOrders;;