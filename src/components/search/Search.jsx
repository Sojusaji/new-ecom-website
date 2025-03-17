import{ React, useState} from 'react'
import "./Search.css";

function Search() {
    const [searchTerm, setSeachTerm] = useState("")

    const handleSearchInput=(event)=>{
       setSeachTerm(event.target.value)
    }
  return (
    <div className='search-bar flex gap-3 '>
      <div className="search w-[80%] h-[40px] rounded-xl  border-1 border-gray-800">
        <input className='w-[95%] h-full rounded-md focus:outline-none pl-2 placeholder-gray-700 
        text-gray-950'
         placeholder=' Search products here....' 
           type='text'
           value={searchTerm}
           onChange={handleSearchInput}
             ></input>
      </div>
      <button className='button  w-[20%] text-amber-50 rounded-md '>
          SEARCH
        </button>
    </div>
  )
}

export default Search
