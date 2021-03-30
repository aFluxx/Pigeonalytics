<template>
    <v-card>
        <v-card-title>
            <span v-text="'Beste kwekers'"></span>
            <v-spacer></v-spacer>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Zoeken"
            ></v-text-field>
        </v-card-title>
        <v-card-text> </v-card-text>
        <v-card-text>
            Vlucht: {{ data.dropzone }} | Jaar: {{ data.year }} | Type:
            {{ data.coeff }}
        </v-card-text>
        <v-data-table
            :headers="headers"
            :items="arrayItems"
            :search="search"
            :single-expand="false"
            :expanded.sync="expanded"
            :show-expand="true"
            :footer-props="{ 'items-per-page-options': [10, 30, 50, 100, -1] }"
            :sort-by="['amountOfRacesThatCount', 'avgCoefficient']"
            :sort-desc="[true, false]"
            item-key="ringnumber"
            multi-sort
        >
            <template v-slot:expanded-item="{ headers, item }">
                <td :colspan="headers.length" class="tw-p-4">
                    <tr>
                        <td class="tw-p-2">Race ID</td>
                        <td class="tw-p-2">Plaats</td>
                        <td class="tw-p-2">Aantal duiven</td>
                        <td class="tw-p-2">Coefficient</td>
                        <td class="tw-p-2">Wind</td>
                        <td class="tw-p-2">Result ID</td>
                    </tr>
                    <tr v-for="(result, i) in item.results" :key="i">
                        <td class="tw-p-2">
                            <a :href="raceUrl('race.show', result.race.id)">
                                {{ result.race.id }}
                            </a>
                        </td>
                        <td class="tw-p-2">
                            {{ result["place_" + keyword] }}
                        </td>
                        <td class="tw-p-2">
                            {{ result.race["amount_of_pigeons_" + keyword] }}
                        </td>
                        <td class="tw-p-2">
                            {{ result.race.wind_formatted }}
                        </td>
                        <td class="tw-p-2">
                            {{
                                Math.round(
                                    (result["coefficient_" + keyword] +
                                        Number.EPSILON) *
                                        100
                                ) / 100
                            }}
                        </td>
                        <td class="tw-p-2">
                            {{ result.id }}
                        </td>
                    </tr>
                </td>
            </template>

            <template v-slot:[`item.ringnumber`]="{ item }">
                <a :href="'/pigeon/' + item.pigeonId">{{ item.ringnumber }}</a>
            </template>

            <template v-slot:[`item.avgCoefficient`]="{ item }">
                {{ parseFloat(item.avgCoefficient).toFixed(4) }}
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
export default {
    props: {
        items: Array,
        data: Object,
    },

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
                    text: "Gemiddelde coefficient",
                    sortable: true,
                    value: "avgCoefficient",
                },
                {
                    text: "Aantal races die tellen",
                    sortable: true,
                    value: "amountOfRacesThatCount",
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

        keyword() {
            return this.data.coeff.split("_")[1];
        },
    },

    methods: {
        raceUrl(named_route, options) {
            return window.route(named_route, options);
        },
    },
};
</script>
