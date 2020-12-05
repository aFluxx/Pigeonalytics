<template>
    <v-toolbar dark color="primary">
        <v-toolbar-title>Duif opzoeken</v-toolbar-title>
        <v-autocomplete
            v-model="select"
            :loading="loading"
            :items="items"
            :item-text="text"
            :search-input.sync="search"
            cache-items
            class="mx-4"
            flat
            hide-details
            hide-no-data
            return-object
            label="Voer een ringnummer in"
        >
        </v-autocomplete>
        <v-btn depressed @click="clickEvent" class="blue lighten-1"
            >Ga naar duif</v-btn
        >
    </v-toolbar>
</template>

<script>
export default {
    props: ["pigeons"],

    data() {
        return {
            loading: false,
            items: [],
            search: null,
            select: null,
        };
    },

    watch: {
        search(val) {
            val && val !== this.select && this.querySelections(val);
        },
    },

    methods: {
        querySelections(v) {
            this.loading = true;
            // Simulated ajax query
            setTimeout(() => {
                this.items = this.pigeons.filter((e) => {
                    return (
                        (e.ringnumber || "")
                            .toLowerCase()
                            .indexOf((v || "").toLowerCase()) > -1
                    );
                });
                this.loading = false;
            }, 500);
        },

        text: (item) => item.ringnumber,

        clickEvent(e) {
            window.location.href = route("pigeon.show", this.select.id);
        },
    },
};
</script>
