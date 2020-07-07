<template>
    <v-card>
        <v-card-title>
            <span v-text="pigeon.ringnumber + ' - Vitesse / Halve Fond'"></span>
            <v-spacer></v-spacer>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search"></v-text-field>
        </v-card-title>
        <v-data-table
            :headers="headers"
            :items="resultsData"
            :search="search"
            :single-expand="false"
            :expanded.sync="expanded"
            :footer-props="{'items-per-page-options':[10, 30, 50, 100, -1]}"
            item-key="id"
            show-expand
            multi-sort
            class="elevation-1"
        >
            <template v-slot:expanded-item="{ headers, item }">
                <td :colspan="headers.length">
                    <p class="tw-mt-2">
                        <strong>Dropzone:</strong>
                        {{ item.race.dropzone.name }} ({{ item.race.dropzone.distance }})
                    </p>
                    <p>
                        <strong>Type:</strong>
                        {{ item.race.type_formatted }}
                    </p>

                    <p class="tw-whitespace-no-wrap text-md">
                        <strong>Released:</strong>
                        {{ item.race.unloading_time }}
                    </p>

                    <p class="tw-whitespace-no-wrap text-md">
                        <strong>Arrived:</strong>
                        {{ item.arrival_time }}
                    </p>
                </td>
            </template>

            <template v-slot:item.place_personal="{ item }">
                <span class="tw-whitespace-no-wrap" v-if="item.place_personal != 1000000">
                    <strong>{{ item.place_personal }}</strong>
                    / {{ item.race.amount_of_pigeons_personal }}
                </span>
            </template>
            <template slot="selection" slot-scope="data">{{ data.item.name }}, {{ data.item.group }}</template>

            <template v-slot:item.interval="{ item }">
                <span
                    class="tw-whitespace-no-wrap"
                    v-if="item.interval"
                >{{ (Math.round(item.interval * 100) / 100).toFixed(2) }}</span>
            </template>

            <template v-slot:item.mpm="{ item }">
                <span
                    class="tw-whitespace-no-wrap"
                    v-if="item.mpm"
                >{{ (Math.round(item.mpm * 100) / 100).toFixed(3) }}</span>
            </template>

            <template v-slot:item.place_regio="{ item }">
                <span
                    class="tw-whitespace-no-wrap"
                    v-if="item.place_regio && item.place_regio != 1000000"
                >
                    <strong>{{ item.place_regio }}</strong>
                    / {{ item.race.amount_of_pigeons_regio }}
                </span>
            </template>
            <template v-slot:item.coefficient_regio="{ item }">
                <span
                    class="tw-whitespace-no-wrap"
                    v-if="item.coefficient_regio && item.coefficient_regio != 1000000"
                >{{ (Math.round(item.coefficient_regio * 100) / 100).toFixed(2) }}%</span>
            </template>

            <template v-slot:item.place_overkoepeling="{ item }">
                <span
                    class="tw-whitespace-no-wrap"
                    v-if="item.place_overkoepeling && item.place_overkoepeling != 1000000"
                >
                    <strong>{{ item.place_overkoepeling }}</strong>
                    / {{ item.race.amount_of_pigeons_overkoepeling }}
                </span>
            </template>
            <template v-slot:item.coefficient_overkoepeling="{ item }">
                <span
                    class="tw-whitespace-no-wrap"
                    v-if="item.coefficient_overkoepeling && item.coefficient_overkoepeling != 1000000"
                >{{ (Math.round(item.coefficient_overkoepeling * 100) / 100).toFixed(2) }}%</span>
            </template>

            <template v-slot:item.actions="{ item }">
                <div class="tw-flex tw-my-2" v-if="authed">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                :href="'/result/' + item.id + '/edit'"
                                target="_blank"
                                class="mx-2"
                                fab
                                x-small
                                link
                                color="green lighten-2"
                                v-bind="attrs"
                                v-on="on"
                            >
                                <v-icon dark>mdi-pencil</v-icon>
                            </v-btn>
                        </template>
                        <span>Edit result</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                :href="'/race/' + item.race.id"
                                target="_blank"
                                class="mx-2"
                                fab
                                x-small
                                link
                                color="red"
                                v-bind="attrs"
                                v-on="on"
                            >
                                <v-icon dark>mdi-table-large</v-icon>
                            </v-btn>
                        </template>
                        <span>See race details</span>
                    </v-tooltip>
                </div>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
export default {
    props: ["pigeon", "results"],

    data() {
        return {
            expanded: [],
            search: "",
            authed: typeof authed !== "undefined",
            headers: [
                { text: "", sortable: false, value: "actions" },
                {
                    text: "Dropzone",
                    sortable: true,
                    value: "race.dropzone.name"
                },
                {
                    text: "Place (Personal)",
                    sortable: true,
                    value: "place_personal",
                    align: "end"
                },
                {
                    text: "GT",
                    sortable: true,
                    value: "nominated",
                    align: "end"
                },
                { text: "mpm", value: "mpm", align: "end" },
                { text: "Place (Regio)", value: "place_regio" },
                { text: "Coeff (Regio)", value: "coefficient_regio" },
                { text: "Place (Overkoepeling)", value: "place_overkoepeling" },
                {
                    text: "Coeff (Overkoepeling)",
                    value: "coefficient_overkoepeling"
                }
            ],
            resultsData: this.results
        };
    }
};
</script>
