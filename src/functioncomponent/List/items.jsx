
import React from "react";
import Pic from "../Image/img";



const Items = ({ item, imageUrl }) => {
    return (
        <li>
            {item}
            <Pic imageUrl={imageUrl}/>
                    </li>
    );
};

export default Items;

