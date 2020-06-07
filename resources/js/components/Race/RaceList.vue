<template>
    <v-card>
        <v-card-title>
            <span v-text="'List of all races'"></span>
            <v-spacer></v-spacer>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search"></v-text-field>
        </v-card-title>
        <v-data-table
            :headers="headers"
            :items="racesData"
            :sort-by="['unloading_time']"
            :sort-desc="[true, false]"
            :search="search"
            multi-sort
            class="elevation-1"
        >
            <template v-slot:item.dropzone.name="{ item }">{{ item.dropzone.name }}</template>
            <template v-slot:item.race_details="{ item }">
                <a :href="'/race/' + item.id">See race details</a>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
export default {
    props: ["races"],

    data() {
        return {
            headers: [
                {
                    text: "Dropzone",
                    sortable: true,
                    value: "dropzone.name"
                },
                {
                    text: "Unloading",
                    sortable: true,
                    value: "unloading_time"
                },
                {
                    text: "Wind",
                    sortable: true,
                    value: "wind"
                },
                {
                    text: "Wind Strength",
                    sortable: true,
                    value: "wind_strength"
                },
                {
                    text: "Overcast",
                    sortable: true,
                    value: "overcast"
                },
                {
                    text: "Rainfall",
                    sortable: true,
                    value: "rainfall"
                },
                {
                    text: "Year",
                    sortable: true,
                    value: "year"
                },
                {
                    text: "Type",
                    sortable: true,
                    value: "type"
                },
                {
                    text: "Amount of pigeons",
                    sortable: true,
                    value: "amount_of_pigeons"
                },
                {
                    text: "Details",
                    sortable: true,
                    value: "race_details"
                }
            ],
            racesData: this.races,

            search: ""
        };
    }
};
</script>
