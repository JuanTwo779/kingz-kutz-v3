import React, { useState } from 'react'
import axios from 'axios'

import { SubHeading } from '../../components';

const Assistant = () => {
    
    const [file, setFile] = useState(null)
    const [message, setMessage] = useState("")

    const onFileChange = (event) => {
        setFile(event.target.files[0])
    }

    const apiUrl = process.env.REACT_APP_ASSISTANT_API_URL

    const submit = async () =>{
        //send file to backend using axios
        if (!file){
            setMessage("Please select a file first")
            return
        }

        const formData = new FormData()
        formData.append("file", file)

        try {
            const response = await axios.post(apiUrl + "/predict", formData, {
                headers: {
                    "Content-Type":"multipart/form-data",
                },
            })
            
            if(response.data.success){
                setMessage(response.data.success);
            } else if (response.data.error) {
                setMessage(response.data.error);
            }
            console.log(response)
        } catch (error) {
            if(error.response){
                setMessage(error.response.data.message)
            } else if (error.request) {
                setMessage("No response from server. Please try again.");
            } else {
                setMessage("Unexpected error occurred. Please try again.");
            }
            console.error(error)
        }
    }

    return (
        
        <div className="app__sservices d-flex flex__center align-items-center text-center section__padding" id='assistant'>
            <SubHeading title="AI Assistant" />
            <h1 className="headtext__cormorant mb-4">Haircut Classification</h1>
            <p className='p__opensans'>Unsure how to describe your desired haircut? Simply upload a photo, and we’ll identify it for you.</p>
            <p className='p__opensans text-secondary'>Note: AI predictions are not always perfect. We recommend doing additional research to ensure the best results.</p>
            <div className='pt-5'>
                <input type="file" className="form-control mb-5" onChange={onFileChange} />
                <button className="custom__button" style={{ textDecoration: 'none' }} onClick={submit} >Submit</button>
                <div>
                    {message && <p className="p__opensans mt-4">{message}</p>}
                </div>
            </div>
        </div>
    )
}

export default Assistant