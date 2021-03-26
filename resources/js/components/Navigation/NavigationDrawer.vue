<template>
    <v-card class="mx-auto">
        <v-navigation-drawer permanent>
            <v-list-item>
                <v-list-item-content>
                    <v-btn
                        v-if="!authed"
                        depressed
                        class="primary"
                        href="/login"
                        v-text="'Inloggen'"
                        ><v-icon right dark>mdi-login</v-icon>
                    </v-btn>
                    <span v-else>Ingelogd</span>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title" align="center">
                        De Belser <br />
                        Racing Pigeons
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list>
                <v-list-item>
                    <v-list-item-content>
                        <v-btn
                            class="red lighten-2 white--text"
                            href="javascript:history.back()"
                        >
                            <v-icon dark small>mdi-arrow-left</v-icon>
                            Terug
                        </v-btn>
                    </v-list-item-content>
                </v-list-item>

                <v-list-group
                    v-for="item in items"
                    :key="item.title"
                    :prepend-icon="item.action"
                    v-model="item.active"
                    no-action
                >
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title
                                v-text="item.title"
                            ></v-list-item-title>
                        </v-list-item-content>
                    </template>

                    <v-list-item
                        v-for="child in item.items"
                        :key="child.title"
                        :value="child.title"
                    >
                        <v-list-item-content>
                            <a :href="child.href" v-text="child.title"></a>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>
    </v-card>
</template>

<script>
import { isAdmin, isNotAdmin } from "../../config/menuItems.js";

export default {
    props: ["authed"],

    data() {
        return {
            active: "",
            items: this.authed ? isAdmin : isNotAdmin,
        };
    },
};
</script>
