<template>
    <v-card>
        <v-card-title>
            <span v-text="'My pigeons'"></span>
            <v-spacer></v-spacer>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search"></v-text-field>
        </v-card-title>
        <v-data-table
            :headers="headers"
            :items="pigeonsData"
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
    props: ["pigeons"],

    data() {
        return {
            headers: [
                {
                    text: "Ringnumber",
                    sortable: true,
                    value: "ringnumber"
                }
            ],
            pigeonsData: this.pigeons,

            search: ""
        };
    }
};
</script>
