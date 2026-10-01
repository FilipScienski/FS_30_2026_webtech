export default function Student({name, className, age, spec})
{
    return(
    <div>
        <h1>{name}</h1>
        <p>Klasa: {className}</p>
        <p>Wiek: {age}</p>
        <p>Specjalizacja: {spec}</p>
    </div>)
}