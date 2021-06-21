<template>
  <section id="hero">
    <v-row class="dark--text ltr-grey">
      <v-col
        xl="6"
        md="6"
        lg="6"
        sm="12"
      >
        <v-container>
          <v-img
            src="https://cdn.shopify.com/s/files/1/1815/0105/products/bfef49faf541a7c53c76d7e6e20e80def423648d.jpg?v=1618867738"
            class="white--text"
          />
          <div class="text-center mt-4">
            <base-btn
              :tile="false"
              color="brown-rust"
              href="https://google.com"
            >
              Purchase book

              <v-icon right>
                mdi-notebook-check-outline
              </v-icon>
            </base-btn>
          </div>
        </v-container>
      </v-col>
      <v-col
        xl="6"
        md="6"
        lg="6"
        sm="12"
      >
        <v-container class="fill-height px-4 py-12">
          <v-responsive
            class="d-flex align-center mx-auto"
            height="100%"
            max-width="700"
            width="100%"
          >
            <base-section-heading
              align="left"
              title="Acrobat"
              subtitle="How to not juggle your life away"
              color="athens-gray"
            />

            <base-body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis neque aspernatur in quas iure id aliquid, esse debitis, quibusdam mollitia! Quia ea expedita magnam totam, earum omnis et perspiciatis?
            </base-body>
          </v-responsive>
        </v-container>
      </v-col>
    </v-row>
  </section>
</template>

<script>
  export default {
    name: 'SectionHero',

    provide: {
      theme: { isDark: true },
    },

    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
  }
</script>

<style scoped>
.ltr-grey {
  background: linear-gradient(to right, #fff 50%, #A64C38 50%);
}
</style>
