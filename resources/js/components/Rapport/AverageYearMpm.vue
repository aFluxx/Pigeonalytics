<template>
    <v-card>
        <v-card-title>
            <span v-text="'Average MPM'"></span>
            <v-spacer></v-spacer>
            <v-btn
                class="ma-2"
                tile
                outlined
                color="failure"
                v-if="search"
                @click="search = ''"
                small
            >
                <v-icon left>mdi-close-circle</v-icon>Cancel search
            </v-btn>
            <v-spacer></v-spacer>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search"></v-text-field>
        </v-card-title>
        <v-data-table
            :headers="headers"
            :items="resultsData"
            :search="search"
            :sort-desc="true"
            :footer-props="{'items-per-page-options':[10, 30, 50, 100, -1]}"
            multi-sort
            class="elevation-1"
        >
            <template v-slot:item.average="{ item }">
                <span
                    class="tw-whitespace-no-wrap"
                    v-if="item.average"
                >{{ (Math.round(item.average * 100) / 100).toFixed(3) }}</span>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
export default {
    props: ["data"],

    data() {
        return {
            resultsData: this.data,
            search: "",
            headers: [
                {
                    text: "Pigeon",
                    sortable: true,
                    value: "ringnumber"
                },
                {
                    text: "Average MPM",
                    sortable: true,
                    value: "average"
                },
                {
                    text: "Amount of races",
                    sortable: true,
                    value: "count"
                }
            ]
        };
    }
};
</script>
