<template>
    <v-card class="tw-mr-6 xxl:tw-mr-0">
        <v-card-title v-if="pigeon">
            <span v-text="pigeon.ringnumber"></span>
        </v-card-title>
        <v-card-title>
            <v-row align="center">
                <v-col cols="3">
                    <v-select
                        v-model="search"
                        :items="windDirections"
                        :clearable="true"
                        menu-props="auto"
                        hide-details
                        label="Filter by wind"
                        single-line
                        @input="enteringWindDirection"
                    ></v-select>
                </v-col>

                <v-col cols="3">
                    <v-select
                        v-model="search"
                        :items="years"
                        :clearable="true"
                        menu-props="auto"
                        hide-details
                        label="Filter by year"
                        single-line
                        @input="enteringYear"
                    ></v-select>
                </v-col>

                <v-col cols="6">
                    <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                    ></v-text-field>
                </v-col>
            </v-row>
        </v-card-title>
        <v-data-table
            :headers="headers"
            :items="resultsData"
            :search="search"
            :single-expand="false"
            :expanded.sync="expanded"
            :show-expand="true"
            item-key="id"
            multi-sort
            :footer-props="{
                'items-per-page-options': [10, 30, 50, 100, -1],
            }"
        >
            <template v-slot:expanded-item="{ headers, item }">
                <tr>
                    <td :colspan="headers.length">
                        <p class="tw-mt-2">
                            <strong>Dropzone:</strong>
                            {{ item.race.dropzone.name }} ({{
                                item.race.dropzone.distance
                            }})
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

                        <p class="tw-whitespace-no-wrap text-md">
                            <strong>Wind:</strong>
                            {{ item.race.wind_formatted }}
                        </p>
                    </td>
                </tr>
            </template>

            <template v-slot:[`item.race.dropzone.name`]="{ item }">
                <span v-text="item.race.dropzone.name"></span>
                <br />
                <strong>
                    <span
                        v-if="filteredOnWindDirection"
                        v-text="item.race.wind_formatted"
                    ></span>
                </strong>
            </template>

            <template v-slot:[`item.race.unloading_time`]="{ item }">
                <span>
                    {{ moment(item.race.unloading_time).format("DD MMM YYYY") }}
                    <br />
                    <strong>{{
                        moment(item.race.unloading_time).format("HH:mm:ss")
                    }}</strong>
                </span>
            </template>

            <template v-slot:[`item.place_personal`]="{ item }">
                <span
                    class="tw-whitespace-no-wrap"
                    v-if="item.place_personal != 1000000"
                >
                    <strong>{{ item.place_personal }}</strong>
                    / {{ item.race.amount_of_pigeons_personal }}
                </span>
            </template>
            <template slot="selection" slot-scope="data"
                >{{ data.item.name }}, {{ data.item.group }}</template
            >

            <template v-slot:[`item.pigeon.ringnumber`]="{ item }">
                <a
                    :href="'/pigeon/' + item.pigeon.id"
                    class="tw-whitespace-no-wrap"
                    >{{ item.pigeon.ringnumber }}</a
                >
            </template>

            <template v-slot:[`item.arrival_time`]="{ item }">
                <span>
                    {{ moment(item.arrival_time).format("DD MMM YYYY") }}
                    <br />
                    <strong>{{
                        moment(item.arrival_time).format("HH:mm:ss")
                    }}</strong>
                </span>
            </template>

            <template v-slot:[`item.interval`]="{ item }">
                <span class="tw-whitespace-no-wrap" v-if="item.interval">{{
                    (Math.round(item.interval * 100) / 100).toFixed(2)
                }}</span>
            </template>

            <template v-slot:[`item.mpm`]="{ item }">
                <span class="tw-whitespace-no-wrap" v-if="item.mpm">{{
                    (Math.round(item.mpm * 100) / 100).toFixed(3)
                }}</span>
            </template>

            <template v-slot:[`item.place_club`]="{ item }">
                <span
                    class="tw-whitespace-no-wrap"
                    v-if="item.place_club && item.place_club != 1000000"
                >
                    <strong>{{ item.place_club }}</strong>
                    / {{ item.race.amount_of_pigeons_club }}
                </span>
            </template>

            <template v-slot:[`item.coefficient_club`]="{ item }">
                <span
                    class="tw-whitespace-no-wrap"
                    v-if="
                        item.coefficient_club &&
                        item.coefficient_club != 1000000
                    "
                    >{{
                        (Math.round(item.coefficient_club * 100) / 100).toFixed(
                            2
                        )
                    }}%</span
                >
            </template>

            <template v-slot:[`item.place_provincial`]="{ item }">
                <span
                    class="tw-whitespace-no-wrap"
                    v-if="
                        item.place_provincial &&
                        item.place_provincial != 1000000
                    "
                >
                    <strong>{{ item.place_provincial }}</strong>
                    / {{ item.race.amount_of_pigeons_provincial }}
                </span>
            </template>

            <template v-slot:[`item.coefficient_provincial`]="{ item }">
                <span
                    class="tw-whitespace-no-wrap"
                    v-if="
                        item.coefficient_provincial &&
                        item.coefficient_provincial != 1000000
                    "
                    >{{
                        (
                            Math.round(item.coefficient_provincial * 100) / 100
                        ).toFixed(2)
                    }}%</span
                >
            </template>

            <template v-slot:[`item.place_zone`]="{ item }">
                <span
                    class="tw-whitespace-no-wrap"
                    v-if="item.place_zone && item.place_zone != 1000000"
                >
                    <strong>{{ item.place_zone }}</strong>
                    / {{ item.race.amount_of_pigeons_zone }}
                </span>
            </template>

            <template v-slot:[`item.coefficient_zone`]="{ item }">
                <span
                    class="tw-whitespace-no-wrap"
                    v-if="
                        item.coefficient_zone &&
                        item.coefficient_zone != 1000000
                    "
                    >{{
                        (Math.round(item.coefficient_zone * 100) / 100).toFixed(
                            2
                        )
                    }}%</span
                >
            </template>

            <template v-slot:[`item.place_national`]="{ item }">
                <span
                    class="tw-whitespace-no-wrap"
                    v-if="item.place_national && item.place_national != 1000000"
                >
                    <strong>{{ item.place_national }}</strong>
                    / {{ item.race.amount_of_pigeons_national }}
                </span>
            </template>

            <template v-slot:[`item.coefficient_national`]="{ item }">
                <span
                    class="tw-whitespace-no-wrap"
                    v-if="
                        item.coefficient_national &&
                        item.coefficient_national != 1000000
                    "
                    >{{
                        (
                            Math.round(item.coefficient_national * 100) / 100
                        ).toFixed(2)
                    }}%</span
                >
            </template>

            <template v-slot:[`item.place_regio`]="{ item }">
                <span
                    class="tw-whitespace-no-wrap"
                    v-if="item.place_regio && item.place_regio != 1000000"
                >
                    <strong>{{ item.place_regio }}</strong>
                    / {{ item.race.amount_of_pigeons_regio }}
                </span>
            </template>

            <template v-slot:[`item.coefficient_regio`]="{ item }">
                <span
                    class="tw-whitespace-no-wrap"
                    v-if="
                        item.coefficient_regio &&
                        item.coefficient_regio != 1000000
                    "
                    >{{
                        (
                            Math.round(item.coefficient_regio * 100) / 100
                        ).toFixed(2)
                    }}%</span
                >
            </template>

            <template v-slot:[`item.place_overkoepeling`]="{ item }">
                <span
                    class="tw-whitespace-no-wrap"
                    v-if="
                        item.place_overkoepeling &&
                        item.place_overkoepeling != 1000000
                    "
                >
                    <strong>{{ item.place_overkoepeling }}</strong>
                    / {{ item.race.amount_of_pigeons_overkoepeling }}
                </span>
            </template>

            <template v-slot:[`item.coefficient_overkoepeling`]="{ item }">
                <span
                    class="tw-whitespace-no-wrap"
                    v-if="
                        item.coefficient_overkoepeling &&
                        item.coefficient_overkoepeling != 1000000
                    "
                    >{{
                        (
                            Math.round(item.coefficient_overkoepeling * 100) /
                            100
                        ).toFixed(2)
                    }}%</span
                >
            </template>

            <template v-slot:[`item.actions`]="{ item }">
                <div class="tw-flex tw-my-2">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                :href="'/result/' + item.id + '/edit'"
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
import {
    headersPigeon1,
    headersPigeon2,
    headersPigeon3,
    headersResult1,
    headersResult2,
    headersResult3,
    headersRace1,
    headersRace2,
} from "../../config/headers.js";

export default {
    props: ["type", "discipline", "pigeon", "results"],

    data() {
        return {
            expanded: [],
            search: "",
            authedVue: authed == 1,
            resultsData: this.results,
            filteredOnWindDirection: false,
            windDirections: [
                { text: "North" },
                { text: "East" },
                { text: "South" },
                { text: "West" },
            ],
            years: [
                { text: "2020" },
                { text: "2019" },
                { text: "2018" },
                { text: "2017" },
                { text: "2016" },
            ],
        };
    },

    computed: {
        headers() {
            let headers = this.figureOutHeaders();

            if (this.authedVue) {
                if (!headers.find((header) => header["value"] === "actions")) {
                    headers.unshift({
                        text: "",
                        sortable: false,
                        value: "actions",
                    });
                }
            }

            return headers;
        },
    },

    methods: {
        enteringWindDirection(e) {
            if (e) {
                this.filteredOnWindDirection = true;
            } else {
                this.filteredOnWindDirection = false;
            }
        },

        enteringYear(e) {
            if (e) {
                this.filteredOnWindDirection = true;
            } else {
                this.filteredOnWindDirection = false;
            }
        },

        figureOutHeaders() {
            switch (this.type) {
                case "pigeon":
                    switch (this.discipline) {
                        case "vit":
                        case "hfo":
                            return headersPigeon1;
                        case "kle":
                        case "fon":
                        case "gfo":
                            return headersPigeon2;
                        case "all":
                            return headersPigeon3;
                    }

                case "result":
                    switch (this.discipline) {
                        case "vit":
                        case "hfo":
                            return headersResult1;
                        case "kle":
                        case "fon":
                        case "gfo":
                            return headersResult2;
                        case "all":
                            return headersResult3;
                    }

                case "race":
                    switch (this.discipline) {
                        case "vit":
                        case "hfo":
                            return headersRace1;
                        case "kle":
                        case "fon":
                        case "gfo":
                            return headersRace2;
                    }
            }
        },
    },
};
</script>

<style lang="scss">
.layout {
    display: inline-block;
    width: 100%;
}
</style>
