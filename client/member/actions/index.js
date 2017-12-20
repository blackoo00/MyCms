import types from '../constants/ActionTypes';
import shop from '../../shared/shop';
import model from '../model/';

const initDip = (data) => ({
    type:types.MEMBER_INIT,
    data:data
})

export const init = () => dispatch => {
    model.getUserList().then(res => {
        console.log(res);
        dispatch(initDip(res))
    });
    // shop.memberInit(data => {
    //     dispatch(initDip(data))
    // })
}
