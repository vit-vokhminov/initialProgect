export enum AppRoutes {
    MAIN = 'main',
    TESTPAGE = 'testpage',
    TESTPAGEGETPARAM = 'testpagegetparam',
    // lost
    NOT_FOUND = 'not_found',
}

export const getRouteMainPage = () => '/';
export const getRouteTestPage = () => '/testpage';
export const getRouteTestPageGetParam = (id: string) => `/testpagegetparam/${id}`;
