<template>
    <v-flex d-flex child-flex class="fill-height">
      <v-card>
        <v-card-text>
            <div class="text-center font-weight-black title text--primary">
                test
            </div>
            <div class="text-center">
                data
            </div>
        </v-card-text>
      </v-card>
      <v-card>
        <v-card-text>
            <div class="text-center font-weight-black title text--primary">
                test
            </div>
            <div class="text-center">
                data
            </div>
        </v-card-text>
      </v-card>
    </v-flex>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    computed: {
      cols () {
        const { lg, sm } = this.$vuetify.breakpoint
        return lg ? [3, 9] : sm ? [9, 3] : [6, 6]
      },
    },

}
</script>