import React from 'react'
import axios from "axios";

function GitCard({d}) {
    return (
        <div style={{border:"3px solid", width:"305px", fontSize:"17px", borderRadius:"13px", boxShadow:"0 8px 12px #ccc", marginBottom:"16px", marginTop:'16px'}}>
            <img style={{width:"305px", borderRadius:"12px"}} src={d.data.avatar_url} alt={d.data.name} />
            <p><b>Name : </b>{d.data.name}</p>
            <p><b>Followers : </b>{d.data.followers}</p>
            <p><b>Following : </b>{d.data.following}</p>
        </div>
    )
}

export default GitCard
