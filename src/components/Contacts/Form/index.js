import React, { useState } from 'react';

const Form = () => {
    const [form, setForm] = useState({ fullName: '', phoneNumber: '' })
    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
function onSubmit(){
    console.log("Onclick edildi")
}
    return (
        <div>
            <div>
                <input name='fullName' placeholder='Full Name' onChange={onChangeInput} />
            </div>
            <div>
                <input name='phoneNumber' placeholder='Phone Number' onChange={onChangeInput} />

            </div>
            <div>
                <button onClick={onSubmit} >Add</button>
            </div>

            <h1>Isim : {form.fullName} <br /> soyisim: {form.phoneNumber}</h1>
        </div>
    );
}

export default Form;
