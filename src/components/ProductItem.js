import { Link } from 'react-router-dom'

function ProductItem(props) {
    return (
        <div className="product">
            <img src={props.imageUrl} alt={props.name} />

            <div className="product_info">
                <p className="product_name">{props.name}</p>

                <p className="product_description">{props.description.substring(0, 100)}...</p>

                <p className="product_price">${props.price}</p>

                <Link to={`/product/${props.productId}`} className="product_button">View</Link>
            </div>
        </div>
    )
}

export default ProductItem

