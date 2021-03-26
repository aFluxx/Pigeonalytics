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
            Categorie: {{ data.category }} | Jaar: {{ data.year }} | Aantal
            races: {{ data.amountOfRaces }}
        </v-card-text>
        <v-data-table
            :headers="headers"
            :items="arrayItems"
            :search="search"
            :single-expand="false"
            :expanded.sync="expanded"
            :footer-props="{ 'items-per-page-options': [10, 30, 50, 100, -1] }"
            :sort-by="['amountOfRacesWithValidCoefficient', 'coefficient']"
            :sort-desc="[true, false]"
            item-key="ringnumber"
            multi-sort
        >
            <template v-slot:[`item.ringnumber`]="{ item }">
                <a :href="'/pigeon/' + item.pigeon_iid">{{
                    item.ringnumber
                }}</a>
            </template>

            <template v-slot:[`item.coefficient`]="{ item }">
                {{ parseFloat(item.coefficient).toFixed(4) }}
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
                    text: "Coefficient",
                    sortable: true,
                    value: "coefficient",
                },
                {
                    text: "Aantal races geteld",
                    sortable: true,
                    value: "amountOfRacesWithValidCoefficient",
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
