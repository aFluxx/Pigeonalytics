<template>
    <v-card>
        <v-card-title>
            <span v-text="'List of all dropzones'"></span>
            <v-spacer></v-spacer>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search"></v-text-field>
        </v-card-title>
        <v-data-table
            :headers="headers"
            :items="dropzonesData"
            :sort-by="['name']"
            :sort-desc="[true, false]"
            :search="search"
            multi-sort
            class="elevation-1"
        >
            <template v-slot:item.ringnumber="{ item }">
                <a :href="'/pigeon/' + item.id">{{ item.ringnumber }}</a>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
export default {
    props: ["dropzones"],

    data() {
        return {
            headers: [
                {
                    text: "Name",
                    sortable: true,
                    value: "name"
                },
                {
                    text: "Distance (in meter)",
                    sortable: true,
                    value: "distance"
                }
            ],
            dropzonesData: this.dropzones,

            search: ""
        };
    }
};
</script>
