import { createStore } from 'redux'
import { reducerCounter } from './reducer';



// 1- Create Store 
export const storeCounter = createStore(reducerCounter) ; // هيك أنشأت المخزن , هذا المخزن بوخذ ريديوسر