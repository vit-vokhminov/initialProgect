import { useSelector } from 'react-redux';
import { getUserAuthData, getUserRoles, UserRole } from '@/entities/User';
import { Navigate, useLocation } from 'react-router-dom';
import { getRouteMainPage } from '@/shared/const/router';
import { useMemo } from 'react';

interface RequireAuthProps {
    children: JSX.Element;
    roles?: UserRole[];
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((requiredRole) => {
            const hasRole = userRoles?.includes(requiredRole);
            return hasRole;
        });
    }, [roles, userRoles]);

    if (!auth) {
        // Если пользователь не авторизован, и попал на защищенный маршрут, то редиректим на главную
        return <Navigate to={getRouteMainPage()} state={{ from: location }} replace />;
    }
        // Если у пользователя нет роли для доступа, редиректим на страницу нет доступа
    if (!hasRequiredRoles) {
        return <Navigate to={getRouteMainPage()} state={{ from: location }} replace />;
    }

    return children;
}
