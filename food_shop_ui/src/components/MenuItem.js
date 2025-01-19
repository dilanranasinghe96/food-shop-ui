import React from 'react';


function MenuItem({name,price,image}) {
  return (
    <div className='menuItem'>
      <div style={{backgroundImage:`url(${image})`}}>     
      </div>
      <h1>{name}</h1>
        <p>Price: ${price}</p>
    </div>
  )
}

export default MenuItem
