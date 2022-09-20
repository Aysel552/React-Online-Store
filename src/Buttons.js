function Buttons({filteredProducts}) {
    return (
        <div className="container wrapper">
            <button onClick={() => filteredProducts('dress')} className="change">Dresses</button>
            <button onClick={() => filteredProducts('jeans')}className="change">Jeans</button>
            <button onClick={() => filteredProducts('jacket')}className="change">Jackets</button>
            <button onClick={() => filteredProducts('skirt')}className="change">Skirts</button>
            <button onClick={() => filteredProducts('coat')}className="change">Coats</button>
            <button onClick={() => filteredProducts('shoes')}className="change">Shoes</button>
        </div>
    )
}

export default Buttons;