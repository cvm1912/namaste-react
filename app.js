import React from "react";
import ReactDOM from 'react-dom/client';

// header 
    // logo 
    // navbars 
// body 
    // serch  
    // cards container 
        // image
        // title 
// footer
    // copy right 
    // link
    // address
    //contact 

const StyleCard = {
    backgroundColor:"yellow",
}


const Header =()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="img" src="https://marketplace.canva.com/EAFpeiTrl4c/2/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-a1RYzvS1EFo.jpg"/>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}

const Card =()=>{
    return(
        <div className="res-card"  style={StyleCard}>
            <img src="https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg" />
            <h2>Shivam Card</h2>
            <h3>Biryani, North Indian</h3>
            <h3>4.4 stars</h3>
            <h3>33 min</h3>
        </div>
    )
}


const Body = () =>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container" >
                {/* res-cart */}
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                
             
            </div>
        </div>
    )
}


const AppLayout = () =>{
    return(
        <div className="app">
            <Header/>
            <Body/>
            

        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)




