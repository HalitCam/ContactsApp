import React, {useState,useEffect} from 'react';
import "./styles.css"

import List from './List'
import Form from './Form'

const Contacts = () => {
    const [contacts, setContacts]= useState([
        {
            fullname:'Mehmet',
            phone_number:'123123'
        },{
            fullname:'Halit',
            phone_number:'557895'
        },{
            fullname:'Alev',
            phone_number:'623489'
        }
    ]);

    useEffect(()=>{
        console.log(contacts)
    }, [contacts])

    return (
        <div id='container'>
            <List contacts={contacts}/>
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    );
}

export default Contacts;
