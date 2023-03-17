import { Button, FloatingLabel, Table } from 'react-bootstrap';
import React, { useEffect, Fragment, useState } from "react";
import './styles.css';
import { BiPlusCircle, BiMinusCircle, BiCart } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

// redux mapping
import { useDispatch, useSelector } from "react-redux";
import {
  SetCurrentItem, productsSelector, AddItemToCart,
  UpdateItemToCart
} from "../../app/redux/slices/productSlice";
import ProductSize from '../../app/components/productsize';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
const ProductDetails = () => {

  // set up dispatch
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { id, color } = state; 
  console.log(productsSelector)
  const [Quantity, setQuantity] = useState(0);
  const [selecteditemSize, setProductSize] = useState(0);
  const [totalitemPrice, setTotalItemPrice] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState({});
  // fetch data from our store
  const {
    loading,
    error,
    productList,
    curIndex,
    CartList,

  } = useSelector(productsSelector);

  const onAddItemtoCart = (product) => {
    setSelectedProduct(product)

    if (CartList.length == 0) {

      console.log("Adding new item")
      let CartProductModel = {
        productCode: product.productCode,
        productId: product.productID,
        productDescription: product.productDescription,
        productSize: selecteditemSize,
        price: product.productRate,
        offerPrice: product.productDiscountedRate,
        subCatDesc: product.subCatDesc,
        photo: product.photo,
        Quantity: Quantity,
        totalItemPrice: (Quantity * product.productDiscountedRate),

      }
      const newArray = [];
      newArray.push(CartProductModel);
      console.log(newArray)
      dispatch(AddItemToCart(newArray));


    }
    else {


      console.log("updating cart")
      let CartProductModel = {
        productCode: product.productCode,
        productId: product.productID,
        productDescription: product.productDescription,
        productSize: selecteditemSize,
        price: product.productRate,
        offerPrice: product.productDiscountedRate,
        subCatDesc: product.subCatDesc,
        photo: product.photo,
        Quantity: Quantity,
        totalItemPrice: (Quantity * product.productDiscountedRate),

      }
      const newArray = [];
      CartList.forEach(obj => {
        if (obj.productId !== product.productID) {
          newArray.push(obj)
        }
      });
      console.log("updating cart", newArray)
      if (Quantity !== 0) {
        newArray.push(CartProductModel);
      }

      dispatch(UpdateItemToCart(newArray));

    }

  }

  const onDecrement = (productID) => {

    setQuantity(
      Quantity !== 1 ? Quantity - 1 : 1
    );
    var result = CartList.filter(obj => {
      return obj.productId === productID
    })
    if (result.length > 0) {
      onAddItemtoCart(productList[curIndex]);
    }


  }

  const onIncrement = (productID) => {
    console.log("onIncrement", productID)
    setQuantity(
      Quantity + 1
    )
    var result = CartList.filter(obj => {
      return obj.productId === productID
    })
    console.log("cart is", CartList)
    console.log("result is", result)
    if (result.length > 0) {
      onAddItemtoCart(productList[curIndex]);
    }


  }
  const setSelectedSize = (size) => {
    setProductSize(size);
  }
  const onGoToCart = () => {
    navigate('/sales', { state: { id: curIndex, color: 'green' } });
  };
  const goToNext = () => {
    dispatch(SetCurrentItem((curIndex + 1) % productList.length));
  };
  const goToPrevious = () => {
    dispatch(SetCurrentItem((curIndex - 1) % productList.length));
  };

  // render the items
  const renderItems = () => {

    // loading state
    if (loading) return <strong>Loading please wait...</strong>;

    // error state
    if (error) return <strong>Items not available at this time</strong>;

    console.log(productList)
    const product = productList[curIndex];
    // setSelectedProduct(product)
    // regular data workflow
    return (
      product ?


        <div className="flcontainer">

          <Table responsive>
            <thead>
              <tr>
                <th><Button className='buttonBox' onClick={onGoToCart}   >
                  <BiCart ></BiCart><label>{CartList.length ? CartList.length : 0}</label>
                </Button>

                </th>
                <th> <Button className='buttonBox' onClick={goToPrevious}   >
                  <BsFillArrowLeftCircleFill ></BsFillArrowLeftCircleFill>
                </Button></th>
                <th><Button className='buttonBox' onClick={goToNext}   >
                  <BsFillArrowRightCircleFill ></BsFillArrowRightCircleFill>
                </Button></th>

              </tr>
            </thead>
            <tbody>


              <tr >
                <td  >

                  < img
                    src={"data:image/png;base64," +
                      product.photo
                    }
                    className="img-fluid" alt="Responsive image"
                  />
                </td >
                <td >
                  <label className="title">{product.productDescription}</label>
                  <FloatingLabel className="title">Price : <span>&#8377;</span> {product.productRate}</FloatingLabel>
                  <FloatingLabel className="title">Offer Price : <span>&#8377;</span>  {product.productDiscountedRate}</FloatingLabel>
                  <FloatingLabel className="title">Additional Details :{product.productItems}</FloatingLabel>

                  <FloatingLabel className="title">Dispatch Date :</FloatingLabel>




                  <Button className='buttonCircle'

                    onClick={() => onDecrement(product.productID)}
                  >
                    <BiMinusCircle name="minus-circle" size={30} color="gray" />
                  </Button>

                  <FloatingLabel >Quantity: {Quantity}</FloatingLabel>
                  <Button className='buttonCircle'

                    onClick={() => onIncrement(product.productID)}
                  >
                    <BiPlusCircle name="plus-circle" size={30} color="gray" />
                  </Button>

                  <br></br>
                  <ProductSize
                    setSelectedSize={() => setSelectedSize(product.productID)}
                  ></ProductSize>
                  <Button className='buttonBox' disabled={selecteditemSize == 0 || Quantity == 0 || (CartList.filter(obj => {
                    return obj.productId === product.productID
                  })).length != 0} onClick={() => onAddItemtoCart(product)}   >
                    <span className="title">Add to Cart</span>
                  </Button>

                </td >
              </tr>



            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td >

                </td >
              </tr>
            </tfoot>

          </Table>
        </div>
        : <strong>no data</strong>);
  };

  // template
  return (
    // onWheel={()=> {dispatch(fetchProducts("Sarees"));}}
    <div  >
      {renderItems()}
    </div>
  );
};

export default ProductDetails;





