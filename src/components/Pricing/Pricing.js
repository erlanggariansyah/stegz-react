import React, { useEffect, useState } from "react";
import PricingStyled from "../../styled/PricingStyled";
import Heading from "../Heading/Heading";
import axios from "axios";

const Pricing = () => {
    const [ pricingRows, setPricingRows ] = useState([]);

    useEffect(() => {
        const localPricingRows = [];

        axios.get("http://localhost:8080/api/v1/plans")
        .then((response) => {
            for (let i = 0; i < response.data.data.length; i++) {
                localPricingRows.push(
                    <tr key={response.data.data[i].tier}>
                        <td>{response.data.data[i].tier}</td>
                        <td>{response.data.data[i].plan_name}</td>
                        <td>{response.data.data[i].description}</td>
                        <td>{`Rp. ${response.data.data[i].price},00`}</td>
                        <td>{response.data.data[i].availability}</td>
                    </tr>
                )
            }
    
            setPricingRows(localPricingRows);
        });
    }, []);

    return (
        <PricingStyled>
            <Heading titleText={"Plans"} subtitleText={"choose your plan and get 100% discounts!"} />
            <div className="tableContainer">
                <table>
                    <thead>
                        <tr>
                            <th>Tier</th>
                            <th>Plan</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Availability</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pricingRows}
                    </tbody>
                </table>
            </div>
        </PricingStyled>
    )
}

export default Pricing;
