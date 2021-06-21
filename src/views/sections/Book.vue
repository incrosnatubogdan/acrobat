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
          md="6"
          xl="6"
          lg="6"
          sm="12"
        >
          <v-row>
            <v-col
              v-for="(item, i) in items"
              :key="i"
              md="12"
              xl="12"
              lg="12"
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
              v-if="!pay"
              :aspect-ratio="16/9"
              height="250"
              contain
              src="https://cdn.icon-icons.com/icons2/2389/PNG/512/adobe_acrobat_reader_logo_icon_145525.png"
            />

            <v-card-title v-if="!pay">
              Acrobat
            </v-card-title>

            <v-card-text v-if="!pay">
              <v-row
                align="center"
                class="mx-0"
              >
                <div>O carte despre multe, Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste illum eveniet commodi, perspiciatis ipsam nostrum, vel voluptatibus dolor nemo, quia molestias! Harum, labore! Fugit ipsam nesciunt rem, dolorum voluptate eum?</div>
              </v-row>
            </v-card-text>

            <!-- <v-form v-if="pay">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
                solo
                append-icon="mdi-check"
                @click:append="validate"
              />
            </v-form> -->
            <card-details v-if="pay" />

            <v-divider class="mx-4" />

            <v-card-actions>
              <base-btn
                :tile="false"
                color="white"
                @click="togglePay"
              >
                {{ payStatus }}
              </base-btn>
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
  import axios from 'axios'
  import CardDetail from '../../components/base/CardForm.vue'
  export default {
    name: 'SectionProChart',

    components: {
      'card-details': CardDetail,
    },

    data () {
      return {
        items: [
          { text: 'Art is the desire of a man to express himself, to record the reactions of his personality to the world he lives in.', chapter: 'Chapter 1' },
          { text: 'Propriety was a rigid master, but one that must be obeyed if one wanted to keep a sterling reputation.', chapter: 'Chapter 2' },
          { text: "If all the world's a stage, I want to operate the trap door.", chapter: 'Chapter 2' },
        ],
        pay: false,
        form: {
          email: '',
          name: '',
        },
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
      }
    },
    computed: {
      payStatus: {
        get () {
          return this.pay ? 'Cancel' : 'Purchase book'
        },
      },
    },

    methods: {
      reserve () {
        axios.post('/api/v1/pay/purhase', {
        }).then((response) => {

        })
      },

      togglePay () {
        this.pay = !this.pay
      },
    },
  }
</script>

<style scoped>
.special-quotes {
  font-size: 200%;
}
</style>
