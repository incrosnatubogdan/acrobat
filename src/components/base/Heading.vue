<template>
  <component
    :is="tag"
    :class="classes"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-if="title">
      {{ title }}
    </template>

    <slot v-else />
  </component>
</template>

<script>
  export default {
    name: 'BaseHeading',

    inject: {
      heading: {
        default: () => ({ align: 'left' }),
      },
    },

    provide () {
      return {
        heading: {
          align: this.align,
        },
      }
    },

    props: {
      align: {
        type: String,
        default () {
          return this.heading.align
        },
      },
      dense: {
        type: Boolean,
        default () {
          return this.isDense
        },
      },
      size: {
        type: String,
        default: 'text-h3',
      },
      space: {
        type: [Number, String],
        default: 4,
      },
      mobileSize: {
        type: String,
        default: 'text-h4',
      },
      color: {
        type: String,
        default: 'athens-gray',
      },
      mobileBreakpoint: {
        type: [Number, String],
        default: 768,
      },
      tag: {
        type: String,
        default: 'h1',
      },
      title: String,
      weight: {
        type: String,
        default: 'black',
      },
    },

    computed: {
      classes () {
        const classes = [
          this.fontSize,
          `font-weight-${this.weight}`,
          `mb-${this.space}`,
          `text-${this.align}`,
          `color-${this.color}`,
        ]

        return classes
      },
      fontSize () {
        return this.$vuetify.breakpoint.width >= this.mobileBreakpoint
          ? this.size
          : this.mobileSize
      },
    },
  }
</script>

<style lang="sass">
.color-athens-gray
  color: $athens-gray !important

.bg-athens-gray
  background-color: $athens-gray !important
  border-color: $athens-gray !important

.color-brown-rust
  color: $brown-rust !important

.bg-brown-rust
  background-color: $brown-rust !important
  border-color: $brown-rust !important

.color-mirage
  color: $mirage !important

.bg-mirage
  background-color: $mirage !important
  border-color: $mirage !important

.color-ebony-clay
  color: $ebony-clay !important

.bg-ebony-clay
  background-color: $ebony-clay !important
  border-color: $ebony-clay !important

.color-buccaneer
  color: $buccaneer !important

.bg-buccaneer
  background-color: $buccaneer !important
  border-color: $buccaneer !important

.v-tab--active,
.v-tabs-slider-wrapper
  color: $ebony-clay !important

</style>
