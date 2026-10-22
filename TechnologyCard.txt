import { useState } from "react";

export default function TechnologyCard({data})
{

    const [likes, setLikes] = useState(0);
    const [isLearning, setIsLearning] = useState(false);
    const [visible, setVisible] = useState(false);
    // 22.10.2026

    function toggleDetails()
    {
        setVisible(!visible);
    }

    return(
        <div style={{display: "flex", flexDirection: "column"}}>
        <div style={{display: "flex", alignItems: "center", gap: "20px"}}>
            <span style={{display: "flex", alignItems: "baseline", gap: "10px"}}>
            <h1>{data.name}</h1>
            <p>{data.category} | {data.hours}h</p> 
            {isLearning ? <p>Uczę się</p> : <p>Jeszcze nie uczę się</p>}
            <p>Polubienia: {likes}</p>
            <button onClick={()=>{setLikes((prev)=>prev+1)}}>❤️</button>
            <button onClick={()=>{setLikes(0)}}>Reset</button>
            <button onClick={()=>{setIsLearning(!isLearning)}}>Zmień status nauki</button>
            {/* {visible && <p>Dodatkowe informacje</p>} */}
            <button onClick={toggleDetails}>
  {visible ? "Ukryj szczegóły" : "Pokaż szczegóły"}
</button>

            </span>

            <img src={`./images/${data.image}`} style={{maxHeight: "64px"}} />
        </div>
        {visible && (
  <div className="technology-details">
    <span className="technology-badge">{data.category}</span>
    <p>Czas nauki: {data.hours} godz.</p>
  </div>
)}
        </div>
    );
}