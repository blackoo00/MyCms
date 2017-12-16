import * as types from '../constants/ActionTypes';
import shop from '../../shared/shop';

const homeInitDip = data => ({
    type:types.HOME_INIT,
    data:data
})

export const homeInit = () => dispatch => {
    shop.homeInit(data => {
        dispatch(homeInitDip(data))
    })
}
