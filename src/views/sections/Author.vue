<template>
  <base-section
    id="pro-features"
  >
    <base-section-heading
      title="Know the acrobat behind it all"
      color="buccaneer"
    >
      Get <strong>Acrobat</strong> and level up your lorem ipsum
    </base-section-heading>

    <v-container>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          md="5"
        >
          <base-img
            max-width="100%"
            src="https://scontent.fias1-1.fna.fbcdn.net/v/t31.18172-8/860896_562022383816679_643044871_o.jpg?_nc_cat=108&ccb=1-3&_nc_sid=f9d7a1&_nc_eui2=AeGvfUAPG66FauyoTKBOqseu1wE6fI815DzXATp8jzXkPFdhFI2Z8_05X2oMpZjm-_hG9cNwyAgdHNZ7Lf4tJZZb&_nc_ohc=0amTZbFJf4kAX-Iz-YW&tn=gJkv1Zvn47MCPhCV&_nc_ht=scontent.fias1-1.fna&oh=da0fe2d5bc0940e4ad127ff28c66db24&oe=60E26F8D"
          />
        </v-col>

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
