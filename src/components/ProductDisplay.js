import ProductItem from "./ProductItem"

function ProductDisplay(props) {

    const displayItems = props.data.map((item, index) => {
        return (
            <ProductItem item={item} key={index} />
        )
    })
    
    return(
        <div>
            {displayItems}
        </div>
    )
}

export default ProductDisplay