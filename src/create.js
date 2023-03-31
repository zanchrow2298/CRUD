import React, {useState} from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default function Create(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName]= useState('');
    const [birthdate, setBirthdate] = useState('');
    const [address, setAddress] = useState('');

    const postData = () => {
        console.log(firstName);
        console.log(lastName);
        console.log(birthdate);
        console.log(address)
    }
    

    return (<div>
        <Form className="create-form">
            <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>BirthDate</label>
                <input placeholder='Last Name' onChange={(e) => setBirthdate(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Address</label>
                <input placeholder='Address' onChange={(e) => setAddress(e.target.value)}/>
            </Form.Field>
            <Button onClick={postData} type='submit'>Submit</Button>
        </Form>
    </div>
    )
    

}

