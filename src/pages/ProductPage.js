import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";

function ProductPage() {
    return (
        <>
            <div className="main">
                <div className="company-logo"></div>  
                    <div className="search">
                    <SearchBar />
                </div>
            </div>
            <ProductList />
        </>
    );  
};

export default ProductPage;