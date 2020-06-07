<template>
    <v-card>
        <v-card-title>
            <v-spacer></v-spacer>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search"></v-text-field>
        </v-card-title>
        <v-data-table
            :headers="headers"
            :items="resultsData"
            :sort-by="['mpm']"
            :sort-desc="[true, false]"
            :search="search"
            multi-sort
            class="elevation-1"
        >
            <template v-slot:item.pigeon.ringnumber="{ item }">
                <a :href="'/pigeon/' + item.pigeon.id">{{ item.pigeon.ringnumber }}</a>
            </template>
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
                {
                    text: "Place (Personal)",
                    sortable: true,
                    value: "place_personal"
                },
                {
                    text: "Pigeon",
                    sortable: true,
                    value: "pigeon.ringnumber"
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
                { text: "mpm", value: "mpm" }
            ],
            resultsData: this.results,

            search: ""
        };
    }
};
</script>
