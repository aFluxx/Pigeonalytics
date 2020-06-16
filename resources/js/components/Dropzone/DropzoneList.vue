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
            :search="search"
            :footer-props="{'items-per-page-options':[10, 30, 50, 100, -1]}"
            multi-sort
            class="elevation-1"
        >
            <template v-slot:item.ringnumber="{ item }">
                <a :href="'/pigeon/' + item.id">{{ item.ringnumber }}</a>
            </template>
            <template v-slot:item.actions="{ item }">
                <div class="tw-flex tw-my-2" v-if="authed">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                :href="'/dropzone/' + item.id + '/edit'"
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
                        <span>Edit dropzone</span>
                    </v-tooltip>
                </div>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
export default {
    props: ["dropzones"],

    data() {
        return {
            search: "",
            dropzonesData: this.dropzones,
            authed: typeof authed !== "undefined",
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
                },
                { text: "Actions", sortable: false, value: "actions" }
            ]
        };
    }
};
</script>
