import { Link } from "react-router-dom"

function Product({name, price, description, imageUrl, productId}) {
    return(
        <div className="product">
            <img src={imageUrl} alt= {name} />

            <div className="product_info">
                <p className="product_name">{name}</p>

                <p className="product_description">{description.substring(0,100)}...</p>

                <p className="product_price">${price}</p>

                <Link to={`/product/${productId}`} className="product_button">View</Link>
            </div>
        </div>
    )
}

export default Product