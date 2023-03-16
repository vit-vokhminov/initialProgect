import React from 'react';
import { createRoot } from 'react-dom/client';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';

import App from '@/app/App';
import '@/app/styles/index.scss';

const container = document.getElementById('root');

if (!container) {
    throw new Error(
        'Контейнер root не найден. НЕ удалось вмонтировать реакт приложение'
    );
}

const root = createRoot(container);

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>
);
