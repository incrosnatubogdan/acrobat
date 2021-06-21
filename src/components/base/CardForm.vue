<template>
  <div class="card-form">
    <div class="card-list">
      <card
        :fields="fields"
        :labels="formData"
        :is-card-number-masked="isCardNumberMasked"
        :random-backgrounds="randomBackgrounds"
        :background-image="backgroundImage"
      />
    </div>
    <div class="card-form__inner">
      <div class="card-input">
        <label
          for="cardNumber"
          class="card-input__label"
        >Numar card</label>
        <input
          :id="fields.cardNumber"
          type="tel"
          class="card-input__input"
          :value="formData.cardNumber"
          :maxlength="cardNumberMaxLength"
          data-card-field
          autocomplete="off"
          @input="changeNumber"
          @focus="focusCardNumber"
          @blur="blurCardNumber"
        >
        <button
          class="card-input__eye"
          :class="{ '-active' : !isCardNumberMasked }"
          title="Show/Hide card number"
          tabindex="-1"
          :disabled="formData.cardNumber === ''"
          @click="toggleMask"
        />
      </div>
      <div class="card-input">
        <label
          for="cardName"
          class="card-input__label"
        >Nume card</label>
        <input
          :id="fields.cardName"
          v-letter-only
          type="text"
          class="card-input__input"
          :value="formData.cardName"
          data-card-field
          autocomplete="off"
          @input="changeName"
        >
      </div>
      <div class="card-form__row">
        <div class="card-form__col">
          <div class="card-form__group">
            <label
              for="cardMonth"
              class="card-input__label"
            >Expiration date</label>
            <select
              :id="fields.cardMonth"
              v-model="formData.cardMonth"
              class="card-input__input -select"
              data-card-field
              @change="changeMonth"
            >
              <option
                value
                disabled
                selected
              >
                Luna
              </option>
              <option
                v-for="n in 12"
                :key="n"
                :value="n < 10 ? '0' + n : n"
                :disabled="n < minCardMonth"
              >
                {{ generateMonthValue(n) }}
              </option>
            </select>
            <select
              :id="fields.cardYear"
              v-model="formData.cardYear"
              class="card-input__input -select"
              data-card-field
              @change="changeYear"
            >
              <option
                value
                disabled
                selected
              >
                An
              </option>
              <option
                v-for="(n, $index) in 12"
                :key="n"
                :value="$index + minCardYear"
              >
                {{ $index + minCardYear }}
              </option>
            </select>
          </div>
        </div>
        <div class="card-form__col -cvv">
          <div class="card-input">
            <label
              for="cardCvv"
              class="card-input__label"
            >CVV</label>
            <input
              :id="fields.cardCvv"
              v-number-only
              type="tel"
              class="card-input__input"
              maxlength="4"
              :value="formData.cardCvv"
              data-card-field
              autocomplete="off"
              @input="changeCvv"
            >
          </div>
        </div>
      </div>

      <button
        class="card-form__button"
        @click="invaildCard"
      >
        submit
      </button>
    </div>
  </div>
</template>

<script>
  import Card from './Card.vue'
  export default {
    name: 'CardForm',
    directives: {
      'number-only': {
        bind (el) {
          function checkValue (event) {
            event.target.value = event.target.value.replace(/[^0-9]/g, '')
            if (event.charCode >= 48 && event.charCode <= 57) {
              return true
            }
            event.preventDefault()
          }
          el.addEventListener('keypress', checkValue)
        },
      },
      'letter-only': {
        bind (el) {
          function checkValue (event) {
            if (event.charCode >= 48 && event.charCode <= 57) {
              event.preventDefault()
            }
            return true
          }
          el.addEventListener('keypress', checkValue)
        },
      },
    },
    components: {
      Card,
    },
    props: {
      formData: {
        type: Object,
        default: () => {
          return {
            cardName: '',
            cardNumber: '',
            cardNumberNotMask: '',
            cardMonth: '',
            cardYear: '',
            cardCvv: '',
          }
        },
      },
      backgroundImage: [String, Object],
      randomBackgrounds: {
        type: Boolean,
        default: true,
      },
    },
    data () {
      return {
        fields: {
          cardNumber: 'v-card-number',
          cardName: 'v-card-name',
          cardMonth: 'v-card-month',
          cardYear: 'v-card-year',
          cardCvv: 'v-card-cvv',
        },
        minCardYear: new Date().getFullYear(),
        isCardNumberMasked: true,
        mainCardNumber: this.cardNumber,
        cardNumberMaxLength: 19,
      }
    },
    computed: {
      minCardMonth () {
        if (this.formData.cardYear === this.minCardYear) return new Date().getMonth() + 1
        return 1
      },
    },
    watch: {
      cardYear () {
        if (this.formData.cardMonth < this.minCardMonth) {
          this.formData.cardMonth = ''
        }
      },
    },
    mounted () {
      this.maskCardNumber()
    },
    methods: {
      generateMonthValue (n) {
        return n < 10 ? `0${n}` : n
      },
      changeName (e) {
        this.formData.cardName = e.target.value
        this.$emit('input-card-name', this.formData.cardName)
      },
      changeNumber (e) {
        this.formData.cardNumber = e.target.value
        const value = this.formData.cardNumber.replace(/\D/g, '')
        // american express, 15 digits
        if ((/^3[47]\d{0,13}$/).test(value)) {
          this.formData.cardNumber = value.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{6})/, '$1 $2 ')
          this.cardNumberMaxLength = 17
        } else if ((/^3(?:0[0-5]|[68]\d)\d{0,11}$/).test(value)) { // diner's club, 14 digits
          this.formData.cardNumber = value.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{6})/, '$1 $2 ')
          this.cardNumberMaxLength = 16
        } else if ((/^\d{0,16}$/).test(value)) { // regular cc number, 16 digits
          this.formData.cardNumber = value.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{4})/, '$1 $2 ').replace(/(\d{4}) (\d{4}) (\d{4})/, '$1 $2 $3 ')
          this.cardNumberMaxLength = 19
        }
        // eslint-disable-next-line eqeqeq
        if (e.inputType == 'deleteContentBackward') {
          const lastChar = this.formData.cardNumber.substring(this.formData.cardNumber.length, this.formData.cardNumber.length - 1)
          // eslint-disable-next-line eqeqeq
          if (lastChar == ' ') { this.formData.cardNumber = this.formData.cardNumber.substring(0, this.formData.cardNumber.length - 1) }
        }
        this.$emit('input-card-number', this.formData.cardNumber)
      },
      changeMonth () {
        this.$emit('input-card-month', this.formData.cardMonth)
      },
      changeYear () {
        this.$emit('input-card-year', this.formData.cardYear)
      },
      changeCvv (e) {
        this.formData.cardCvv = e.target.value
        this.$emit('input-card-cvv', this.formData.cardCvv)
      },
      invaildCard () {
        const number = this.formData.cardNumberNotMask.replace(/ /g, '')
        var sum = 0
        for (var i = 0; i < number.length; i++) {
          var intVal = parseInt(number.substr(i, 1))
          if (i % 2 === 0) {
            intVal *= 2
            if (intVal > 9) {
              intVal = 1 + (intVal % 10)
            }
          }
          sum += intVal
        }
        if (sum % 10 !== 0) {
          alert('invalidCardNumber')
        }
      },
      blurCardNumber () {
        if (this.isCardNumberMasked) {
          this.maskCardNumber()
        }
      },
      maskCardNumber () {
        this.formData.cardNumberNotMask = this.formData.cardNumber
        this.mainCardNumber = this.formData.cardNumber
        const arr = this.formData.cardNumber.split('')
        arr.forEach((element, index) => {
          if (index > 4 && index < 14 && element.trim() !== '') {
            arr[index] = '*'
          }
        })
        this.formData.cardNumber = arr.join('')
      },
      unMaskCardNumber () {
        this.formData.cardNumber = this.mainCardNumber
      },
      focusCardNumber () {
        this.unMaskCardNumber()
      },
      toggleMask () {
        this.isCardNumberMasked = !this.isCardNumberMasked
        if (this.isCardNumberMasked) {
          this.maskCardNumber()
        } else {
          this.unMaskCardNumber()
        }
      },
    },
  }
</script>
