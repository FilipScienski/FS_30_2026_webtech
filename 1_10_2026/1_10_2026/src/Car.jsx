export default function Car({id, name, model})
{
    return(<div>
        <h2>{name}</h2>
        <p>{name + " " + model}</p>
    </div>);
}