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
                { text: "Pigeon", sortable: true, value: "pigeon.ringnumber" },
                { text: "Arrival Time", value: "arrival_time" },
                { text: "Interval", value: "interval" },
                { text: "mpm", value: "mpm" },
                { text: "Race", sortable: true, value: "race.dropzone.name" },
                { text: "Type", sortable: true, value: "race.type" }
            ],
            resultsData: this.results,

            search: ""
        };
    }
};
</script>
