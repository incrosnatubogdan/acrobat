<template>
  <v-theme-provider dark>
    <base-section
      id="social"
      class="accent"
      space="56"
    >
      <base-section-heading
        color="transparent"
        title="Blog"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi aspernatur recusandae aut repudiandae illo error obcaecati dolores voluptate, tempore.
      </base-section-heading>

      <div class="py-4" />
      <v-row>
        <v-col
          xl="3"
          md="4"
          sm="12"
        >
          <v-card
            class="ml-3 mr-3"
            max-width="400"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">
              Number 10
            </v-card-subtitle>

            <v-card-text>
              <div>Whitehaven Beach</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>

            <v-card-actions>
              <v-btn
                color="orange"
                text
              >
                Share
              </v-btn>

              <v-btn
                color="orange"
                text
              >
                Explore
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col
          xl="3"
          md="4"
          sm="12"
        >
          <v-card
            class="ml-3 mr-3"
            max-width="400"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">
              Number 10
            </v-card-subtitle>

            <v-card-text>
              <div>Whitehaven Beach</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>

            <v-card-actions>
              <v-btn
                color="orange"
                text
              >
                Share
              </v-btn>

              <v-btn
                color="orange"
                text
              >
                Explore
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col
          xl="3"
          md="4"
          sm="12"
        >
          <v-card
            class="ml-3 mr-3"
            max-width="400"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">
              Number 10
            </v-card-subtitle>

            <v-card-text>
              <div>Whitehaven Beach</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>

            <v-card-actions>
              <v-btn
                color="orange"
                text
              >
                Share
              </v-btn>

              <v-btn
                color="orange"
                text
              >
                Explore
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </base-section>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'SectionNews',

    provide: {
      heading: { align: 'center' },
    },
  }
</script>
