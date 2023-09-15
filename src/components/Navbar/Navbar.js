import React from "react";
import ItemList from "../ItemList/ItemList";
import NavbarStyled from "../../styled/NavbarStyled";

const Navbar = () => {
    return (
        <NavbarStyled>
            <nav>
                <div>
                    <h1>IBM stegZ</h1>
                </div>
                <ItemList />
            </nav>
        </NavbarStyled>    
    )
}

export default Navbar;
