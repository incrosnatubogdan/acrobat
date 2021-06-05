<template>
  <base-section
    id="pro-features"
  >
    <base-section-heading
      title="Purchase acrobat 123"
      color="buccaneer"
    >
      Get <strong>Acrobat</strong> and level up your <br> lorem ipsum
    </base-section-heading>

    <v-container>
      <v-row>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          md="6"
          xl="6"
          lg="6"
          sm="12"
        >
          <figure>
            <blockquote>
              <p><span class="special-quotes"> „ </span> {{ item.text }} <span class="special-quotes"> ” </span> </p>
            </blockquote>
            <figcaption v-if="item.chapter">
              {{ item.chapter }} , <cite>Acrobat</cite>
            </figcaption>
          </figure>
        </v-col>

        <v-col
          md="6"
          xl="6"
          lg="6"
          sm="12"
        >
          <v-card
            class="mx-auto my-12"
            max-width="374"
          >
            <v-img
              height="250"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            />

            <v-card-title>Cafe Badilico</v-card-title>

            <v-card-text>
              <v-row
                align="center"
                class="mx-0"
              >
                <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
              </v-row>
            </v-card-text>

            <v-divider class="mx-4" />

            <v-card-actions>
              <v-btn
                color="deep-purple lighten-2"
                text
                @click="reserve"
              >
                Reserve
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col />
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionProChart',

    data: () => ({
      items: [
        { text: 'Art is the desire of a man to express himself, to record the reactions of his personality to the world he lives in.', chapter: 'Chapter 1' },
        { text: 'Propriety was a rigid master, but one that must be obeyed if one wanted to keep a sterling reputation.', chapter: 'Chapter 2' },
        { text: "If all the world's a stage, I want to operate the trap door.", chapter: 'Chapter 2' },
      ],
    }),

    methods: {
      reserve () {
        console.log(123)
      },
    },
  }
</script>

<style scoped>
.special-quotes {
  font-size: 200%;
}
</style>
