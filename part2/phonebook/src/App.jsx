import { useState, useEffect } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import PersonList from './components/PersonList';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  useEffect(() => {
  console.log('effect')
  axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log('promise fulfilled')
      setPersons(response.data)
    })
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
    setPersons(persons.concat(nameObject));
    setNewName('');
    setNewNumber('');
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
       <PersonForm addPerson={addPerson} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} newName={newName} newNumber={newNumber} />
      <h2>Numbers</h2>
      <PersonList persons={persons} />
    </div>
  )
}

export default App
