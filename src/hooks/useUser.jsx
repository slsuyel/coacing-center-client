import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "../baseurl/BaseUrl";
import { AuthContext } from "../Providers/AuthProviders";

const useUser = () => {
    const { user } = useContext(AuthContext);
    const [userLoading, setUserLoading] = useState(true); 

    const { data: userResponse } = useQuery({
        queryKey: ['user', user?.email],
        queryFn: async () => {
            const res = await fetch(`${baseUrl}/users/${user?.email}`);
            const data = await res.json();
            setUserLoading(false); 
            return data;
        },
        enabled: !!user?.email,
    });

    return {
        userResponse,
        userLoading
    };
}

export default useUser;
