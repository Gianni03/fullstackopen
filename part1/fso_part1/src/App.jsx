import { useState } from 'react';
const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exersices}
    </p>
  );
};

const Content = (props) => {
  return (
    <>
      <Part part={props.part1} exersices={props.exersices1} />
      <Part part={props.part2} exersices={props.exersices2} />
      <Part part={props.part3} exersices={props.exersices3} />
    </>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises{' '}
      {props.exersices1 + props.exersices2 + props.exersices3}
    </p>
  );
};

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

   const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updateLeft = left + 1
    setLeft(updateLeft)
    setTotal(updateLeft + right)
  }
  
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
    setTotal(left + right)
  }

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content
        part1={course.parts[0].name}
        exersices1={course.parts[0].exercises}
        part2={course.parts[1].name}
        exersices2={course.parts[1].exercises}
        part3={course.parts[2].name}
        exersices3={course.parts[2].exercises}
      />
      <Total
        exersices1={course.parts[0].exercises}
        exersices2={course.parts[1].exercises}
        exersices3={course.parts[2].exercises}
      />
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text="sumar" />
      <Button handleClick={decreaseByOne} text="restar" />
      <Button handleClick={setToZero} text="reset" />
      <hr />
      <div>
        {left}
        <Button
          handleClick={handleLeftClick}
          text="left"
        />
        <Button
          handleClick={handleRightClick}
          text="right"
        />
        {right}
      </div>
      <History allClicks={allClicks} />
    </div>
  );
};

const Display = ({counter}) => <div>{counter}</div>;
const Button = ({handleClick, text}) => {
  return <button onClick={handleClick}>{text}</button>;
  
}

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}


export default App;
