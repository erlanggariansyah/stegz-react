import React, { useState } from "react";
import { useEffect } from "react";
import SignedInBillingStyled from "../../styled/SignedInBillingStyled";
import axios from "axios";
import HeadingMenu from "../HeadingMenu/HeadingMenu";

const SignedInBilling = () => {
    const [ billingData, setBillingData ] = useState([]);
    const [ totalPrice, setTotalPrice ] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/billings', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem('Authorization-Token')
            }
        }).then((response) => {
            const billingRows = [];
            let prices = 0;

            for (let i = 0; i < response.data.data.length; i++) {
                billingRows.push(
                    <>
                        <tr>
                            <td>{i + 1}</td>
                            <td>{response.data.data[i].action}</td>
                            <td>{response.data.data[i].price}</td>
                            <td>{response.data.data[i].created_at}</td>
                        </tr>
                    </>
                );

                prices += parseInt(response.data.data[i].price);
            }

            setTotalPrice(prices);
            setBillingData(billingRows);
        })
    }, []);

    return (
        <SignedInBillingStyled>
            <HeadingMenu titleText={"My Billing"} subtitleText={"/  My Billing"} />
            <div className="tableContainer">
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Action</th>
                            <th>Price</th>
                            <th>Performed At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {billingData}
                    </tbody>
                </table>
                <p>Total Price: Rp. {totalPrice},00</p>
            </div>
        </SignedInBillingStyled>
    )
}

export default SignedInBilling;
