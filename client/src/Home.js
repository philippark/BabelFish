import React, { useState } from 'react';

const Home = () => {
    const [messages, setMessages] = useState([]);

    const [username, setUsername] = useState("Hendrix");
    const [message, setMessage] = useState("");

    const submitHandle = () => {
        if (message === ""){
            return;
        }
        setMessages(
            [
                ...messages,
                {person: username, message: message}
            ]
        );

        setMessage("");
    }

    return (  
        <div className = "Home">
            <h2>Babel Fish</h2>
            <div className = "text-area">  
                {messages.map((data)=>{
                    return(
                        <p>{data.person}: {data.message}</p>
                    );
                })}
            </div>
            
            <input type = "text" value = {message} onChange={(e)=>{setMessage(e.target.value)}}></input>
            <button onClick={submitHandle}>Submit</button>
            

            <select 
                value = {username}
                onChange={e=>setUsername(e.target.value)}
            >
                <option value = "Hendrix">Hendrix</option>
                <option value = "Joe">Joe</option>
            </select>

            <select>
                <option value = "Spanish">Spanish</option>
                <option value = "Hindi">Hindi</option>
                <option value = "Russian">Russian</option>
            </select>
        </div>
    );
}
 
export default Home;