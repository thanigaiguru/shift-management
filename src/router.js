import Vue from 'vue';
import Router from 'vue-router';

// Declare the routes with the appropriate order.
import healthCareRoutes from './routers/healthcare/healthcareroute.js';

Vue.use(Router);

let childrenRoutes = [ healthCareRoutes ];

const router = new Router(
    {
        routes: [
            {
                path: `/`,
                name: 'Home', //No I18N
                redirect: {name: 'HealthCare'},
                component: () => import( /* webpackChunkName: "Home" */ './pages/Home.vue'), //No I18N
                children: childrenRoutes
            },
        ],
        mode: 'history' //No I18N
    },
)

export default router;