import { useEffect, useState, useRef } from "react";
import axios from 'axios';
import "./index.css"
import Card from "./card";
import './indexx.css'
import Input from "./input";


const BoxSlides = () => {
    const [users, setUsers] = useState([]);
    const [usersSearch, setUsersSearch] = useState([]);
    const inputF = useRef(null)


    async function dataApi() {
        const response = await axios.get("https://randomuser.me/api/?results=10");
        setUsers(response.data.results);
        setUsersSearch(response.data.results)
        console.log(response.data.results);
    }

    useEffect(() => {
        dataApi();
        inputF.current.focus()
    }, []);
    return (
        <div>
          <Input onInputChange={setUsersSearch} users={users} inputF={inputF} />
          {usersSearch.map(user => {
            const userName = `${user.name.title} ${user.name.first} ${user.name.last}`;
            const userAvatar = user.picture.medium
            return <Card key={user.login.uuid} userName={userName} userAvatar={userAvatar} />;
          })}
        </div>
      );
}

export default BoxSlides;

