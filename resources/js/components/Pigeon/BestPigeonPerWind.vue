<template>
    <v-card>
        <v-card-title>
            <span v-text="'Beste duif per wind'"></span>
            <v-spacer></v-spacer>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Zoeken"
            ></v-text-field>
        </v-card-title>
        <v-card-text> </v-card-text>
        <v-card-text>
            Wind: {{ data.dropzone }} | Jaar: {{ data.year }}
        </v-card-text>
        <v-data-table
            :headers="headers"
            :items="arrayItems"
            :search="search"
            :single-expand="false"
            :show-expand="true"
            :footer-props="{ 'items-per-page-options': [10, 30, 50, 100, -1] }"
            :sort-by="['amount_races', 'avg']"
            :sort-desc="[true, false]"
            item-key="ringnumber"
            multi-sort
        >
            <template v-slot:expanded-item="{ item }">
                <v-data-table
                    :headers="headersInner"
                    :items="item.results"
                    :search="search"
                    :footer-props="{
                        'items-per-page-options': [30, 50, 100, -1],
                    }"
                    :sort-by="['race.unloading_time']"
                    :sort-desc="[true]"
                    item-key="id"
                    multi-sort
                >
                    <template v-slot:[`item.race.id`]="{ item }">
                        <a :href="raceUrl('race.show', item.race.id)">
                            {{ item.race.id }}
                        </a>
                    </template>
                    <template v-slot:[`item.race.unloading_time`]="{ item }">
                        <span class="tw-whitespace-no-wrap">
                            {{ item.race.unloading_time }}
                        </span>
                    </template>
                    <template v-slot:[`item.mpm`]="{ item }">
                        {{ parseFloat(item.mpm).toFixed(4) }}
                    </template>
                </v-data-table>
            </template>

            <template v-slot:[`item.ringnumber`]="{ item }">
                <a :href="'/pigeon/' + item.pigeon_id">{{ item.ringnumber }}</a>
            </template>

            <template v-slot:[`item.avg`]="{ item }">
                {{ parseFloat(item.avg).toFixed(4) }}
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
export default {
    props: ["items", "data"],

    data() {
        return {
            expanded: [],
            search: "",
            headers: [
                {
                    text: "Ringnumber",
                    sortable: true,
                    value: "ringnumber",
                },
                {
                    text: "Gemiddelde snelheid",
                    sortable: true,
                    value: "avg",
                },
                {
                    text: "Aantal races",
                    sortable: true,
                    value: "amount_races",
                },
            ],

            headersInner: [
                {
                    text: "Race ID",
                    value: "race.id",
                },
                {
                    text: "Plaats",
                    value: "race.dropzone.name",
                },
                {
                    text: "Datum",
                    value: "race.unloading_time",
                },
                {
                    text: "Snelheid",
                    value: "mpm",
                },
                {
                    text: "Wind",
                    value: "race.wind_formatted",
                },
                {
                    text: "Wolken",
                    value: "race.overcast_formatted",
                },
                {
                    text: "Regen",
                    value: "race.rainfall_formatted",
                },
                {
                    text: "Result ID",
                    value: "id",
                },
            ],
        };
    },

    computed: {
        arrayItems() {
            return Object.keys(this.items).map((key) => {
                return this.items[key];
            });
        },
    },

    methods: {
        raceUrl(named_route, options) {
            return window.route(named_route, options);
        },
    },
};
</script>
