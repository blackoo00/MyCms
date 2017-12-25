import types from '../constants/ActionTypes'
import model from '../model/'

const initDip = (data) => ({
    type:types.MEMBER_INIT,
    data:data
})

export const init = () => dispatch => {
    model.getUserList().then(res => {
        dispatch(initDip(res))
    });
}
