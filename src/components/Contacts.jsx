import React, { useState } from 'react';
import { v4 } from 'uuid';

import ContactsList from './ContactsList';
import styles from './Contacts.module.css';

function Contacts() {
 const [contacts , setContacts] = useState([]);
 const [alert , setAlert] = useState("");
 const [contact , setContact]= useState({
  id:"",
  name:"",
  lastName:"",
  email:"",
  phone:"",

 });

  const changeHandler = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  console.log({name , value});

  setContact((contact)=>({ ... contact , [name]: value}));
 };

 const addHandler = () =>{
  if (
   !contact.name ||
   !contact.lastName ||
   !contact.email ||
   !contact.phone
  ){
   setAlert ("Please enter valid data!")
   return;
  }
 setAlert ("");
 const newContact={...contact , id:v4()}
  setContacts((contacts) => [ ...contacts , newContact]);
  setContact({
  name:"",
  lastName:"",
  email:"",
  phone:"",

 });
 };

const deleteHandler = (id) => {
  const newContacts = contacts.filter((contact) =>contact.id !== id);
  setContacts(newContacts);
}

  return (
    <div className={styles.container}>
      <div className={styles.form}>
       <input type="text" placeholder='Name' name = "name" value={contact.name} onChange={changeHandler}/>
       <input type="text" placeholder='Last Name' name = "lastName" value={contact.lastName} onChange={changeHandler}/>
       <input type="email" placeholder='Email' name = "email" value={contact.email} onChange={changeHandler}/>
       <input type="number" placeholder='Phone' name = "phone" value={contact.phone} onChange={changeHandler}/>
       <button onClick={addHandler}>Add Contact</button>
      </div>
      <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
      <ContactsList contacts={contacts} deleteHandler={deleteHandler}/>
    </div>
  )
}

export default Contacts
