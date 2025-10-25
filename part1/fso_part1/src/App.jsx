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
  
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React';
  const exersices1 = 10;
  const part2 = 'Using props to pass data';
  const exersices2 = 7;
  const part3 = 'State of a component';
  const exersices3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exersices1={exersices1} part2={part2} exersices2={exersices2} part3={part3} exersices3={exersices3} />
      <Total exersices1={exersices1} exersices2={exersices2} exersices3={exersices3} />
    </div>
  )
}


export default App
