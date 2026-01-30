import React from "react";
import ReactDOM from 'react-dom/client';

const Title = () => (
    <h1 className="">
        Namaste React using JSX
    </h1>
) 

const HeadingComponent = () =>{
    return <h1>Hello , this is JS</h1>
}

const HeadingComponent2 = () =>(
    <div>
        <Title/>
        <HeadingComponent/>
        <h1>Hello , this is JSX</h1>
    </div>
   
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent2 />)




