
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, productsSelector } from "../../redux/slices/productSlice";

import { Button, Table } from 'react-bootstrap';
import './styles.css';
const CategoryTree = () => {


  const dispatch = useDispatch();
  
  const onFetchProduct = (catDesc, SubCatDesc) => {
    dispatch(fetchProducts(catDesc, SubCatDesc));
  }

  const renderItems = () => {

    return (

      <div className="Container" >

        <Table responsive >
          <tr className="btn-group btn-group-xs table-info">

            <td><span onClick={() => onFetchProduct('Kurtis', '')} className='btn btn-primary btn-sm' >Kurtis</span></td>
            <td> <span className='btn btn-primary btn-sm' onClick={() => onFetchProduct('Kurtis', 'Party Wear')}>Party Wear</span></td>
            <td><span className='btn btn-primary btn-sm' onClick={() => onFetchProduct('Kurtis', 'Casual Wear')}>Casual Wear</span></td>
            </tr><tr className="btn-group btn-group-xs table-info">
            <td><span className='btn btn-primary btn-sm' onClick={() => onFetchProduct('Kurtis', 'Budget Friendly')}>Budget Friendly</span> </td>

          </tr>
          <tr className="btn-group btn-group-xs">
            <td><span className='btn btn-primary btn-sm' onClick={(e) => onFetchProduct('Salwar Sets', '')}>Salwar Sets</span></td>
            <td><span className='btn btn-primary btn-sm' onClick={(e) => onFetchProduct('Salwar Sets', 'Party Wear')}>Party Wear</span></td>
            <td><span className='btn btn-primary btn-sm' onClick={(e) => onFetchProduct('Salwar Sets', 'Casual Wear')}>Casual Wear</span></td>
          </tr>
          <tr  className="btn-group btn-group-xs">
            <td><span onClick={(e) => onFetchProduct('Teen Fashion', '')} className='btn btn-primary btn-sm'>Teen Fashion</span></td>
            <td><a className='btn btn-primary btn-sm' onClick={(e) => onFetchProduct('Teen Fashion', 'Dress')}>Dress</a></td>
            <td><a className='btn btn-primary btn-sm' onClick={(e) => onFetchProduct('Teen Fashion', 'Lehenga')}>Lehenga</a></td>
            </tr>
          <tr className="btn-group btn-group-xs">
            <td><a className='btn btn-primary btn-sm' onClick={(e) => onFetchProduct('Teen Fashion', 'Gowns')}>Gowns</a> </td>
          </tr>
          <tr  className="btn-group btn-group-xs">
            <td><span className='btn btn-primary btn-sm' onClick={(e) => onFetchProduct('Sarees', '')} >Sarees</span></td>
            <td><a className='btn btn-primary btn-sm' onClick={(e) => onFetchProduct('Sarees', 'Party Wear')}>Party Wear</a></td>
            <td><a className='btn btn-primary btn-sm' onClick={(e) => onFetchProduct('Sarees', 'Casual Wear')}>Casual Wear</a></td>
            </tr>
          <tr className="btn-group btn-group-xs">
            <td><a className='btn btn-primary btn-sm' onClick={(e) => onFetchProduct('Sarees', 'Festival Collection')}>Festival Collection</a> </td>
          </tr>
          <tr  className="btn-group btn-group-xs">
            <td><span className='btn btn-primary btn-sm' onClick={(e) => onFetchProduct('Gowns', '')} >Gowns</span></td>
            <td><a className='btn btn-primary btn-sm' onClick={(e) => onFetchProduct('Gowns', 'Party Wear')}>Party Wear</a></td>
            <td><a className='btn btn-primary btn-sm' onClick={(e) => onFetchProduct('Gowns', 'Budget Friendly')}>Budget Friendly</a></td>
            </tr>
          <tr className="btn-group btn-group-xs">
            <td><a className='btn btn-primary btn-sm' onClick={(e) => onFetchProduct('Gowns', 'Designer Collection')}>Designer Collection</a> </td>
          </tr>
          <tr className="btn-group btn-group-xs">
            <td><span className='btn btn-primary btn-sm' onClick={(e) => onFetchProduct('Fabrics', '')} >Fabrics</span></td>
            <td><a className='btn btn-primary btn-sm' onClick={(e) => onFetchProduct('Fabrics', 'Designer fabric')}>Designer fabric</a></td>
            </tr>
          <tr className="btn-group btn-group-xs">
            <td><a className='btn btn-primary btn-sm' onClick={(e) => onFetchProduct('Fabrics', 'Cotton rayon fabric')}>Cotton rayon fabric</a> </td>
            </tr>
          <tr className="btn-group btn-group-xs">
            <td><a className='btn btn-primary btn-sm' onClick={(e) => onFetchProduct('Fabrics', 'Others')}>Others</a></td>
          </tr>
          <tr  className="btn-group btn-group-xs">
            <td><span className='btn btn-primary btn-sm' onClick={(e) => onFetchProduct('Kids Wear', '')} >Kids Wear</span></td>
            <td><span className='btn btn-primary btn-sm' onClick={(e) => onFetchProduct('Kids Wear', 'Dress')}>Dress</span></td>
            </tr><tr  className="btn-group btn-group-xs">
            <td><span className='btn btn-primary btn-sm' onClick={(e) => onFetchProduct('Kids Wear', 'Birthday Collection')}>Birthday Collection</span> </td>
            <td><span className='btn btn-primary btn-sm' onClick={(e) => onFetchProduct('Kids Wear', 'Ethnic Wear')}>Ethnic Wear</span></td>
            <td><span className='btn btn-primary btn-sm' onClick={(e) => onFetchProduct('Kids Wear', 'Baptism')}>Baptism</span></td>
            </tr>
          <tr className="btn-group btn-group-xs">
            <td><span className='btn btn-primary btn-sm' onClick={(e) => onFetchProduct('Kids Wear', 'Holy Communion')}>Holy Communion</span></td>
          </tr>
        </Table>
      </div>



    )
  }



  return (

    // onWheel={()=> {dispatch(fetchProducts("Sarees"));}}
    <div  >

      {renderItems()}
    </div>

  )

}
export default CategoryTree;