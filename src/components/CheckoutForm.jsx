import React, { useState } from 'react'
import at from "../icons/at.png";
import lock from "../icons/lock.png";
import google from "../icons/google.png";
import {useForm} from 'react-hook-form'

function CheckoutForm({logIn,setLogin}) {
    const [valueInput,setValueInput] = useState('')  
    const [clickInputEmail,setClickInputEmail] = useState(false)
    const [clickInputPassword,setClickInputPassword] = useState(false)

    const {
      register, 
      handleSubmit,
      reset,
      formState:{errors, isValid}  
    } = useForm({mode: 'onBlur'})

    const focusInput = () => {
        
    }
    const onSubmit = (data) => {
       setValueInput(data)
       setLogin(true)
       reset()
    }

  return (
    <>
    {
       !logIn ?
       <form onSubmit={handleSubmit(onSubmit)}>
    <label htmlFor="">
      
      <div onClick={() => setClickInputEmail(true)} className="input__container">
        <input {
            ...register('email', {
                required: '#Field is required!'
            })}
            type='email'
        />
        <img className='icon' src={at} alt="icon" />
            <p className={`input__plaseholder ${clickInputEmail && 'input_active'} `}>Email:</p>
            <div className='border_blue'></div>
      </div>
      {errors?.email && <p className='error_message'>{errors.email?.message}</p>}
      
      <div onClick={() => setClickInputPassword(true)} className="input__container">
        <input {
            ...register('password',{
                required: '#Field is required!',
                minLength: {value: 5, message: 'min 5 characters'},
                maxLength: {value: 10, message: 'min 10 characters'}
            })
        } 
        type="password" />
        <img className='icon' src={lock} alt="" />
        <p className={`input__plaseholder ${clickInputPassword && 'input_active'}`}>Password</p>
        <div className='border_blue'> </div>
      </div>
      {errors?.password && <p className='error_message'>{errors.password?.message}</p>}
   
    </label>
      <button disabled={!isValid} className="login">Login</button>
       <br />
      <button className="google">
        <img src={google} alt="" />
        Log in with Google
      </button>
      <div className="signup">
        <p>Don't have an account?</p>
        <a href="">Sign Up</a>
      </div>
  </form> 
    : 
    <p>Добро пожаловать!</p>

    }
    </>
  )
}

export default CheckoutForm