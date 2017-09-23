import * as types from './mutation-types'

const mutations = {
    [types.SCROLL_REFRESH](state, refresh_state) {
        state.refresh_state = refresh_state
    }
}

export default mutations