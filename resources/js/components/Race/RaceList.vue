<template>
    <v-card>
        <v-card-title>
            <span v-text="'List of all races'"></span>
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
            :items="racesData"
            :search="search"
            :sort-by="['unloading_time']"
            :sort-desc="true"
            multi-sort
            class="elevation-1"
        >
            <template v-slot:item.dropzone.name="{ item }">
                <v-chip
                    @click="search = item.dropzone.name"
                    class="ma-2"
                    label
                >{{ item.dropzone.name }}</v-chip>
            </template>
            <template v-slot:item.category_formatted="{ item }">
                <v-chip
                    @click="search = item.category_formatted"
                    :color="getColorCategory(item.category_formatted)"
                >{{ item.category_formatted }}</v-chip>
            </template>
            <template v-slot:item.type_formatted="{ item }">
                <v-chip
                    @click="search = item.type_formatted"
                    :color="getColorType(item.type_formatted)"
                >{{ item.type_formatted }}</v-chip>
            </template>
            <template v-slot:item.race_details="{ item }">
                <div class="my-2">
                    <v-btn text small :href="'/race/' + item.id" color="primary">See race details</v-btn>
                </div>
            </template>

            <template v-slot:item.actions="{ item }">
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            :href="'/race/' + item.id + '/edit'"
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
                    <span>Edit race</span>
                </v-tooltip>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
export default {
    props: ["races"],

    data() {
        return {
            racesData: this.races,
            search: "",
            headers: [
                {
                    text: "Dropzone",
                    sortable: true,
                    value: "dropzone.name"
                },
                {
                    text: "# Pigeons",
                    sortable: true,
                    value: "amount_of_pigeons_personal"
                },
                {
                    text: "Unloading Time",
                    sortable: true,
                    value: "unloading_time"
                },
                {
                    text: "Wind Strength",
                    sortable: true,
                    value: "wind_strength_formatted"
                },
                {
                    text: "Wind",
                    sortable: true,
                    value: "wind_formatted"
                },
                {
                    text: "Overcast",
                    sortable: true,
                    value: "overcast_formatted"
                },
                {
                    text: "Rainfall",
                    sortable: true,
                    value: "rainfall_formatted"
                },
                {
                    text: "Category",
                    sortable: true,
                    value: "category_formatted"
                },
                {
                    text: "Type",
                    sortable: true,
                    value: "type_formatted"
                },
                {
                    text: "Details",
                    sortable: true,
                    value: "race_details"
                },
                { text: "Actions", sortable: false, value: "actions" }
            ]
        };
    },

    methods: {
        getColorCategory(category) {
            if (category == "Old birds") return "lime lighten-4";
            else if (category == "Yearlings") return "teal lighten-4";
            else return "blue lighten-3";
        },

        getColorType(type) {
            if (type == "Competition") return "green lighten-3";
            else if (type == "Training") return "pink lighten-4";
        }
    }
};
</script>
