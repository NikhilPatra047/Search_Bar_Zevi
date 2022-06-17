import { dataURL } from "../data";
import { useFetch } from "../useFetch";

function TrendingBox() {
    const { data } = useFetch(dataURL);
    console.log(data);

    return (
        <div className="trending-container">
            <div>
                <h3>Latest Trends</h3>
            </div>

            <div className="bookContainer">
                { data.map((book) => {
                    const { id, title, author, image } = book;
                        return (
                            <div key={id}>
                                <img src={image} />
                                <h4 style={{margin: "0.5em 0 0 0"}}>{title}</h4>
                                <p style={{margin: "0.5em 0 0 0"}}>{author}</p>
                            </div>
                        );
                })}
            </div> 

            <div className="popular-suggest-container">
                <h3 style={{margin: "2em 0 1.9em 0"}}>Popular Suggestions</h3>
                <p>Striped shirt dress</p>
                <p>Satin shirts</p>
                <p>Strip</p>
                <p>Striped shirt dress</p>
                <p>Striped shirt dress</p>
            </div>
        </div>
    );
};

export default TrendingBox;