
import React from 'react'
function Products({title,price,id,image,rating}) {

    return (

        <div className="card cardd">
            <img src={image} alt={title}/>
            <p>{title}</p>
            <p>price:{price}</p>
            <p>Rating:{rating.rate}</p> 
        </div>
    )
}
export default Products