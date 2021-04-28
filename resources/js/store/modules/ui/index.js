import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = {
    theme: null,
    snackbar: {
        showing: true,
        message: "Test",
        timeout: 3000,
        type: 'success'
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
