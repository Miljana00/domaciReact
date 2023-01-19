import Pagination from "../components/Pagination"
import Products from "../components/Products";
import items from '../data'
import { useState } from "react";
function Pocetna(){
   
    const [products] = useState(items);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(6);
    const [loading] = useState(false);
    //Get current posts
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

 // Change page
 const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return(
        <div className="container mt-5 mb-5">
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          paginate={paginate}
        />
        <Products items={currentProducts} loading={loading}/>
      </div>
    )

}

export default Pocetna;