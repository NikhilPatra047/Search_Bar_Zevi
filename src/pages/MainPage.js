import SearchBar from "../components/SearchBar";
import TrendingBox from "../components/TrendingBox";
import { useGlobalContext } from "../context";

function MainPage() {
  const { active } = useGlobalContext();

  return (
    <>
      <div className="main">
        <div className="company-logo"></div>  
        <div className="search">
          <SearchBar />
          {active ? <TrendingBox /> : ``}
        </div>
      </div>
      
    </>
  );
}

export default MainPage;
