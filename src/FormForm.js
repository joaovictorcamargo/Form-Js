import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';
import TextEditor from './Richtext';

const FormForm = ({submitForm}) => {

    const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validate);
    return (

        <div className="form-content-right">
           
            <form className='form' onSubmit={handleSubmit}>
                <h1>Vamos cadastrar sua empresa...</h1>
                <div className='form-inputs'>
                    <label htmlFor='Name'
                     className='form-label'>
                       Nome
                    </label>
                    <input 
                          id="Name"
                          type="text"
                          name="Name"
                          className="form-input"
                          placeholder='Digite o nome da Empresa'
                          value={values.Name}
                          onChange={handleChange}
                          />
                          {errors.Name && <p>{errors.Name}</p>}
                </div>

                <div className='form-inputs'>
                    <label htmlFor='email'
                     className='form-label'>
                        Email
                    </label>
                    <input 
                          id="email"
                          type="email"
                          name="email"
                          className="form-input"
                          placeholder='Digite o email'
                          value={values.email}
                          onChange={handleChange}
                          />
                          {errors.email && <p>{errors.email}</p>}
                </div>

                <div className='form-inputs'>
                    <label htmlFor='CNPJ'
                     className='form-label'>
                        CNPJ
                    </label>
                    <input 
                          id="CNPJ"
                          type="password"
                          name="CNPJ"
                          className="form-input"
                          placeholder='Digite o CNPJ'
                          value={values.CNPJ}
                          onChange={handleChange}
                          />
                          {errors.CNPJ && <p>{errors.CNPJ}</p>}
                </div>

                <div className='form-inputs'>
                    <label htmlFor='CNPJ2'
                     className='form-label'>
                        CNPJ
                    </label>
                    <input 
                          id="CNPJ2"
                          type="password"
                          name="CNPJ2"
                          className="form-input"
                          placeholder='Comfirme o CNPJ'
                          value={values.CNPJ2}
                          onChange={handleChange}
                          />
                          {errors.CNPJ2 && <p>{errors.CNPJ2}</p>}
                </div>
 
                
               <button className='form-input-btn' 
               type='submit'
               >
                   Cadastrar
               </button>
               <span className='form-input-login'>
                   Já possui uma empresa cadastrada e gostaria de editá-la? <a
                   href="#">Clique aqui</a>
               </span>
            </form>
        
        </div>
       
    )
}

export default FormForm
