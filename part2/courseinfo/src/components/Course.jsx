import Content from "./Content"
import Header from "./Header"
import Title from "./Title";
import Total from "./Total"


const Course = ({ courses }) => {
  console.log("Course props:", courses)
  return (
    <div>
      <Title />
      {courses.map( course => (
        console.log("Course map:", course),
        <div key={course.id}>
          <Header course={course.name} />
          <Content course={course.parts} />
          <Total course={course.parts} />
        </div>
      ))}
      
    </div>
  )
}

export default Course