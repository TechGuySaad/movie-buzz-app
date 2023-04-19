import { useState } from 'react'
import '../styles/nav.css'
export default function Nav({searchQuery,setSearch}){
    
    function handleSearch(e){

        setSearch(e.target.value)
        // console.log(searchQuery)

    }
    return <div className="nav">
        <h1>Movie buzz</h1>
        <input type="text" id='myInput' placeholder='Search your favorite movie...' onChange={handleSearch} value={searchQuery}/>
    </div>

}