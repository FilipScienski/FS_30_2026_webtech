export default function TechnologyCard({data})
{
    return(
        <div style={{display: "flex", alignItems: "center", gap: "20px"}}>
            <span style={{display: "flex", alignItems: "baseline", gap: "10px"}}>
            <h1>{data.name}</h1>
            <p>{data.category} | {data.hours}h</p>
            </span>

            <img src={`./images/${data.image}`} style={{maxHeight: "64px"}} />
        </div>
    );
}