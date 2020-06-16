require('./bootstrap');

import Vue from 'vue';
import vuetify from './plugins/vuetify';

// Dropzone
Vue.component('dropzone-list', require('./components/Dropzone/DropzoneList.vue').default);

// Race
Vue.component('race-list', require('./components/Race/RaceList.vue').default);
Vue.component('race-results-hfo', require('./components/Race/RaceResultsHfo.vue').default);
Vue.component('race-results-fon', require('./components/Race/RaceResultsFon.vue').default);

// Result
Vue.component('all-results-data-table', require('./components/Result/AllResultsDataTable.vue').default);
Vue.component('all-results-hfo', require('./components/Result/AllResultsHfo.vue').default);
Vue.component('all-results-fon', require('./components/Result/AllResultsFOn.vue').default);

// Pigeon
Vue.component('pigeon-list', require('./components/Pigeon/PigeonList.vue').default);
Vue.component('single-pigeon-results-table', require('./components/Pigeon/SinglePigeonResultsTable.vue').default);
Vue.component('results-hfo', require('./components/Pigeon/ResultsHfo.vue').default);
Vue.component('results-fon', require('./components/Pigeon/ResultsFon.vue').default);

// Varia
Vue.component('average-year-mpm', require('./components/Rapport/AverageYearMpm.vue').default);

const app = new Vue({
    el: '#app',
    vuetify,
});
