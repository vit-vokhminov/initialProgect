import React, { useEffect } from 'react';
import { AppRouter } from './providers/router';
import { getUserInited, userActions } from '@/entities/User';
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
    const dispatch = useDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className='App'>
            <div className='content-page'>{inited && <AppRouter />}</div>
        </div>
    );
};

export default App;
