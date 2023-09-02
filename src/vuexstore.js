//$Id$

import Vue from "vue"; //No I18N
import Vuex from 'vuex'; //No I18N


import healthcarestore from './store/healthcare/HealthCareStore';

Vue.use(Vuex);

let store = new Vuex.Store({
    debug: true,
    
    state: {},
    
    actions: {},

    mutations: {},

    getters: {},

    modules: {
        healthcarestore
    }
});

export default store;