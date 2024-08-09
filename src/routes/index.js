import { HeaderOnly } from '../components/Layout';

import Home from '../pages/Home';
import Following from '../pages/Following';
import Upload from '../pages/Upload';
import Search from '../pages/Search';
import Profile from '../pages/Profile'
import routes from '../config/routes';

const publicRoutes = [
    {
        path: routes.home,
        component: Home,
    },
    {
        path: routes.following,
        component: Following,
    },
    {
        path: routes.upload,
        component: Upload,
        layout: HeaderOnly
    },
    {
        path: routes.search,
        component: Search,
        layout: null
    },
    {
        path: routes.profile,
        component: Profile,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
