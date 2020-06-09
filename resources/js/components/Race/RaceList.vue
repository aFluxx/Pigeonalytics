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
            :search="search"
            multi-sort
            class="elevation-1"
        >
            <template v-slot:item.dropzone.name="{ item }">{{ item.dropzone.name }}</template>
            <template v-slot:item.category_formatted="{ item }">
                <v-chip
                    :color="getColorCategory(item.category_formatted)"
                    dark
                >{{ item.category_formatted }}</v-chip>
            </template>
            <template v-slot:item.type_formatted="{ item }">
                <v-chip :color="getColorType(item.type_formatted)" dark>{{ item.type_formatted }}</v-chip>
            </template>
            <template v-slot:item.race_details="{ item }">
                <a :href="'/race/' + item.id">See race details</a>
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
                            color="green"
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
                    text: "Category",
                    sortable: true,
                    value: "category_formatted"
                },
                {
                    text: "# Pigeons",
                    sortable: true,
                    value: "amount_of_pigeons"
                },
                {
                    text: "Unloading Time",
                    sortable: true,
                    value: "unloading_time"
                },
                {
                    text: "Year",
                    sortable: true,
                    value: "year"
                },
                {
                    text: "Type",
                    sortable: true,
                    value: "type_formatted"
                },
                {
                    text: "Wind",
                    sortable: true,
                    value: "wind_formatted"
                },
                {
                    text: "Wind Strength",
                    sortable: true,
                    value: "wind_strength_formatted"
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
            if (category == "Old birds") return "red lighten-1";
            else if (category == "Yearlings") return "blue darken-1";
            else return "teal darken-1";
        },

        getColorType(type) {
            if (type == "Competition") return "deep-purple lighten-1";
            else if (type == "Training") return "light-green darken-3";
        }
    }
};
</script>
