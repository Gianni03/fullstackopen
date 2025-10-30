import Part from './Part.jsx'

const Content = ({course}) => {
  console.log("Content props:", course)
  return (
      <ul>
        {course.map(part => 
          <Part key={part.id} part={part} />
        )}
      </ul>
  )
}

export default Content