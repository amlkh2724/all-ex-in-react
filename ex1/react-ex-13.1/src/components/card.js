// import { useRef } from "react";
import { useState, useEffect } from "react"
// Create in a component a state called “favoriteColor” and
// its value some color string.
// 2. In your, JSX creates an h1 element that will display your
// favorite color coming from the state. e.g. “My favorite
// color is blue”
// 3. In your, JSX create an empty div with an id attribute.
// 4. Just when the component mounts to the screen create a
// setTimeout function that will be invoked after 1 second.
// Inside your setTimeout function change the state’s value
// of your favoriteColor to some other color.
const FavoriteColor = () => {
    const [favoriteColor, setFavoriteColor] = useState('blue');
    useEffect(() => {
        const timer = setTimeout(() => {
            setFavoriteColor("red")
        }, 1000)

        return () => {
            clearTimeout(timer)
            console.log("clean");
        };
    }, []);
    return (
        <div id="my-div">
            <h1>my FavoriteColor is : {favoriteColor}</h1>
        </div>


    )

};

export default FavoriteColor;
