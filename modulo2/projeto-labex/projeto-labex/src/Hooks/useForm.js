import React from "react"
import { useState } from "react"

const useForm = (inicialState) =>{
    const [form, setForm] = useState({name: "", age: "", applicationText: "", profession: "", country: "", trip: ""})
    const onChange = (event) =>{
        setForm({...form, [event.target.name]: event.target.value})
    }

    const cleanFields = () =>{
        setForm(inicialState)
    }

    return {form, onChange, cleanFields}
}

export default useForm;