<template>
  <base-section
    id="pro-features"
  >
    <base-section-heading
      title="Purchase acrobat"
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
  }
</script>

<style scoped>
.special-quotes {
  font-size: 200%;
}
</style>
