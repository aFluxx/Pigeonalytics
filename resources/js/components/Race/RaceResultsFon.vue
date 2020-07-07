<template>
    <v-card>
        <v-card-title>
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
                        {{ item.race.type }}
                    </p>
                </td>
            </template>

            <template v-slot:item.place_personal="{ item }">
                <span class="tw-whitespace-no-wrap" v-if="item.place_personal != 1000000">
                    <strong>{{ item.place_personal }}</strong>
                    / {{ item.race.amount_of_pigeons_personal }}
                </span>
            </template>

            <template v-slot:item.pigeon.ringnumber="{ item }">
                <a
                    class="tw-whitespace-no-wrap"
                    :href="'/pigeon/' + item.pigeon.id"
                >{{ item.pigeon.ringnumber }}</a>
            </template>

            <template v-slot:item.arrival_time="{ item }">
                <span>
                    {{ moment(item.arrival_time).format('DD MMM YYYY') }}
                    <br />
                    <strong>{{ moment(item.arrival_time).format('HH:mm:ss') }}</strong>
                </span>
            </template>

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

            <template v-slot:item.place_club="{ item }">
                <span
                    class="tw-whitespace-no-wrap"
                    v-if="item.place_club && item.place_club != 1000000"
                >
                    <strong>{{ item.place_club }}</strong>
                    / {{ item.race.amount_of_pigeons_club }}
                </span>
            </template>
            <template v-slot:item.coefficient_club="{ item }">
                <span
                    class="tw-whitespace-no-wrap"
                    v-if="item.coefficient_club && item.coefficient_club != 1000000"
                >{{ (Math.round(item.coefficient_club * 100) / 100).toFixed(2) }}%</span>
            </template>

            <template v-slot:item.place_provincial="{ item }">
                <span
                    class="tw-whitespace-no-wrap"
                    v-if="item.place_provincial && item.place_provincial != 1000000"
                >
                    <strong>{{ item.place_provincial }}</strong>
                    / {{ item.race.amount_of_pigeons_provincial }}
                </span>
            </template>
            <template v-slot:item.coefficient_provincial="{ item }">
                <span
                    class="tw-whitespace-no-wrap"
                    v-if="item.coefficient_provincial && item.coefficient_provincial != 1000000"
                >{{ (Math.round(item.coefficient_provincial * 100) / 100).toFixed(2) }}%</span>
            </template>

            <template v-slot:item.place_zone="{ item }">
                <span
                    class="tw-whitespace-no-wrap"
                    v-if="item.place_zone && item.place_zone != 1000000"
                >
                    <strong>{{ item.place_zone }}</strong>
                    / {{ item.race.amount_of_pigeons_zone }}
                </span>
            </template>
            <template v-slot:item.coefficient_zone="{ item }">
                <span
                    class="tw-whitespace-no-wrap"
                    v-if="item.coefficient_zone && item.coefficient_zone != 1000000"
                >{{ (Math.round(item.coefficient_zone * 100) / 100).toFixed(2) }}%</span>
            </template>

            <template v-slot:item.place_national="{ item }">
                <span
                    class="tw-whitespace-no-wrap"
                    v-if="item.place_national && item.place_national != 1000000"
                >
                    <strong>{{ item.place_national }}</strong>
                    / {{ item.race.amount_of_pigeons_national }}
                </span>
            </template>
            <template v-slot:item.coefficient_national="{ item }">
                <span
                    class="tw-whitespace-no-wrap"
                    v-if="item.coefficient_national && item.coefficient_national != 1000000"
                >{{ (Math.round(item.coefficient_national * 100) / 100).toFixed(2) }}%</span>
            </template>

            <template v-slot:item.actions="{ item }">
                <v-tooltip bottom v-if="authed">
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
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
export default {
    props: ["results"],

    data() {
        return {
            expanded: [],
            search: "",
            authed: typeof authed !== "undefined",
            headers: [
                {
                    text: "Place",
                    sortable: true,
                    value: "place_personal"
                },
                {
                    text: "GT",
                    sortable: true,
                    value: "nominated"
                },
                {
                    text: "Pigeon",
                    sortable: true,
                    value: "pigeon.ringnumber"
                },
                { text: "Arrival Time", value: "arrival_time" },
                { text: "mpm", value: "mpm" },
                { text: "Place (Club)", value: "place_club" },
                { text: "Coeff (Club)", value: "coefficient_club" },
                { text: "Place (Prov)", value: "place_provincial" },
                { text: "Coeff (Prov)", value: "coefficient_provincial" },
                { text: "Place (Zone)", value: "place_zone" },
                { text: "Coeff (Zone)", value: "coefficient_zone" },
                { text: "Place (Nat)", value: "place_national" },
                { text: "Coeff (Nat)", value: "coefficient_national" },
                { text: "", sortable: false, value: "actions" }
            ],
            resultsData: this.results
        };
    }
};
</script>
