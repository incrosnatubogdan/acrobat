<template>
  <v-theme-provider dark>
    <base-section
      id="social"
      class="bg-ebony-clay"
    >
      <v-responsive
        class="mx-auto"
        max-width="1350"
      >
        <base-section-heading
          color="transparent"
          title="Newsletter subscribe"
        >
          Subscribe for new info and upcoming discounts & promo
        </base-section-heading>
        <v-container fluid>
          <v-row
            align="center"
            justify="center"
          >
            <v-col md="7">
              <v-form
                ref="form"
                v-model="valid"
              >
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                  solo
                  append-icon="mdi-check"
                  @click:append="validate"
                />
              </v-form>
            </v-col>
          </v-row>
        </v-container>
      </v-responsive>
    </base-section>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'SectionFeatures',
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>
