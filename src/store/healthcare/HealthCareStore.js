//$Id$

import actions from './HealthCareActions';

let state = {
    shiftList: {},
};

let mutations = {
    appendShitList(state,list) {

        let new_list = {};
        list.forEach((item)=> {
            new_list[id] = item;
        })
        state.shiftList = Object.assign({},state.shiftList,new_list);
    }
};

let getters = {
    getShitList: (state) => (id) => {
        return state.shiftList[id] || {};
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}