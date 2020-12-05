<template>
    <v-card>
        <v-tabs v-model="tab" background-color="primary" dark>
            <v-tab>Vitesse</v-tab>
            <v-tab>Halve Fond</v-tab>
            <v-tab>Kleine Fond</v-tab>
            <v-tab>Fond</v-tab>
            <v-tab>Grote Fond</v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
            <v-tab-item>
                <results-table
                    type="result"
                    discipline="vit"
                    :results="resultsVitesse"
                ></results-table>
            </v-tab-item>

            <v-tab-item>
                <results-table
                    type="result"
                    discipline="hfo"
                    :results="resultsHalveFond"
                ></results-table>
            </v-tab-item>

            <v-tab-item>
                <results-table
                    type="result"
                    discipline="kle"
                    :results="resultsKleineFond"
                ></results-table>
            </v-tab-item>

            <v-tab-item>
                <results-table
                    type="result"
                    discipline="fon"
                    :results="resultsFond"
                ></results-table>
            </v-tab-item>

            <v-tab-item>
                <results-table
                    type="result"
                    discipline="gfo"
                    :results="resultsGroteFond"
                ></results-table>
            </v-tab-item>

            <v-tab-item>
                <results-table
                    type="result"
                    discipline="all"
                    :results="allResults"
                ></results-table>
            </v-tab-item>
        </v-tabs-items>
    </v-card>
</template>

<script>
import ResultsTable from "../Result/ResultsTable";

export default {
    props: [
        "resultsVitesse",
        "resultsHalveFond",
        "resultsKleineFond",
        "resultsFond",
        "resultsGroteFond",
        "allResults",
    ],

    components: {
        ResultsTable,
    },

    data() {
        return {
            tab: null,
        };
    },
};
</script>
