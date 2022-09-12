import config from '~/config';

//Layouts

//Pages
import Home from '~/pages/Home';
import Chart from '~/pages/Chart';
import Radio from '~/pages/Radio';
import NewsMusic from '~/pages/NewsMusic';
import Category from '~/pages/Category';
import Top100 from '~/pages/Top100';

//Public routes
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
        // children: [
        //     {
        //         path: 'profile',
        //         component: Category,
        //     },
        // ],
    },
    { path: config.routes.category, component: Category },
    { path: config.routes.chart, component: Chart },
    { path: config.routes.radio, component: Radio },
    { path: config.routes.newsmusic, component: NewsMusic },
    { path: config.routes.category, component: Category },
    { path: config.routes.top100, component: Top100 },
];

//Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
