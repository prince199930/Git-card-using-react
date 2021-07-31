import React, { useState } from 'react'
import GitCard from '../GitCard/GitCard'
import axios from "axios"

function GitCardList({ data, add }) {
    const [searchInput, setSearchInput] = useState("")
    const submit = async (e) => {
        e.preventDefault()
        await axios.get(`https://api.github.com/users/${searchInput}`).then((d) => add(d))

        setSearchInput("")
    }
    return (
        <div style={{boxShadow:"0 2px 2px #ccc"}}>
            <div style={{marginLeft:"auto", marginRight:"auto", width:"262px", marginTop:"10px", marginBottom:"10px"}}>
                <form onSubmit={(e) => submit(e)}>
                    <input  style={{width:"262px", padding:'7px', borderRadius:'11px', textDecoration:"none", outline:"none", boxShadow:"0 2px 2px #ccc"}} type="text" placeholder="Enter GitHub UserId...." onChange={(e) => setSearchInput(e.target.value)} value={searchInput} />
                </form>
            </div>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                <div>
                    {data.map((d) => <div><GitCard d={d} /></div>)}
                </div>
            </div>
        </div>
    )
}

export default GitCardList
