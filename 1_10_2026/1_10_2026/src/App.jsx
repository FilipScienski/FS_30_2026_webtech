import Car from "./Car";

export default function App()
{
  const numbers = [1,2,3,4,5,6,7,8,9,10];
  const auta = [{id: 0, marka: "BMW", model: "M5"}, {id: 1, marka: "Toyota", model: "Corolla"}, {id: 2, marka: "Honda", model: "Jazz"}, {id: 3, marka: "Audi", model:"A5"}, {id:4, marka: "Skoda", model: "Octavia"}];
  const newNumbers = numbers.map(v=>(v*2));

  console.log(newNumbers);

  return(<>
  {auta.map((v)=>(<Car key={v.id} name={v.marka} id={v.id} model={v.model} />))}
  </>);
}
