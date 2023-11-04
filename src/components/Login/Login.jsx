import { useState } from 'react'
import twitterLogo from '../../assets/twitter-logo.svg'
import { Link } from 'react-router-dom'
import firebase from '../../firebase'
import {EyeIcon} from '@heroicons/react/24/outline'
import {EyeSlashIcon} from '@heroicons/react/24/outline'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    function showPasswordFun() {
        setShowPassword(!showPassword)
    }

    async function loginUser(e) {
        e.preventDefault()

        if (!email && !password) {
            setError("Fill in the forms");
        }

        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);

            window.location = '/twitter'
            setError('')
          } catch (error) {
            if (error.code === "auth/user-not-found") {
              setError("User not found");
            } else if (error.code === "auth/wrong-password") {
              setError("Password is incorrect");
            }
          }
      
          setEmail('');
          setPassword('');
    }

  return (
    <div className='absolute mobile:w-max mobile:px-5 fold:w-min top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]'>
        <img className='mb-9' src={twitterLogo} alt="Twitter Logo" />
        <h2 className="font-black text-[42px]">Log in to Twitter</h2>
        <form className='mt-9' action="https://echo.hrmlacademy.ru/" method='POST'>
            <div className='flex flex-col gap-5 relative'>
                <input className='rounded-md border border-solid border-[#00000033] p-5' type="email" name='email' id='phoneOrEmail' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email address' />
                <input className='rounded-md border border-solid border-[#00000033] p-5' type={showPassword ? 'text' : 'password'} name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                <div className='absolute top-[110px] right-5 cursor-pointer'>
                    {
                        showPassword ? <EyeSlashIcon className='h-5 text-gray-500' onClick={showPasswordFun} /> : <EyeIcon className='h-5 text-gray-500' onClick={showPasswordFun} />
                    }
                </div>
                <div className='font-medium text-[18px] text-center text-[#900] mt-[20px]'>{error}</div>
            </div>
            <button onClick={loginUser} type='submit' className="text-white w-full text-lg py-4 font-bold mt-5 bg-blue rounded-full hover:opacity-60">Log In</button>
        </form>
        <div className="flex justify-between mt-[40px] text-blue">
            <Link className='h-[25px] hover:border-solid hover:border-b hover:border-[#1D9BF0]'>Forgot password?</Link>
            <Link className='h-[25px] hover:border-solid hover:border-b hover:border-[#1D9BF0]' to='/register'>Sign up to Twitter</Link>
        </div>
    </div>
  )
}

export default Login