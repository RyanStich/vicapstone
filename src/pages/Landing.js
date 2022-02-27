import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero"; 
import Cata from "../components/Cata";


const Landing = ({postData, Setpost}) => {
    return (
        <>
                <Hero postData={postData} Setpost={Setpost}  />
        </>
    )
}

export default Landing