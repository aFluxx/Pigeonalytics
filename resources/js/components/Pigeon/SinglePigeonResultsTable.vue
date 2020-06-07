<template>
    <v-card>
        <v-card-title>
            <span v-text="pigeon.ringnumber"></span>
            <v-spacer></v-spacer>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search"></v-text-field>
        </v-card-title>
        <v-data-table
            :headers="headers"
            :items="resultsData"
            :sort-by="['place_personal']"
            :sort-desc="[false, true]"
            :search="search"
            multi-sort
            class="elevation-1"
        >
            <template v-slot:item.place_personal="{ item }">
                <strong>{{ item.place_personal }}</strong>
                / {{ item.race.amount_of_pigeons }}
            </template>
            <template v-slot:item.race.dropzone.name="{ item }">{{ item.race.dropzone.name }}</template>
        </v-data-table>
    </v-card>
</template>

<script>
export default {
    props: ["pigeon", "results"],

    data() {
        return {
            headers: [
                {
                    text: "Place (Personal)",
                    sortable: true,
                    value: "place_personal"
                },
                {
                    text: "Dropzone",
                    sortable: true,
                    value: "race.dropzone.name"
                },
                {
                    text: "Unloading",
                    sortable: true,
                    value: "race.unloading_time"
                },
                { text: "Arrival Time", value: "arrival_time" },
                { text: "Interval (min)", value: "interval" },
                { text: "mpm", value: "mpm" },
                { text: "Type", sortable: true, value: "race.type" }
            ],
            resultsData: this.results,

            search: ""
        };
    }
};
</script>
