import React, { useState } from 'react';


const List = ({ contacts }) => {
  const [filterText, setFilterText] = useState('');
  const filtered = contacts.filter((item) => 
    Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    )
  );

  return (
    <div>
      <input
        placeholder='Filter Contact'
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className='list'>
        {filtered.map((contact, i) => (
          <li key={i}>{contact.fullname} {contact.phone_number}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;