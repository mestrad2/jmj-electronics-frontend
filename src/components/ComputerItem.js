import { Link } from 'react-router-dom'

function ComputerItem(props) {
    return (
        <div className="product">
            <img src={props.image} alt={props.desc} />

            <div className="product_info">
                <p className="product_description">{props.desc}</p>

                <p className="product_cost">${props.cost}</p>

                <p className="product_brand">{props.brand}</p>

                <p className="product_model_num">{props.modelNum}</p>

                <p className="product_spec">{props.spec}</p>

                <p className="product_OS">{props.productOS}</p>

                <p className="product_color">{props.productColor}</p>

                <Link to={`/product/${props.productId}`} className="product_button">View</Link>
            </div>
        </div>
    )
}

export default ComputerItem

