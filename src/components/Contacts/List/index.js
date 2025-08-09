import React from 'react';

const List = ({contacts}) => {
    return (
        <div>
          <ul>
            {contacts.map((contact, i)=><li key={i}>{contact.fullName} {contact.phoneNumber}</li>)}
          </ul>
        </div>
    );
}
 
export default List;
