import React from "react";
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../cart/CartSlice";
import { getCurrentQuantityById } from "../cart/CartSlice";
import RemoveItem from "../cart/RemoveItem";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch()

  function handleAddToCart(e) {
    e.preventDefault()
    const newItem = {
        pizzaId: id,
        name,
        quantity: 1,
        unitPrice,
        totalPrice: unitPrice + 1
    }
    dispatch(addItem(newItem))
    console.log("item added")
  }

  const itemQuantity = useSelector(getCurrentQuantityById(id))
   const isIncart = itemQuantity > 0;

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

            {isIncart && <RemoveItem pizzaId={id} type="small"/>}
          {!soldOut && !isIncart && <Button type="small" onClick = {handleAddToCart}>Add to cart</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
