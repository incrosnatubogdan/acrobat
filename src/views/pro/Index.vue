<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Book',

    metaInfo: { title: 'Book' },

    extends: View,

    mixins: [
      LoadSections(['pro-features']),
    ],

    props: {
      id: {
        type: String,
        default: 'book',
      },
    },
  }
</script>
