import React, {FC} from 'react'
import Pizza from '../modals/Pizza'
import SinglePizza from '../components/SinglePizza'

interface DisplayPizzasProps {
  pizzasList: Pizza[];
  updatePizza: (newPizza: Pizza) => void
  deletePizza: (id: number) => void
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({pizzasList, updatePizza, deletePizza}) => {
  return (
    <div className='container'>
      {pizzasList.map((pizza) => {
        return <SinglePizza 
                    pizza={pizza} 
                    deletePizza={deletePizza}
                    updatePizza={updatePizza} 
                    key={pizza.id}/>
      })}
    </div>
  )
}

export default DisplayPizzas
