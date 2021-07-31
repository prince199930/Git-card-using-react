import logo from './logo.svg';
import './App.css';
import GitCardList from './components/GitCardList/GitCardList';
import { useState } from 'react';

function App() {
 const [data, setData] = useState([])
  return (
   <div className="App">
  
   <GitCardList
   data = {data}
   add ={(d)=>setData([...data, d])}/>        
   </div>
  );
}

export default App;


// https://api.github.com/users/USERNAME



// {
//   "login": "sahil199926",
//   "id": 60871687,
//   "node_id": "MDQ6VXNlcjYwODcxNjg3",
//   "avatar_url": "https://avatars.githubusercontent.com/u/60871687?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/sahil199926",
//   "html_url": "https://github.com/sahil199926",
//   "followers_url": "https://api.github.com/users/sahil199926/followers",
//   "following_url": "https://api.github.com/users/sahil199926/following{/other_user}",
//   "gists_url": "https://api.github.com/users/sahil199926/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/sahil199926/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/sahil199926/subscriptions",
//   "organizations_url": "https://api.github.com/users/sahil199926/orgs",
//   "repos_url": "https://api.github.com/users/sahil199926/repos",
//   "events_url": "https://api.github.com/users/sahil199926/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/sahil199926/received_events",
//   "type": "User",
//   "site_admin": false,
//   "name": "sahil jaryal",
//   "company": null,
//   "blog": "",
//   "location": "new Delhi",
//   "email": null,
//   "hireable": null,
//   "bio": null,
//   "twitter_username": null,
//   "public_repos": 31,
//   "public_gists": 2,
//   "followers": 6,
//   "following": 2,
//   "created_at": "2020-02-10T07:54:31Z",
//   "updated_at": "2021-04-15T18:49:56Z"
// }