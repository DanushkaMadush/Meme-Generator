import React from "react";

// export default function Thing () {

//     const [things , setThings] = React.useState(["Thing 1" , "Thing 2"])

//     function addItem () {
//         const newThing = `Thing ${things.length + 1}`
//         setThings(prevState => [...prevState , newThing])
//     }

//     const thingsElements = things.map(thing => <p>{thing}</p>)

//     return (
//         <div>
//             <button onClick={addItem}>Add</button>
//             {thingsElements}
//         </div>
//     )
// }

export default function Test () {
const [counter , setCounter] = React.useState(0)

function add() {
 setCounter(prevCounter => prevCounter + 1)
}
function sub () {
    setCounter(prevCounter => prevCounter - 1)
}

return (
    <div>
        <button onClick={sub}>-</button>
        <h1>{counter}</h1>
        <button onClick={add}>+</button>
    </div>
)
}