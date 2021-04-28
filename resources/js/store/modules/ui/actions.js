import * as mutations from '../../types/mutations'
import * as actions from '../../types/actions'

export default {

    [actions.SET_THEME](context, theme) {
        return new Promise(() => {
            context.commit(mutations.SET_THEME, theme)
        })
    },

    [actions.PUSH_NOTIFICATION](context, data) {
        return new Promise(() => {
            context.commit(mutations.PUSH_NOTIFICATION, data)
        })
    },
}
