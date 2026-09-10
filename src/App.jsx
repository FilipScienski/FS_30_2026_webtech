import './App.css'

export default function App()
{


    const app = {
    name: "WebTech",
    version: "1.0",
    author: "Filip Ścieński",
    technologiesCount: 3
  };


  const technology = {
  name: "React",
  category: "Frontend",
  hours: 30,
  active: true
};

const student = {
  name: "Filip",
  surname: "Ścieński",
  className: "4P",
  specialization: "technik programista"
};

const course = {
  name: "React",
  teacher: "JS",
  hours: "20",
  completed: "Tak"
};

  return(
    <>
    
      <div>

      <h1>{app.name}</h1>

      <p>Wersja: {app.version}</p>

      <p>Autor: {app.author}</p>

      <p>
        Liczba technologii: {app.technologiesCount}
      </p>

    </div>

      <h1>{technology.name}</h1>
      <h2>Kategoria: {technology.category}</h2>
      <h3>Liczba godzin: {technology.hours} </h3>

      <p>Uczeń: {student.name + " " + student.surname}</p>
      <p>Klasa: {student.className}</p>
      <p>Kierunek: {student.specialization}</p>

      <section>
        <h2>{course.name}</h2>
        <p>{course.teacher + " | " + course.hours} h</p>
        <p>Ukończony: {course.completed}</p>
        <p>{Math.round((Math.random() * 100 % 101))}%</p>
      </section>
    </>
  );
}