import { useGlobalContext } from "../context";

function ProductList() {
    const { updatedProduct, toggleCheck } = useGlobalContext();
    return (
        <>
            <h2 className="searchResultsTitle">Search Results</h2>
            
            <div className="product-container">

                <div className="filterInfo">
                    <div className="filter-item">
                        <h4>BRAND</h4>
                        <label class="container">Mango
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="container">H&M
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                    </div>

                    <div className="filter-item">
                        <h4>PRICE RANGE</h4>
                        <label class="container">Under 500
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="container">1000 To 3000
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                    </div>

                    <div className="filter-item">

                        <h4>RATINGS</h4>
                        <label class="container">
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#FDD33D"/>
                            </svg>
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#FDD33D"/>
                            </svg>
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#FDD33D"/>
                            </svg>
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#FDD33D"/>
                            </svg>
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#FDD33D"/>
                            </svg>

                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>

                        <label class="container">
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#FDD33D"/>
                            </svg>
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#FDD33D"/>
                            </svg>
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#FDD33D"/>
                            </svg>
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#FDD33D"/>
                            </svg>
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#CDCCC8"/>
                            </svg>

                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>

                        <label class="container">
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#FDD33D"/>
                            </svg>
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#FDD33D"/>
                            </svg>
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#FDD33D"/>
                            </svg>
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#CDCCC8"/>
                            </svg>
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#CDCCC8"/>
                            </svg>

                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>

                        <label class="container">
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#FDD33D"/>
                            </svg>
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#FDD33D"/>
                            </svg>
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#CDCCC8"/>
                            </svg>
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#CDCCC8"/>
                            </svg>
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#CDCCC8"/>
                            </svg>
                            
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>

                        <label class="container">
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#FDD33D"/>
                            </svg>
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#CDCCC8"/>
                            </svg>
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#CDCCC8"/>
                            </svg>
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#CDCCC8"/>
                            </svg>
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#CDCCC8"/>
                            </svg>
                            
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>

                    </div>

                </div>

                <div className="productDisplay">
                    <div className="bookContainer bookDisplay">
                    { updatedProduct.map((book) => {
                        const { id, title, author, image, checked, oldPrice, newPrice } = book;
                        return (
                            <div className="product" key={id}>
                                
                                <img src={image} />

                                <svg className={ checked ? "checked" : "unchecked"} 
                                onClick={() => toggleCheck(id)}
                                width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.09375 1.01172C3.86581 1.01172 1.02734 4.43396 1.02734 8.66016C1.02734 13.4558 7.72721 19.1855 13.4688 23.0117C19.2103 19.1855 25.8327 13.3634 25.9102 8.66016C25.9798 4.43456 23.2436 1.01172 19.0156 1.01172C17.2119 1.01172 15.3826 1.96591 13.4688 3.87891C11.5549 1.96591 9.89749 1.01172 8.09375 1.01172Z" stroke="white"/>
                                </svg>

                                <p style={{marginBottom: "0.3em", fontWeight: "bold"}}>{title}</p>
                                <p style={{marginTop: "0"}}>{author}</p>
                                <p style={{
                                    marginTop: "0",
                                    paddingTop: "0em",
                                    display: "inline-block",
                                    width: "71px",
                                    height: "24px",
                                    right: "168px",
                                    top: "385px",
                                    fontFamily: 'Inter',
                                    fontStyle: "normal",
                                    fontWeight: "300",
                                    fontSize: "20px",
                                    lineHeight: "24px",
                                    textDecorationLine: "line-through",
                                    color: "rgba(0, 0, 0, 0.4)"}}
                                >
                                    Rs.{oldPrice}
                                </p>

                                <p style={{
                                    marginTop: "0",
                                    display: "inline-block",
                                    width: "69px",
                                    height: "24px",
                                    right: "90px",
                                    top: "385px",
                                    fontFamily: 'Inter',
                                    fontStyle: "normal",
                                    fontWeight: "600",
                                    fontSize: "20px",
                                    lineHeight: "24px",
                                    color: "#6D84FF"}}
                                >
                                    Rs.{newPrice}
                                </p>

                                {/* <div style={{display: "inline-block"}}>
                                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#FDD33D"/>
                                    </svg>
                                </div> */}
                            </div>
                        );
                    })}
                    </div>
                </div>

            </div>
        </>
    );
};

export default ProductList;