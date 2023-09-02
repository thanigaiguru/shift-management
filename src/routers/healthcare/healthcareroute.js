const getModule = moduleName => {
    let components = {
        healthcare : () => import(/* webpackChunkName : HealthCare*/ "../../pages/healthcare/HealthCare.vue")
    }

    return components[moduleName]
}

const componentHandler = (moduleName) => {
    let currHandler;
    currHandler = getModule(moduleName)
    return currHandler();
}

let getHealthCareRoutes = () => {
    return {
        path : '/healthcare',
        name : 'HealthCare',
        component : () => componentHandler('healthcare')
    }
}

let healthCareRoutes = getHealthCareRoutes();

export default healthCareRoutes;