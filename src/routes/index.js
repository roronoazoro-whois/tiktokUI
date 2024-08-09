import { HeaderOnly } from '../layouts';

import Home from '../pages/Home';
import Following from '../pages/Following';
import Upload from '../pages/Upload';
import Search from '../pages/Search';
import Profile from '../pages/Profile';
import routes from '../config';

const publicRoutes = [
    {
        path: routes.routes.home,
        component: Home,
    },
    {
        path: routes.routes.following,
        component: Following,
    },
    {
        path: routes.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: routes.routes.search,
        component: Search,
        layout: null,
    },
    {
        path: routes.routes.profile,
        component: Profile,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
