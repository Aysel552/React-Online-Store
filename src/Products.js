function Products({productsForSale}) {
    return (
        <div className="products">
            {productsForSale.map((element => {
                const { id, searchTerm, productName, price, image } = element;

                return (
                    <div className="product-card" key={id}>
                        <img src={image} alt='Products' width='300px' height='500px' />
                        <div className="product-info">
                            <h3 className="productName">{productName}</h3>
                            </div>
                            <div className="product-info">
                            <h4 className="productPrice">€ {price}</h4>
                            </div>
                        </div>
                    
                )
            }))}
        </div>
    )
}

export default Products;