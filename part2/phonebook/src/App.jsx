import { useState } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import PersonList from './components/PersonList';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

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
