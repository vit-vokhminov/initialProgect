import { MainPage } from '@/pages/MainPage';
import { TestPage } from '@/pages/TestPage';
import { TestPageGetParam } from '@/pages/TestPageGetParam';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { AppRoutesProps } from '@/shared/types/router';
import {
    AppRoutes,
    getRouteMainPage,
    getRouteTestPage,
    getRouteTestPageGetParam,
} from '@/shared/const/router';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMainPage(),
        element: <MainPage />,
    },
    [AppRoutes.TESTPAGE]: {
        path: getRouteTestPage(),
        element: <TestPage />,
    },
    [AppRoutes.TESTPAGEGETPARAM]: {
        path: getRouteTestPageGetParam(':id'),
        element: <TestPageGetParam />,
        authOnly: true,
    },
    // lost
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
