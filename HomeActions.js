import {
    PRODUCT_LIST_CLICKED
} from './Types'

export const clickChangeProductList =(item)=>{
    return ({
        type: PRODUCT_LIST_CLICKED,
        payload: item
      }
    )
}
