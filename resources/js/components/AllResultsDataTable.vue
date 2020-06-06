<template>
    <v-card>
        <v-card-title>
            <span v-text="'All results'"></span>
            <v-spacer></v-spacer>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search"></v-text-field>
        </v-card-title>
        <v-data-table
            :headers="headers"
            :items="resultsData"
            :sort-desc="[false, true]"
            :search="search"
            multi-sort
            class="elevation-1"
        >
            <template v-slot:item.pigeon.ringnumber="{ item }">{{ item.pigeon.ringnumber }}</template>
            <template v-slot:item.race.dropzone.name="{ item }">{{ item.race.dropzone.name }}</template>
        </v-data-table>
    </v-card>
</template>

<script>
export default {
    props: ["results"],

    data() {
        return {
            headers: [
                { text: "Pigeon", sortable: true, value: "pigeon.ringnumber" },
                { text: "Race", sortable: true, value: "race.dropzone.name" },
                { text: "Arrival Time", value: "arrival_time" },
                { text: "Interval", value: "interval" },
                { text: "mpm", value: "mpm" }
            ],
            resultsData: this.results,

            search: ""
        };
    }
};
</script>
