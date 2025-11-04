const PersonList = ({ persons, handleDelete }) => {
  return (
    <ul>
        {persons.map((person, index) => (
          person && (
            
            <li key={index}>{person.name} {person.number}
          <button onClick={() => handleDelete(person.id)}>Delete</button>
          </li>
          )
        ))}
      </ul>
  );
}

export default PersonList;
