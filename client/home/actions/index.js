import * as types from '../constants/ActionTypes'
import model from '../model/'

const homeInitDip = data => ({
    type:types.HOME_INIT,
    data:data
})

export const homeInit = () => dispatch => {
    model.getUsers().then(res => {
        dispatch(homeInitDip({user_count:res}))
    });
    model.getProds().then(res => {
        dispatch(homeInitDip(res))
    });
    model.getOrders().then(res => {
        dispatch(homeInitDip(res))
    })
    // shop.homeInit(data => {
    //     dispatch(homeInitDip(data))
    // })
};
