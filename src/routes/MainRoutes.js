import React from 'react';
import { LoginRoutes } from './LoginRoutes';
import { AppRoutes } from './AppRoutes';
import { useAuth } from '../contexts/Auth';

export function MainRoutes() {
    
    const {user} = useAuth();

    return user.name ? <AppRoutes/> : <LoginRoutes/>;
}