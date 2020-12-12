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
        <v-card-text>
            Van: {{ data.van_jaar }} - Tot: {{ data.tot_jaar }}
        </v-card-text>
        <v-card-text>
            Categorie: {{ data.coeff }} | Threshold: {{ data.threshold }}
        </v-card-text>
        <v-data-table
            :headers="headers"
            :items="arrayItems"
            :search="search"
            :single-expand="false"
            :expanded.sync="expanded"
            :show-expand="true"
            :sort-desc="true"
            :footer-props="{ 'items-per-page-options': [10, 30, 50, 100, -1] }"
            sort-by="weigth"
            item-key="pigeon.ringnumber"
            multi-sort
        >
            <template v-slot:expanded-item="{ headers, item }">
                <td :colspan="headers.length">
                    <tr>
                        <td>Duif</td>
                        <td>Plaats</td>
                        <td>Aantal duiven</td>
                        <td>Coefficient</td>
                        <td>Race ID</td>
                    </tr>
                    <tr v-for="(result, i) in item.results" :key="i">
                        <td>
                            <a :href="result.pigeon.id">
                                {{ result.pigeon.ringnumber }}
                            </a>
                        </td>
                        <td>
                            {{ result.place_national }}
                        </td>
                        <td>
                            {{ result.race.amount_of_pigeons_national }}
                        </td>
                        <td>
                            {{ result.coefficient_national }}
                        </td>
                        <td>
                            {{ result.race.id }}
                        </td>
                    </tr>
                </td>
            </template>

            <template v-slot:[`item.pigeon.ringnumber`]="{ item }">
                <a :href="'/pigeon/' + item.pigeon.id">{{
                    item.pigeon.ringnumber
                }}</a>
            </template>

            <template v-slot:[`item.weigth`]="{ item }">
                <span v-text="item.weigth"></span>
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
                    value: "pigeon.ringnumber",
                },
                {
                    text: "Gewicht",
                    sortable: true,
                    value: "weigth",
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
};
</script>
