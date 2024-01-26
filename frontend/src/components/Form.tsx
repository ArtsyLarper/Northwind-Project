import React, { useState } from 'react';
import axios from 'axios';

import "../styles/Form.css"

interface FormsProps{
    questionNum: number;
    formType: String;
}

export default function Form(props: FormsProps) {
    //State to store the input value
    const [inputObject, setInputObject] = useState({
        questionNum: props.questionNum,
        inputString: ''
    });

    //handler funciton to update state when input changes
    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newInput = event.target.value; //captures forms input in an event

        setInputObject({...inputObject, inputString: newInput}); //spread operator to help update the object
    };

    //send post request once save button using async/await function
    const handlePostRequest = async () => {
        try{ //axios.post(api endpoint, data, headers)
            const response = await axios.post('https://dotnet/endpoint', inputObject, {
                headers:{ //metadata for server
                    'Content-Type': 'applicaiton/json'
                }
            });

            console.log('Resoponse data: ', response.data);
        } catch(error: any){ //post request error handling
            console.error('Error making Post request:', error.message)
        }
    };

  return (
    <>
        <form>
            <label>{props.formType} {props.questionNum>0?props.questionNum:""}</label>
            <textarea
            value={inputObject.inputString} //original state
            onChange={handleInputChange} //once forms changes, handle the new input
            placeholder = "type here"
            rows = {3}
            />
            <button type="button" onClick={handlePostRequest}>Save</button>
        </form>
    </>
  )
}

//added a comment
//added comment 2