<template>
  <section id="theme-features">
    <v-row class="dark--text">
      <v-col
        xl="6"
        md="6"
        lg="6"
        sm="12"
        class="px-0 pt-0 pb-0"
      >
        <v-img
          src="https://scontent.fias1-1.fna.fbcdn.net/v/t31.18172-8/860896_562022383816679_643044871_o.jpg?_nc_cat=108&ccb=1-3&_nc_sid=f9d7a1&_nc_eui2=AeGvfUAPG66FauyoTKBOqseu1wE6fI815DzXATp8jzXkPFdhFI2Z8_05X2oMpZjm-_hG9cNwyAgdHNZ7Lf4tJZZb&_nc_ohc=0amTZbFJf4kAX-Iz-YW&tn=gJkv1Zvn47MCPhCV&_nc_ht=scontent.fias1-1.fna&oh=da0fe2d5bc0940e4ad127ff28c66db24&oe=60E26F8D"
          class="white--text"
        />
      </v-col>

      <v-col
        xl="6"
        md="6"
        lg="6"
        sm="12"
        class="px-0 pt-0 pb-0"
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
              title="About the author"
              subtitle="The acrobat behind it all"
              color="ebony-clay"
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
    name: 'SectionThemeFeatures',

    data: () => ({
    }),
  }
</script>
