import './App.css'

export default function App()
{

  const technology = {
  name: "React",
  category: "Frontend",
  hours: 30,
  active: true
};

const student = {
  name: "...",
  surname: "...",
  className: "4P",
  specialization: "technik programista"
};

const course = {
  name: "...",
  teacher: "...",
  hours: "...",
  completed: "..."
};

  return(
    <>
      <h1>{technology.name}</h1>
      <h2>Kategoria: {technology.category}</h2>
      <h3>Liczba godzin: {technology.hours}</h3>

      <p>Uczeń: {student.name + " " + student.surname}</p>
      <p>Klasa: {student.className}</p>
      <p>Kierunek: {student.specialization}</p>

      <section>
        <h2>{course.name}</h2>
        <p>{course.teacher + " | " + course.hours}</p>
        <p>{course.completed}</p>
      </section>
    </>
  );
}