require('./bootstrap');

import Vue from 'vue';
import vuetify from './plugins/vuetify';

Vue.component('dropzone-list', require('./components/Dropzone/DropzoneList.vue').default);

Vue.component('race-list', require('./components/Race/RaceList.vue').default);
Vue.component('halve-fond-results', require('./components/Race/HalveFondResults.vue').default);
Vue.component('fond-results', require('./components/Race/FondResults.vue').default);

Vue.component('all-results-data-table', require('./components/Result/AllResultsDataTable.vue').default);

Vue.component('pigeon-list', require('./components/Pigeon/PigeonList.vue').default);
Vue.component('single-pigeon-results-table', require('./components/Pigeon/SinglePigeonResultsTable.vue').default);

Vue.component('average-year-mpm', require('./components/Rapport/AverageYearMpm.vue').default);

const app = new Vue({
    el: '#app',
    vuetify,
});
