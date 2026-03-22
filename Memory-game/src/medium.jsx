import {useState} from "react";
const fruits=["🍎","🍌","🍇","🍉","🍓","🍒","🥝","🍍",
"🥭","🍑","🍐","🍊","🍋","🍏","🥥","🍈","🍔","🍕"];
function medium() {
    

    const doubleFruits=[...fruits,...fruits];

    const shuffledFruits=doubleFruits
    .map((fruit) => ({ fruit, sort: Math.random() })) 
    .sort((a, b) => a.sort - b.sort)
    .map(({ fruit }) => fruit);

    const [cards,setCards]=useState(shuffledFruits);

    return(<>
    <div className="main">
        <div className="header">
            <div className="text-8xl mb-6 animate-pulse">🤔</div>
            <h1>medium Level</h1>
            <p>36 Cards - Match all pairs to win!</p>
        </div>
        <div className="game-board">
                <div style={style.container}>
                    {cards.map((fruit,index)=>(
                        <div key={index} style={style.card}>{fruit}</div>
                    ))}
                </div>
        </div>
    </div>
    </>)
}
const style ={
    container:{
        display:"grid",
        gridTemplateColumns:"repeat(6,100px)",
        gap: "10px",
        justifyContent: "center",
    },
    card:{
        width:"80px",
        height:"80px",
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "12px",
        cursor: "pointer",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
         backgroundColor: "rgb(240, 240, 240)",
    }
}
  
export default medium