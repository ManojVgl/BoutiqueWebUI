
import React, { useState } from "react";
import { Button, Table } from 'react-bootstrap';
import './styles.css';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { PaytmButton } from '../../app/components/paytm-button/paytmButton';
// import { useNavigate  } from "react-router-dom";
// redux mapping
import { useDispatch, useSelector } from "react-redux";
import {
    productsSelector,
    PlaceOrder
} from "../../app/redux/slices/productSlice";
import { isMobile } from 'react-device-detect';

const Checkout = () => {


    // set up dispatch
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    //state
    const [BILLINGADDRESS, setBILLINGADDRESS] = useState("");
    const [BILLINGPINCODE, setBILLINGPINCODE] = useState("");
    const [BILLINGMOBNO, setBILLINGMOBNO] = useState("");
    const [BILLINGEMAIL, setBILLINGEMAIL] = useState("");
    const [BILLINGCOUNTRY, setBILLINGCOUNTRY] = useState("");
    const [BILLINGSTATE, setBILLINGSTATE] = useState("");
    const [BILLINGCITY, setBILLINGCITY] = useState("");
    const [SHIPPINGADDRESS, setSHIPPINGADDRESS] = useState("");
    const [SHIPPINGPINCODE, setSHIPPINGPINCODE] = useState("");
    const [SHIPPINGMOBNO, setSHIPPINGMOBNO] = useState("");
    const [SHIPPINGEMAIL, setSHIPPINGEMAIL] = useState("");
    const [SHIPPINGCOUNTRY, setSHIPPINGCOUNTRY] = useState("");
    const [SHIPPINGSTATE, setSHIPPINGSTATE] = useState("");
    const [SHIPPINGCITY, setSHIPPINGCITY] = useState("");
    const [FIRSTNAME, setFIRSTNAME] = useState("");
    const [LASTNAME, setLASTNAME] = useState("");

    const [emailBerrorMsg, setEmailErrMsg] = useState("");
    const [emailSerrorMsg, setSEmailErrMsg] = useState("");
    const [mobnoErrMsg, setBmobNoErrmsg] = useState("");
    const [mobSnoErrMsg, setSmobNoErrmsg] = useState("");

    const [checked, setChecked] = React.useState(false);
    // fetch data from our store
    const {
        loading,
        error,
        CartList,
        placeOrderSuccess
    } = useSelector(productsSelector);
    const isFormValid = () => {
        return FIRSTNAME && LASTNAME && BILLINGADDRESS && BILLINGPINCODE && BILLINGEMAIL && BILLINGMOBNO
    }
    const makemeBilling = () => {
    console.log('am here',checked);
        setChecked(!checked)
        setSHIPPINGADDRESS(!checked?BILLINGADDRESS:'');
        setSHIPPINGPINCODE(!checked?BILLINGPINCODE:'');
        setSHIPPINGMOBNO(!checked?BILLINGMOBNO:'');
        setSHIPPINGEMAIL(!checked?BILLINGEMAIL:'');
        setSHIPPINGCOUNTRY(!checked?BILLINGCOUNTRY:'');
        setSHIPPINGSTATE(!checked?BILLINGSTATE:'');
        setSHIPPINGCITY(!checked?BILLINGCITY:'')
    }
    const sumTotal = arr =>
        arr.reduce((sum, { offerPrice, Quantity }) => sum + offerPrice * Quantity, 0)
    const BookOrder = () => {

        var Salesdetails = [];
        CartList.map((row, index) => {
            var data =
            {
                "salesDetailsID": 0,
                "salesMasterID": 0,
                "productDesc": row.productDescription,
                "shopOfferId": 0,
                "productQty": row.Quantity,
                "ProductRate": row.offerPrice,
                "userID": 100,
                "productID": row.productId
            }


            Salesdetails.push(data);

        })
        var SalesData = {
            "salesID": 0,
            "salesDT": new Date().toJSON(),
            "customerName": FIRSTNAME + " " + LASTNAME,
            "userID": 0,
            "totalAmount": sumTotal(CartList),
            "salesType": 0,
            "salesStatus": 1,
            "isActive": 1,
            "billingAddress": BILLINGADDRESS,
            "billingPIN": BILLINGPINCODE,
            "billineMobNo": BILLINGMOBNO,
            "billingEmail": BILLINGEMAIL,
            "billingCountry": BILLINGCOUNTRY,
            "billingState": BILLINGSTATE,
            "billingCity": BILLINGCITY,
            "shippingAddress": SHIPPINGADDRESS,
            "shippingPIN": SHIPPINGPINCODE,
            "shippingMobNo": SHIPPINGMOBNO,
            "shippingEmail": SHIPPINGEMAIL,
            "shippingCountry": SHIPPINGCOUNTRY,
            "shippingState": SHIPPINGSTATE,
            "shippingCity": SHIPPINGCITY,
            "salesDetailsList": Salesdetails
        }
        console.log("the sales data", SalesData)

        dispatch(ƒ(SalesData));

    };
    const selectBillingCountry = (val) => {
        setBILLINGCOUNTRY(val);
    }

    const selectBillingRegion = (val) => {
        setBILLINGSTATE(val);
    }

    const selectShippingCountry = (val) => {
        setSHIPPINGCOUNTRY(val);
    }

    const selectShippingRegion = (val) => {
        setSHIPPINGSTATE(val);
    }
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const onTextValueChange = (e) => {

        switch (e.target.id) {
            case "FIRSTNAME":
                setFIRSTNAME(e.target.value)
                break;
            case "LASTNAME":
                setLASTNAME(e.target.value)
                break;
            case "BILLINGADDRESS":
                setBILLINGADDRESS(e.target.value)
                break;
            case "BILLINGPINCODE":
                setBILLINGPINCODE(e.target.value)
                break;
            case "BILLINGMOBNO":
                if (/^\d{10}$/.test(e.target.value)) {
                    setBILLINGMOBNO(e.target.value)
                    setBmobNoErrmsg('');
                } else {
                    setBILLINGMOBNO(e.target.value)
                    setBmobNoErrmsg('Invalid Mob No...');
                }
                break;
            case "BILLINGEMAIL":
                if (validateEmail(e.target.value)) {
                    setBILLINGEMAIL(e.target.value);
                    setEmailErrMsg('');
                }
                else {
                    setBILLINGEMAIL(e.target.value);
                    setEmailErrMsg('Invalid Email...');
                }
                break;
            case "BILLINGCOUNTRY":
                setBILLINGCOUNTRY(e.target.value)
                break;
            case "BILLINGSTATE":
                setBILLINGSTATE(e.target.value)
                break;
            case "BILLINGCITY":
                setBILLINGCITY(e.target.value)
                break;
            case "SHIPPINGADDRESS":
                setSHIPPINGADDRESS(e.target.value)
                break;
            case "SHIPPINGPINCODE":
                setSHIPPINGPINCODE(e.target.value)
                break;
            case "SHIPPINGMOBNO":
                if (/^\d{10}$/.test(e.target.value)) {

                    setSHIPPINGMOBNO(e.target.value);
                    setSmobNoErrmsg('');
                }
                else {
                    setSHIPPINGMOBNO(e.target.value);
                    setSmobNoErrmsg('Invalid Mob No...');
                }
                break;
            case "SHIPPINGEMAIL":
                if (validateEmail(e.target.value)) {
                    setSHIPPINGEMAIL(e.target.value);
                    setSEmailErrMsg('');
                }
                else {
                    setSHIPPINGEMAIL(e.target.value);
                    setSEmailErrMsg('Invalid Email...');
                }
                break;
            case "SHIPPINGCOUNTRY":
                setSHIPPINGCOUNTRY(e.target.value)
                break;
            case "SHIPPINGSTATE":
                setSHIPPINGSTATE(e.target.value)
                break;
            case "SHIPPINGCITY":
                setSHIPPINGCITY(e.target.value)
                break;

            default:
                break;
        }
    }

    const renderItems = () => {

        // loading state
        if (loading) return <strong>Loading please wait...</strong>;

        // error state
        if (error) return <strong>Items not available at this time</strong>;
        if (placeOrderSuccess > 0) return <strong>Your Order has been placed...Order#:XXXXX{placeOrderSuccess}</strong>;

        // regular data workflow
        return (

            <div className="flcontainer">

                <Table responsive>
                    <thead>
                        <tr>
                            <th>Billing Address</th>

                            <th>Shipping Address <span> 
                            <input type="checkbox"
                                defaultChecked={checked}
                                checked={checked}
                                onChange={() =>makemeBilling()}
                            /> Same as Shipping </span></th>



                        </tr>
                    </thead>
                    <tbody>
                        {isMobile &&
                            <tr>
                                <td colSpan="3"><Button onClick={BookOrder} disabled={!isFormValid()}> PLACE ORDER </Button></td>
                            </tr>}
                        <tr >
                            <td >
                                <label htmlFor="FirstName">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="FIRSTNAME"
                                    onChange={onTextValueChange}
                                    value={FIRSTNAME}
                                />
                            </td>
                            <td >
                                <label htmlFor="LASTNAME">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="LASTNAME"
                                    onChange={onTextValueChange}
                                    value={LASTNAME}
                                />
                            </td>
                        </tr>
                        <tr >

                            <td >
                                <label htmlFor="BILLINGADDRESS">ADDRESS</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="BILLINGADDRESS"
                                    onChange={onTextValueChange}
                                    value={BILLINGADDRESS}
                                />
                            </td>
                            <td >
                                <label htmlFor="SHIPPINGADDRESS">ADDRESS</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="SHIPPINGADDRESS"
                                    onChange={onTextValueChange}
                                    value={SHIPPINGADDRESS}
                                />
                            </td>
                        </tr>
                        <tr >
                            <td >
                                <label htmlFor="BILLINGMOBNO">MOBILE NO</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="BILLINGMOBNO"
                                    onChange={onTextValueChange}
                                    value={BILLINGMOBNO}
                                /><span className="text-danger">{mobnoErrMsg}</span>
                            </td>

                            <td >
                                <label htmlFor="SHIPPINGMOBNO">MOBILE NO</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="SHIPPINGMOBNO"
                                    onChange={onTextValueChange}
                                    value={SHIPPINGMOBNO}
                                /><span className="text-danger">{mobSnoErrMsg}</span>
                            </td>
                        </tr>
                        <td >
                            <label htmlFor="BILLINGPINCODE">PINCODE</label>
                            <input
                                type="text"
                                className="form-control"
                                id="BILLINGPINCODE"
                                onChange={onTextValueChange}
                                value={BILLINGPINCODE}
                            />
                        </td>
                        <td >
                            <label htmlFor="SHIPPINGPINCODE">PINCODE</label>
                            <input
                                type="text"
                                className="form-control"
                                id="SHIPPINGPINCODE"
                                onChange={onTextValueChange}
                                value={SHIPPINGPINCODE}
                            />
                        </td>
                        <tr>
                            <td >
                                <label htmlFor="BILLING EMAIL">EMAIL</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="BILLINGEMAIL"
                                    onChange={onTextValueChange}
                                    value={BILLINGEMAIL}
                                />
                                <span className="text-danger">{emailBerrorMsg}</span>
                            </td>
                            <td >
                                <label htmlFor="BILLING EMAIL">EMAIL</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="SHIPPINGEMAIL"
                                    onChange={onTextValueChange}
                                    value={SHIPPINGEMAIL}
                                />  <span className="text-danger">{emailSerrorMsg}</span>
                            </td>
                        </tr><tr>
                            <td >
                                <label htmlFor="BILLINGCOUNTRY">COUNTRY</label>

                                <CountryDropdown
                                    className="form-control"
                                    id="SHIPPINGCOUNTRY"
                                    value={BILLINGCOUNTRY}
                                    onChange={(val) => selectBillingCountry(val)} />
                            </td>
                            <td >
                                <label htmlFor="SHIPPINGCOUNTRY">COUNTRY</label>

                                <CountryDropdown
                                    className="form-control"
                                    id="SHIPPINGCOUNTRY"
                                    value={SHIPPINGCOUNTRY}
                                    onChange={(val) => selectShippingCountry(val)} />
                            </td>
                        </tr><tr>
                            <td >
                                <label htmlFor="BILLINGSTATE">STATE</label>

                                <RegionDropdown
                                    className="form-control"
                                    id="BILLINGSTATE"
                                    country={BILLINGCOUNTRY}
                                    value={BILLINGSTATE}
                                    onChange={(val) => selectBillingRegion(val)} />
                            </td>
                            <td >
                                <label htmlFor="BILLINGSTATE">STATE</label>
                                <RegionDropdown
                                    className="form-control"
                                    id="SHIPPINGSTATE"
                                    country={SHIPPINGCOUNTRY}
                                    value={SHIPPINGSTATE}
                                    onChange={(val) => selectShippingRegion(val)} />
                            </td>

                        </tr><tr>
                            <td >
                                <label htmlFor="BILLINGCITY">CITY</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="BILLINGCITY"
                                    onChange={onTextValueChange}
                                    value={BILLINGCITY}
                                />
                            </td>
                            <td >
                                <label htmlFor="SHIPPINGCITY">CITY</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="SHIPPINGCITY"
                                    onChange={onTextValueChange}
                                    value={SHIPPINGCITY}
                                />
                            </td>
                        </tr>

                    </tbody>
                    <tfoot>
                        {CartList.map((row, i) => (
                            <tr key={i}>


                                <td > <label htmlFor="Product Description" className="label label-success"> {row.productDescription}</label></td>

                                <td ><label htmlFor="sub Total" className="label label-success">{row.Quantity * row.offerPrice}</label></td>

                            </tr>

                        ))}
                        <tr>
                            <td ><label htmlFor="Total Amount" className="label label-success">Total Amount </label></td>
                            <td ><label htmlFor="Total Amount" className="label label-success">{() => sumTotal(CartList)} </label></td>
                        </tr>
                        <tr>
                        <td colSpan="3"><PaytmButton></PaytmButton></td>
                            <td colSpan="3"><Button onClick={BookOrder} disabled={!isFormValid()}> PLACE ORDER </Button></td>
                        </tr>
                    </tfoot>
                </Table>
            </div >



        )
    };

    // template
    return (
        // onWheel={()=> {dispatch(fetchProducts("Sarees"));}}
        <div  >
            {renderItems()}
        </div>
    );
};

export default Checkout;