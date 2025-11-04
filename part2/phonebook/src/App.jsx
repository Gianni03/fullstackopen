import { useState, useEffect } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import PersonList from './components/PersonList';
import phonebook from './services/phonebook';
import Success from './components/Success';


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
   phonebook
        .getAll()
        .then(initialPersons => {
        setPersons(initialPersons);
      });
}, [])

  const handleNameChange = (event) => {
    console.log('name changed', event.target.value);
    setNewName(event.target.value);
  }
  const handleNumberChange = (event) => {
    console.log('number changed', event.target.value);
    setNewNumber(event.target.value);
  }
  
  const addPerson = (event) => {
    event.preventDefault();
    if(persons.some(person => person.name === newName) || persons.some(person => person.number === newNumber)) {
      alert(`${newName} is already added to phonebook`);
    return;
  } else {
    const nameObject = {
      name: newName,
      number: newNumber,
    }
    phonebook
      .create(nameObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')

        setSuccessMessage(`Added ${newName}`)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
      })
      
  }
}

  const handleDelete = (id) => {
    if (window.confirm(`Delete person with id ${id}?`)) {
      phonebook
        .erase(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id));
        });
    }
  }

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredPersons = persons.filter(person => 
     person.name.toLowerCase().includes(searchTerm) || 
     person.number.includes(searchTerm)
    );
  setPersons(filteredPersons);
}
  
  
  

  return (
    <div>
      <h2>Phonebook</h2>
       <Filter handleSearch={handleSearch} />
      <Success message={successMessage} />
       <PersonForm addPerson={addPerson} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} newName={newName} newNumber={newNumber} />
      <h2>Numbers</h2>
      <PersonList persons={persons} handleDelete={handleDelete} />
    </div>
  )
}

export default App
