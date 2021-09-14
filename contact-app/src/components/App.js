import React, { useState, useEffect } from "react";
import './App.css';
import Header from "./header";
import Addcontact from "./addcontact";
import Contactlist from "./contactlist";


function App() {
  const LOCAL_STORAGE_KEY ="contacts";
  const[contacts, setcontacts] = useState([]);
  
  const addcontactHandler = (contact) => {
    console.log(contact);
    setcontacts([...contacts,contact]);
  };
  useEffect( () => { 
     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts] );



    return(
    <div className = "ui container">
    <Header />
    <Addcontact addcontactHandler = {addcontactHandler}/>
    <Contactlist contacts ={contacts}/>


    </div>
  );
}

export default App;

