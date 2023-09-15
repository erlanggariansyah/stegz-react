import ItemBoxStyled from "../../styled/ItemBoxStyled";

const ItemBox = (props) => {
    const { titleText } = props;
    const color = { color: 'black' }

    return (
        <ItemBoxStyled>
            <p className="title">{titleText}</p>
        </ItemBoxStyled>
    )
}

export default ItemBox;
