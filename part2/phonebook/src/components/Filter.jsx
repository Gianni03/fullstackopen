const Filter = ({ handleSearch }) => {

  return(
    <div>
        Search: <input onChange={handleSearch}/>
      </div>
  )
}

export default Filter