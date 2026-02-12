import { CDN_URL } from "../utils/constaint";
const Card =(props)=>{
    const {reslist} = props;
    const {name, cuisines, avgRating, deliveryTime} = reslist.data;

    return(
        <div className="res-card">
            <img alt={name} src={CDN_URL + reslist.data.cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRating} stars</h3>
            <h3>{deliveryTime} min</h3>
        </div>
    )
}

export default Card;