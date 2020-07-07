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
            :footer-props="{'items-per-page-options':[10, 30, 50, 100, -1]}"
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
            <template v-slot:item.unloading_time="{ item }">
                <span>
                    {{ moment(item.unloading_time).format('DD MMM YYYY') }}
                    <br />
                    <strong>{{ moment(item.unloading_time).format('HH:mm:ss') }}</strong>
                </span>
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
                    <v-btn small :href="'/race/' + item.id" color="primary">Race details</v-btn>
                </div>
            </template>

            <template v-slot:item.actions="{ item }">
                <v-tooltip bottom v-if="authed">
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
            authed: typeof authed !== "undefined",
            headers: [
                {
                    text: "Dropzone",
                    sortable: true,
                    value: "dropzone.name"
                },
                {
                    text: "Released",
                    sortable: true,
                    value: "unloading_time"
                },
                {
                    text: "Category",
                    sortable: true,
                    value: "category_formatted"
                },
                {
                    text: "# Pigeons",
                    sortable: true,
                    value: "amount_of_pigeons_personal"
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
                    text: "Details",
                    sortable: true,
                    value: "race_details"
                },
                { text: "", sortable: false, value: "actions" }
            ]
        };
    },

    methods: {
        getColorCategory(category) {
            if (category == "Old birds") return "lime lighten-4";
            else if (category == "Yearlings") return "teal lighten-4";
            else if (category == "Youngsters") return "green lighten-3";
            else if (category == "Mix Yearling / Old")
                return "purple lighten-4";
            else if (category == "Mix Varia") return "indigo lighten-3";
        },

        getColorType(type) {
            if (type == "Competition") return "green lighten-3";
            else if (type == "Training") return "pink lighten-4";
        }
    }
};
</script>
