import React, { useEffect, useState } from 'react';
const initialFormValues ={fullName:'', phoneNumber:''}
const Form = ({ addContact, contacts }) => {
    const [form, setForm] = useState(initialFormValues)
    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    useEffect(()=>{setForm(initialFormValues)}, [contacts])
    function onSubmit(e) {
        e.preventDefault(); // prevents the refreshing of the Page

        if (form.fullName === '' || form.phoneNumber === '') {
            return false; //bu olay asagidaki console.log bölümüne gecisi engeller
        }

        addContact([...contacts, form])



    }
    return (
        <form onSubmit={onSubmit}>
            <div>
                <input value={form.fullName} name='fullName' placeholder='Full Name' onChange={onChangeInput} />
            </div>
            <div>
                <input value={form.phoneNumber} name='phoneNumber' placeholder='Phone Number' onChange={onChangeInput} />

            </div>
            <div>
                <button >Add</button>
            </div>

            <h1>Isim : {form.fullName} <br /> soyisim: {form.phoneNumber}</h1>
        </form>
    );
}

export default Form;
