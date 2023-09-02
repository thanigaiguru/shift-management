import Vue from 'vue';
import Router from '../router';

const ProtoType = Vue.prototype;

ProtoType.$goTo = (routerName, params) => {
    let route = { name : routerName }

    if (typeof params == 'object') {
        route.params = params;
    }
    Router.push(route).catch(() => {});
}