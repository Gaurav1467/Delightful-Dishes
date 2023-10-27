import React from 'react'

function RecipeDescription({ name, ingredients, closePopOver, open }) {


  return (
    <div className={`backdrop ${open ? 'open' : ''}`} >
      <div className="card">
        <div className="close-button" onClick={() => closePopOver(false)}>X</div>
        <h1>{name}</h1>
        <h2>Ingredients</h2>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              <h5>{ingredient.text}</h5>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default RecipeDescription