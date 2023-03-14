import React, {FC} from 'react'
import Pizza from '../modals/Pizza'

interface DisplayPizzasProps {
  pizzasList: Pizza[]
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({pizzasList}) => {
  return (
    <div className='container'>
      {pizzasList.map((pizza) => {
        return pizza.title
      })}
    </div>
  )
}

export default DisplayPizzas
