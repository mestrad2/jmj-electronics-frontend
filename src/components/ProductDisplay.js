import ApplianceItem from "./ApplianceItem"
import ComputerItem from "./ComputerItem"
import PhoneItem from "./PhoneItem"
import TVItem from "./TVItem"

function ProductDisplay(props) {

    const displayItems = props.data.map((item, index) => {
        return (
            //needs to be a conditional here to sort different types of items and feed them through components
            <div>
                <ApplianceItem item={item} key={index} />
                <ComputerItem item={item} key={index} />
                <PhoneItem item={item} key={index} />
                <TVItem item={item} key={index} />
            </div>
        )
    })

    return(
        <div>
            {displayItems}
        </div>
    )
}

export default ProductDisplay