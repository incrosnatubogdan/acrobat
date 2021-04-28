import * as types from '../../types/mutations'

export default {
    [types.SET_THEME](state, theme) {
        state.theme = theme
    },
    [types.PUSH_NOTIFICATION](state, snackbar) {
        state.snackbar = snackbar
    }
}
