import React from 'react';


function Product(props) {

    const { products, handleAdd } = props;

    return (
        <main className="block col-2">
            <h3>Products</h3>
            {
                products.map(product =>
                (
                    <div key={product.id} className="col-1">
                        <img className="small" src={product.image} alt={product.name} />
                        <h3>{product.title}</h3>
                        <div>
                            ${product.price}
                        </div>

                        <button onClick={() => handleAdd(product)}>Add To Cart</button>
                    </div>))
            }
        </main>
    )

}

export default Product;