<template>
    <v-card>
        <v-tabs v-model="tab" background-color="primary" dark>
            <v-tab>Vitesse</v-tab>
            <v-tab>Halve Fond</v-tab>
            <v-tab>Kleine Fond</v-tab>
            <v-tab>Fond</v-tab>
            <v-tab>Grote Fond</v-tab>
            <v-tab>Kinderen</v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
            <v-tab-item>
                <results-table
                    type="pigeon"
                    discipline="vit"
                    :pigeon="pigeon"
                    :results="resultsVitesse"
                ></results-table>
            </v-tab-item>

            <v-tab-item>
                <results-table
                    type="pigeon"
                    discipline="hfo"
                    :pigeon="pigeon"
                    :results="resultsHalveFond"
                ></results-table>
            </v-tab-item>

            <v-tab-item>
                <results-table
                    type="pigeon"
                    discipline="kle"
                    :pigeon="pigeon"
                    :results="resultsKleineFond"
                ></results-table>
            </v-tab-item>

            <v-tab-item>
                <results-table
                    type="pigeon"
                    discipline="fon"
                    :pigeon="pigeon"
                    :results="resultsFond"
                ></results-table>
            </v-tab-item>

            <v-tab-item>
                <results-table
                    type="pigeon"
                    discipline="gfo"
                    :pigeon="pigeon"
                    :results="resultsGroteFond"
                ></results-table>
            </v-tab-item>

            <v-tab-item>
                <v-list-item v-for="(child, i) in children" :key="i">
                    <v-list-item-content>
                        <v-list-item-title>
                            <a :href="`/pigeon/` + child.id">
                                {{ child.ringnumber }}
                            </a>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-tab-item>
        </v-tabs-items>
    </v-card>
</template>

<script>
import ResultsTable from "../Result/ResultsTable";

export default {
    props: [
        "pigeon",
        "resultsVitesse",
        "resultsHalveFond",
        "resultsKleineFond",
        "resultsFond",
        "resultsGroteFond",
        "allResults",
        "children",
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
