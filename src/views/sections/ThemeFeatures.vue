<template>
  <base-section id="theme-features">
    <base-section-heading title="About the author" />

    <v-container>
      <v-row
        justify="center"
      >
        <v-col
          md="9"
          class="justify-center align-center d-flex flex-column text-center"
        >
          <p class="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ullam vel architecto, aperiam quis rem accusamus, iure pariatur maxime sequi voluptatum fugiat consectetur iste delectus! Tempora fuga sit aut eaque.
          </p>
          <p class="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ullam vel architecto, aperiam quis rem accusamus, iure pariatur maxime sequi voluptatum fugiat consectetur iste delectus! Tempora fuga sit aut eaque.
          </p>
          <p class="mb-5">
            Lorem <b>ipsum</b> dolor sit amet consectetur adipisicing elit. Ipsa ullam vel architecto, aperiam quis rem accusamus, iure pariatur maxime sequi voluptatum fugiat consectetur iste delectus! Tempora fuga sit aut eaque.
          </p>
          <b>Small and personal quote very dear to my heart</b>
          <v-img
            lazy-src="https://qph.fs.quoracdn.net/main-thumb-37556344-200-snyczaztovfaedtjciiaqljqnhdfyznb.jpeg"
            src="https://qph.fs.quoracdn.net/main-thumb-37556344-200-snyczaztovfaedtjciiaqljqnhdfyznb.jpeg"
            max-height="150"
            max-width="150"
            class="rounded-circle mt-5"
          />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionThemeFeatures',

    data: () => ({
    }),
  }
</script>
