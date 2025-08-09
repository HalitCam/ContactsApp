import React from 'react';

const List = ({contacts}) => {
    return (
        <div>
          <ul>
            {contacts.map((contact)=><li>{contact.fullName} {contact.phoneNumber}</li>)}
          </ul>
        </div>
    );
}
 
export default List;
