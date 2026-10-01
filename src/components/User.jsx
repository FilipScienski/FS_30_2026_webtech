export default function User({name, role})
{
    return(<div style={{display: "flex"}}>
        <h2>{name}</h2>
        <p>{role}</p>
    </div>);
}