import axios from 'axios';

const URL = window.location.origin;


export default {
    eEDrive : ({ commit }) => {
        return new Promise(( resolve, reject ) => {
            axios.get(`${URL}`)
                .then((res) => {
                    commit('', res);
                    resolve(res)
                }), (err) => {
                    reject(err)
                }
        })
    }
}
