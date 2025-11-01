import Part from './Part.jsx'

const Content = ({course}) => {
  return (
      <ul>
        {course.map(part => 
          <Part key={part.id} part={part} />
        )}
      </ul>
  )
}

export default Content