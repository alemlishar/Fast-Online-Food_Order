import React from 'react'
import Button from '../../ui/Button'
import { useDispatch, useSelector } from 'react-redux'
import {deleteCartItem, getCart} from './CartSlice'
import dataSource from '../../store'

export default function RemoveItem(pizzaId) {
  const dispatch = useDispatch()
        console.log("pizza number =" + pizzaId)
  return (
      <div> <Button type="small" onClick={()=> {
        dispatch(deleteCartItem(pizzaId))
      }
        }>Delete</Button>
       </div>
           
    )
}