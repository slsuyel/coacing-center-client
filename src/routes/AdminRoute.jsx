import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import useUser from '../hooks/useUser';

const AdminRoute = ({ children }) => {
    const location = useLocation();

    const { userResponse, userLoading } = useUser();

    if (userLoading) {
        return <div>Loading...</div>;
    }

    if (userResponse.role == 'admin') {
        return children;
    } else {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }
};

export default AdminRoute;
