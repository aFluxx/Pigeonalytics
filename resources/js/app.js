require('./bootstrap');

import Vue from 'vue';
import vuetify from './plugins/vuetify';

Vue.component('all-results-data-table', require('./components/AllResultsDataTable.vue').default);

const app = new Vue({
    el: '#app',
    vuetify,
});
