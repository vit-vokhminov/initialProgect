import React from 'react';
import { Counter } from '@/entities/Counter';
import axios from 'axios';

export const MainPage = () => {
    React.useEffect(() => {
        axios.get('/books.json').then(({ data }) => {
            console.log(data);
        });
    }, []);

    return (
        <div data-testid='MainPage'>
            <h1>Главная страница</h1>
            <Counter />
        </div>
    );
};

export default MainPage;
