import React from "react";
import Items from "./items";

const List = () => {
    const listitems = [
        {
            name: "apple",
            type: "fruit",
            id: 1,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pink_lady_and_cross_section.jpg/330px-Pink_lady_and_cross_section.jpg"
        },
        {
            name: "mango",
            type: "fruit",
            id: 2,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Mangos_-_single_and_halved.jpg/330px-Mangos_-_single_and_halved.jpg"
        },
        {
            name: "tomato",
            type: "vegetable",
            id: 3,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/330px-Tomato_je.jpg"
        },
        {
            name: "potato",
            type: "vegetable",
            id: 4,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Patates.jpg/330px-Patates.jpg"
        }
    ];

    return (
        <div>
            <ol>
                {listitems.map((eachObject) => (
                    <Items item={eachObject.name} imageUrl={eachObject.imageUrl} />
                ))}
            </ol>
        </div>
    );
};

export default List;
