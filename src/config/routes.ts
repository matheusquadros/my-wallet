import IRoute from '../types/IRoute';
import Home from '../routes/home';
import GoalDetail from '../routes/goal-detail';

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home Page',
        component: Home,
        exact: true
    },
    /* {
        path: '/about',
        name: 'About Page',
        component: AboutPage,
        exact: true
    },*/
    {
        path: '/goal',
        name: 'Goal',
        component: GoalDetail,
        exact: true
    },
]

export default routes;