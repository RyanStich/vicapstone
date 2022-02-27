import React from "react";
import Categories from "../components/Categories";


const Category = ({ postData, Setpost}) => {
    return (
        <>
            <Categories postData={postData} Setpost={Setpost} />
        </>
    )
}

export default Category;