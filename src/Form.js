import React, {useState} from 'react';
import FormForm from './FormForm';
import FormSuccess from './FormSuccess';
import './Form.css';
import TextEditor from './Richtext';
import ImagePicker from './ImagePicker'

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

   

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>

        <div className='form-container'>
          <span className='close-btn'>x</span>  
          <div className='form-content-left'>
            <div className='rich-text'>
                <h3 className='description-title'>Vamos fazer uma breve descrição da sua empresa...</h3>
                <TextEditor/>

                <ImagePicker/>
            </div>
            </div>
            {!isSubmitted ? <FormForm submitForm=
            {submitForm} /> : <FormSuccess/>}
        </div>   
        </>
    );
};

export default Form
