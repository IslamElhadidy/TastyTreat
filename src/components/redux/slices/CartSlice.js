import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItem:[],
    totalQuantity: 0,
    totalAmount: 0
}
const CartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItem:(state,action)=>{
            const newItem = action.payload
            const exixtItem = state.cartItem.find(item => item.id === newItem.id)
            state.totalQuantity++

            if(!exixtItem) {
                state.cartItem.push({
                    id:newItem.id,
                    title:newItem.title,
                    image01 : newItem.image01,
                    image02 : newItem.image02,
                    image03 : newItem.image03,
                    price:newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            } 
            else {
                exixtItem.quantity++
                exixtItem.totalPrice = Number(exixtItem.totalPrice) + Number(newItem.price)
            }


            // noteeeeeee
            state.totalAmount = state.cartItem.reduce((total,item) => 
                total + Number(item.price) * Number(item.quantity),0
            )

            

        },

        removeItem:(state,action)=> {
            const id = action.payload
            const exixtItem = state.cartItem.find(item => item.id === id)
            state.totalQuantity--

            
            if(exixtItem.quantity === 1) {
                state.cartItem = state.cartItem.filter(item=> item.id !== id)
            } 
            else {
                exixtItem.quantity--
                exixtItem.totalPrice = Number(exixtItem.totalPrice) -  Number(exixtItem.price)
            }

            state.totalAmount = state.cartItem.reduce((total,item) => 
                total + Number(item.price) * Number(item.quantity),0
            )
        }
    }
})

export const cartAction = CartSlice.actions
export default CartSlice