<template>
  <base-section
    id="pro-features"
  >
    <!-- <v-img
      :src="require('@/assets/logo.svg')"
      class="mx-auto mb-8"
      max-width="128"
    /> -->

    <base-section-heading title="Purchase acrobat">
      Get <strong>Acrobat</strong> and level up your <br> lorem ipsum
    </base-section-heading>

    <v-container>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          md="7"
        >
        <div class="text-center">
            <base-btn
              :tile="false"
              color="primary"
              href="https://google.com"
              rounded
            >
              Buy book Now

              <v-icon right>
                mdi-rocket
              </v-icon>
            </base-btn>
          </div>
        </v-col>

        <v-col
          cols="12"
          md="5"
        >
          <v-card
            elevation="16"
            class="mb-12"
          >
            <base-img
              max-width="100%"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4lii7hhNK-PD6Nez8x_lv9HyIhqC1Ia1RIA&usqp=CAU"
            />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionProChart',

    data: () => ({
      features: [
        ['Components', 5, '40+'],
        ['Example Pages', 3, '10+'],
        ['Vue CLI Support', true, true],
        ['Bugfixes and Issues', false, true],
        ['6 Months Free Updates', false, true],
        ['Supports Vuetify', false, true],
        ['Price', 'Free', '$59'],
      ],
    }),
  }
</script>
