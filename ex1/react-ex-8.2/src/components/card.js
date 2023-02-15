
import './index.css'
const CardTurtle = ({ turtle }) => {
    return (
        <div className='card'>
            <h3>{turtle.name}</h3>
            <img src={turtle.img} alt={turtle.name} />
            <h3>Toppings</h3>
            <ul>
                {turtle.pizzaToppings.map((topping) => (
                    <li key={topping.name}>
                        <button>{topping.name}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CardTurtle;

// const CardTurtle = ({ turtle }) => {
//     turtle = data
//     return (
//         <div className='card'>
//             <h3>{turtle.name}</h3>
//             <img src={turtle.img} alt="a" />
//             <h3>topping</h3>
//             <ul>
//                 {turtle.pizzaToppings.map((topping, index) => (
//                     <li key={index}>
//                         <button>{topping.name}</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }
// export default CardTurtle
