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
            :footer-props="{'items-per-page-options':[10, 30, 50, 100, -1]}"
            :pagination.sync="pagination"
            multi-sort
            class="elevation-1"
        >
            <template v-slot:item.ringnumber="{ item }">
                <a :href="'/pigeon/' + item.id">{{ item.ringnumber }}</a>
            </template>

            <template v-slot:item.results_count="{ item }">
                <span v-text="item.results_count"></span>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
export default {
    props: ["pigeons"],

    data() {
        return {
            pigeonsData: this.pigeons,
            search: "",
            headers: [
                {
                    text: "Ringnumber",
                    sortable: true,
                    value: "ringnumber"
                },
                {
                    text: "Amount Result Logged",
                    sortable: true,
                    value: "results_count"
                }
            ]
        };
    }
};
</script>
