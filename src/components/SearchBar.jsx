import React, { useState } from 'react'

const SearchBar = ({fetchData}) => {
    const [username, setUsername] = useState('');
    const submitHandler = (event) => {
        event.preventDefault();
        fetchData(username);
        setUsername('');
    }
  return (
    <form className='p-2 mt-10 dark:bg-[#1F2B47] w-11/12 mx-auto rounded-lg flex justify-between shadow-xl bg-white md:w-1/2' onSubmit={submitHandler}>
        <input type="text" className='w-8/12  outline-none bg-transparent px-3 text-md'placeholder='Search GitHub Username' onChange={(e) => setUsername(e.target.value)} value={username}/>
        <button type='submit' className='bg-[#0178FF] rounded-lg p-3 tracking-wide text-white font-bold'>Search</button>
    </form>
  )
}

export default SearchBar