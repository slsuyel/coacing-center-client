import { useQuery } from "@tanstack/react-query";

const useAllStudent = () => {
    const { refetch, data: allClass = [], isLoading } = useQuery({
        queryKey: ["addclass",],
        queryFn: async () => {
            const res = await fetch(`https://ass-12-server-eight.vercel.app/addclasses`)
            return res.json()
        },
    })
    return [allClass, refetch, isLoading]
};



export default useAllStudent;