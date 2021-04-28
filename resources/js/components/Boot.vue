<template>
    <v-app v-if="initialized">

        <!-- Sizes your content based upon application components -->
        <v-main>
            <!-- Provides the application the proper gutter -->
            <v-container>
                <!-- If using vue-router -->
                <router-view />
            </v-container>
        </v-main>

        <v-footer app>
            <!-- -->
            <Snackbar />
        </v-footer>
    </v-app>
</template>

<script>
    import store from '../store/index'
    import {
        mapState
    } from 'vuex'
    import * as actions from '../store/types/actions'
    import Snackbar from './pages/Snackbar';
    export default {
        components: {
            Snackbar
        },

        computed: {
            ...mapState(['initialized']),
        },

        mounted() {
            if (!this.initialized) {
                store.dispatch(actions.INITIALIZE)
            }
        },

    };

</script>
