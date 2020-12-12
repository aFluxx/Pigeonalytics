<template>
    <div>
        <ul>
            <li v-for="(pigeon, i) in pigeons" :key="i">
                {{ i }} /
                <a :href="'/add-parents/pigeon/' + pigeon.id">
                    {{ pigeon.ringnumber }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ["pigeons"],
};
</script>
