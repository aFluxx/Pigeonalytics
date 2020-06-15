require('./bootstrap');

import Vue from 'vue';
import vuetify from './plugins/vuetify';

Vue.component('dropzone-list', require('./components/Dropzone/DropzoneList.vue').default);

Vue.component('race-list', require('./components/Race/RaceList.vue').default);
Vue.component('single-race-results-table', require('./components/Race/SingleRaceResultsTable.vue').default);

Vue.component('all-results-data-table', require('./components/Result/AllResultsDataTable.vue').default);

Vue.component('pigeon-list', require('./components/Pigeon/PigeonList.vue').default);
Vue.component('single-pigeon-results-table', require('./components/Pigeon/SinglePigeonResultsTable.vue').default);

Vue.component('average-year-mpm', require('./components/Rapport/AverageYearMpm.vue').default);

const app = new Vue({
    el: '#app',
    vuetify,
});
