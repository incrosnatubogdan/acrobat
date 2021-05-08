<template>
  <base-section
    id="pro-features"
  >
    <!-- <v-img
      :src="require('@/assets/logo.svg')"
      class="mx-auto mb-8"
      max-width="128"
    /> -->

    <base-section-heading title="Know the acrobat behind it all">
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
        <div class="text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae vitae odio consectetur quidem libero rem consequuntur obcaecati ab voluptatem reiciendis accusamus, minus earum dolores sint, cum, eaque provident quibusdam. Illum.
            <br>
            <br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nihil obcaecati facilis reprehenderit doloremque dolores consequatur suscipit earum sint officiis nostrum aliquam voluptatum, ducimus commodi praesentium repellat aliquid cumque. Cum.
            <br>
            <br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nihil obcaecati facilis reprehenderit doloremque dolores consequatur suscipit earum sint officiis nostrum aliquam voluptatum, ducimus commodi praesentium repellat aliquid cumque. Cum.
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
              src="https://qph.fs.quoracdn.net/main-thumb-37556344-200-snyczaztovfaedtjciiaqljqnhdfyznb.jpeg"
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
