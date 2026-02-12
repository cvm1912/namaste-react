import Card from "./Card";
import reslist from "../utils/mocData";
const Body = () =>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container" >
                <Card reslist={reslist[0]}/>
                <Card reslist={reslist[1]}/>
            </div>
        </div>

    )
}
export default Body;



