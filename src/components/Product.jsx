export default function Product({name, price, fn})
{
    return(
        <>
        <h2>{price}</h2>
        <p>{name}</p>
        <button type="button" onClick={()=>{fn(name)}} >Pokaż produkt</button>
        </>
    );
}