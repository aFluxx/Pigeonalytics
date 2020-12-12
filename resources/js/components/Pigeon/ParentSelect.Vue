<template>
    <div class="tw-flex">
        <autocomplete
            :search="search"
            placeholder="Ringnummer vader"
            aria-label="Ringnummer vader"
            :get-result-value="getResultValue"
            ref="vader"
        >
        </autocomplete>

        <autocomplete
            :search="search"
            placeholder="Ringnummer moeder"
            aria-label="Ringnummer moeder"
            :get-result-value="getResultValue"
            ref="moeder"
        ></autocomplete>

        <button @click="submit">Submit</button>
    </div>
</template>

<script>
import Autocomplete from "@trevoreyre/autocomplete-vue";
import "@trevoreyre/autocomplete-vue/dist/style.css";

export default {
    props: ["pigeonId", "pigeons"],

    data() {
        return {};
    },

    components: {
        Autocomplete,
    },

    methods: {
        search(input) {
            if (input.length < 1) {
                return [];
            }
            return this.pigeons.filter((pigeon) => {
                return pigeon.ringnumber
                    .toLowerCase()
                    .includes(input.toLowerCase());
            });
        },

        getResultValue(result) {
            return result.ringnumber;
        },

        submit() {
            axios
                .post(route("add-parents.store", this.pigeonId), {
                    father: this.$refs.vader.value,
                    mother: this.$refs.moeder.value,
                })
                .then((res) => {
                    alert("Pigeon updated");
                });
        },
    },
};
</script>
