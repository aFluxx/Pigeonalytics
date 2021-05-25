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
            <template v-slot:expanded-item="{ headers, item }">
                <td :colspan="headers.length" class="tw-p-4">
                    <tr>
                        <td class="tw-p-2">Race ID</td>
                        <td class="tw-p-2">Plaats</td>
                        <td class="tw-p-2">Datum</td>
                        <td class="tw-p-2">Snelheid</td>
                        <td class="tw-p-2">Wind</td>
                        <td class="tw-p-2">Wolken</td>
                        <td class="tw-p-2">Regen</td>
                        <td class="tw-p-2">Result ID</td>
                    </tr>
                    <tr v-for="(result, i) in item.results" :key="i">
                        <td class="tw-p-2">
                            <a :href="raceUrl('race.show', result.race.id)">
                                {{ result.race.id }}
                            </a>
                        </td>
                        <td class="tw-p-2">
                            {{ result.race.dropzone.name }}
                        </td>
                        <td class="tw-p-2">
                            {{ parseFloat(result.mpm).toFixed(4) }}
                        </td>
                        <td class="tw-p-2">
                            <strong>{{ result.race.year }}</strong> -
                            {{ result.race.unloading_time }}
                        </td>
                        <td class="tw-p-2">
                            {{ result.race.wind_formatted }}
                        </td>
                        <td class="tw-p-2">
                            {{ result.race.overcast_formatted }}
                        </td>
                        <td class="tw-p-2">
                            {{ result.race.rainfall_formatted }}
                        </td>
                        <td class="tw-p-2">
                            {{ result.id }}
                        </td>
                    </tr>
                </td>
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
