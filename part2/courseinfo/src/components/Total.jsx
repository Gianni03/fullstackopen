const Total = ( {course}) => {
  console.log(course.parts);
  const total = course.reduce((sum, part) => {
    return sum + part.exercises
  }, 0)

  return (
    <p>
      total of {total} exercises
    </p>
  )
}

export default Total