require('./bootstrap');

import Vue from 'vue';
import vuetify from './plugins/vuetify';
import moment from 'moment';
Vue.prototype.moment = moment;

// Navigation
Vue.component('navigation-drawer', require('./components/Navigation/NavigationDrawer.vue').default);

// Dropzone
Vue.component('dropzone-list', require('./components/Dropzone/DropzoneList.vue').default);

// Race
Vue.component('race-list', require('./components/Race/RaceList.vue').default);

// Result
Vue.component('result-overview', require('./components/Result/ResultOverview.vue').default);
Vue.component('results-table', require('./components/Result/ResultsTable.vue').default);

// Pigeon
Vue.component('pigeon-list', require('./components/Pigeon/PigeonList.vue').default);
Vue.component('pigeon-overview', require('./components/Pigeon/PigeonOverview.vue').default);
Vue.component('pigeon-search', require('./components/Pigeon/PigeonSearch.vue').default);

// Varia
Vue.component('average-year-mpm', require('./components/Rapport/AverageYearMpm.vue').default);

const app = new Vue({
    el: '#app',
    vuetify,
});
