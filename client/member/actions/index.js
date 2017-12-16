import types from '../../common/constants/ActionTypes';
import shop from '../../shared/shop';

const initDip = (data) => ({
    type:types.MEMBER_INIT,
    data:data
})

export const init = () => dispatch => {
    shop.memberInit(data => {
        dispatch(initDip(data))
    })
}
