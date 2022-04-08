import { useState } from "react";
import FormCallUs from "./FormCallUs";
import FormSuccess from './FormSuccess';
import "./Form.css";


const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    function submitForm() {
        setIsSubmitted(true);
    }
    return (
    <div>
        {!isSubmitted ? <FormCallUs submitForm = 
            {submitForm} /> : <FormSuccess />}
    </div>
  );
};

export default Form;