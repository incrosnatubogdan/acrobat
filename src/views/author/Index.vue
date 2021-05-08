<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Author',

    metaInfo: { title: 'Author' },

    extends: View,

    mixins: [
      LoadSections(['Author']),
    ],

    props: {
      id: {
        type: String,
        default: 'author',
      },
    },
  }
</script>
