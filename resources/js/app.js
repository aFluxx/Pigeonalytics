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
Vue.component('best-breeders', require('./components/Pigeon/BestBreeders.vue').default);
Vue.component('ace-pigeons', require('./components/Pigeon/AcePigeons.vue').default);
Vue.component('best-pigeon-per', require('./components/Pigeon/BestPigeonPer.vue').default);
Vue.component('add-parents', require('./components/Pigeon/AddParents.vue').default);
Vue.component('parent-select', require('./components/Pigeon/ParentSelect.vue').default);

// Varia
Vue.component('average-year-mpm', require('./components/Rapport/AverageYearMpm.vue').default);

const app = new Vue({
    el: '#app',
    vuetify,
});

Vue.mixin({
    methods: {
        route: route
    }
});
