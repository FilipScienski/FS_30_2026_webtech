import Header from "./components/Header";
import Technology from "./components/Technology";
import Footer from "./components/Footer";
import Student from "./components/Student";
import Book from "./components/Book";
import Lekcja6 from "./components/Lekcja6";

function App() {

  const technologies = [
    {
      id: 1,
      name: "React",
      category: "Frontend",
      hours: 30
    },
    {
      id: 2,
      name: "Node.js",
      category: "Backend",
      hours: 40
    },
    {
      id: 3,
      name: "MySQL",
      category: "Baza danych",
      hours: 20
    },
    {
      id: 4,
      name: "Express",
      category: "Backend",
      hours: 25
    }, {
      id: 5,
      name: "MongoDB",
      category: "Baza danych",
      hours: 20
    }

  ];

  const students = [
    { id: 1, name: "Anna", className: "4P", age: 18, spec: "Programowanie Web" },
    { id: 2, name: "Jan", className: "4P", age: 16, spec: "Programowanie" },
    { id: 3, name: "Adam", className: "4P", age: 17, spec: "Programowanie" }
  ];
  const books = [
    { id: 1, title: "Wiedźmin", author: "Andrzej Sapkowski" },
    { id: 2, title: "Hobbit", author: "J.R.R. Tolkien" },
    { id: 3, title: "Lalka", author: "Bolesław Prus" }
  ];

  return (
    <>
      <Header />

      <main>
        {technologies.map((technology) => (
          <Technology
            key={technology.id}
            name={technology.name}
            category={technology.category}
            hours={technology.hours}
          />
        ))}
        <section style={{ borderTop: "2px solid white", margin: "2em 0" }}>
          {students.map(v => {
            return (<Student name={v.name} className={v.className} spec={v.spec} age={v.age} key={v.id} />)
          })}
        </section>

        <section style={{ borderTop: "2px solid white", margin: "2em 0" }}>
          {books.map(v => {
            return (<Book key={v.id} title={v.title} author={v.author} />)
          })}
          <hr />
          {books.map(v => (
            <Book key={v.id} title={v.title} author={v.author} />
          ))}
        </section>

        <section>
          <Lekcja6 />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;