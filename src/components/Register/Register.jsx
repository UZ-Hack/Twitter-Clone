import { useState } from 'react'
import twitterLogo from '../../assets/twitter-logo.svg'
import { Link } from 'react-router-dom'
import firebase from "../../firebase";

const Register = () => {
    const [nameValue, setNameValue] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [passwordErr, setPasswordErr] = useState('')

    function nameFun(e) {
        setNameValue(e.target.value)
        console.log(nameValue);
    }

    function emailFun(e) {
        setEmail(e.target.value)
        console.log(email);
    }

    function passwordFun(e) {
        setPassword(e.target.value)
        console.log(password);
    }

    function confirmPasswordFun(e) {
        setConfirmPassword(e.target.value)
        console.log(confirmPassword);
    }

    async function createAccount(e) {
        e.preventDefault()

        if (!nameValue && !email && !password) {
            setError('Fill in the forms')
            return;
        }
        
        if (password !== confirmPassword) {
            setError('Passwords do NOT match')
            return;
        }


        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            localStorage.setItem("userName", JSON.stringify({ name: nameValue }));
            window.location = '/twitter'
        } catch (error) {
            console.error(error);
        }

        setNameValue('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setError('')
        setPasswordErr('')
    }

  return (
    <div className='absolute mobile:w-max mobile:px-5 fold:w-min top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]'>
        <img className='mb-1 mx-auto' src={twitterLogo} alt="Twitter Logo" />
        <h2 className="font-black text-[42px]">Create an account</h2>
        <form className='mt-5' action="https://echo.hrmlacademy.ru/" method='POST' onSubmit={createAccount}>
            <div className='flex flex-col gap-5'>
                <input className='rounded-md border border-solid border-[#00000033] p-5' type="text" name='name' id='name' value={nameValue} onChange={nameFun} placeholder='Name' />
                <input className='rounded-md border border-solid border-[#00000033] p-5' type="email" name="email" id="email" value={email} onChange={emailFun} placeholder='Email' />
                <input className='rounded-md border border-solid border-[#00000033] p-5' type="password" name="password" id="password" value={password} onChange={passwordFun} placeholder='Password must be at least 6 characters long' />
                <span className={`${passwordErr === '' ? 'hidden' : 'block'} text-red-600`}>{passwordErr}</span>
                <input className='rounded-md border border-solid border-[#00000033] p-5' type="password" name="confirm password" id="confirmPassword" value={confirmPassword} onChange={confirmPasswordFun} placeholder='Confirm Password' />
            </div>
            <div className='font-medium text-[18px] text-center text-[#900] mt-[20px]'>{error}</div>
            <button type='submit' className="text-white w-full text-lg py-4 font-bold mt-5 bg-blue rounded-full hover:opacity-60">Next</button>
        </form>
        <div className="flex justify-center gap-2 mt-[20px]">
            Do you have an account? <Link className='h-[25px] text-blue hover:border-solid hover:border-b hover:border-[#1D9BF0]' to='/login'>Login</Link>
        </div>
    </div>
  )
}

export default Register