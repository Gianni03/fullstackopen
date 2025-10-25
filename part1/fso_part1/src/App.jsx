const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exersices}
    </p>
  )
}

const Content = (props) => {
  return (
    <>
    <Part part={props.part1} exersices={props.exersices1} />
    <Part part={props.part2} exersices={props.exersices2} />
    <Part part={props.part3} exersices={props.exersices3} />
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exersices1 + props.exersices2 + props.exersices3}</p>
  )
}


const App = () => {
  
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}

  return (
    <div>
      <Header course={course.name} />
      <Content part1={course.parts[0].name} exersices1={course.parts[0].exercises} part2={course.parts[1].name} exersices2={course.parts[1].exercises} part3={course.parts[2].name} exersices3={course.parts[2].exercises} />
      <Total exersices1={course.parts[0].exercises} exersices2={course.parts[1].exercises} exersices3={course.parts[2].exercises} />
    </div>
  )
}


export default App
