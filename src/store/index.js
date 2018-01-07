import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        message: "Welcome to Vue.js Rollup boilerplate"
    },
    getters: {
        message: state => state.message
    }
})