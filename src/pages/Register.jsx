import { RiLock2Line, RiMailLine, RiPhoneLine, RiUser3Line } from '@remixicon/react'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Register = () => {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [isValid, setIsValid] = useState(false);


    const navigate = useNavigate();

    const checkfield = () => {
        if(name === ''){setIsValid(false)} else {setIsValid(true)}
        if(email === ''){setIsValid(false)} else {setIsValid(true)}
        if(password === ''){setIsValid(false)} else {setIsValid(true)}
        if(phone === ''){setIsValid(false)} else {setIsValid(true)}
    }


    const handleRegistration = (e) => {
        checkfield();
        e.preventDefault();

        const newUser = {name, email, password, phone};

        registerUser(newUser);

    }

    const registerUser = async (newUser) => {
        try {
            const res = await fetch(`http://localhost:4000/users/`, {
                method: 'POST',
                headers: {'Content-Type': 'application-json'},
                body: JSON.stringify(newUser),
            });
            if(res){
                alert('New user account was successful');
                return navigate(`/home`)
            }
        } catch (error) {
           console.log ('error accured while creating user', error) 
        }

        finally{
            setIsValid(false);
            setName('');
            setEmail('');
            setPassword('');
            setPhone('');
        }
    }


    console.log(name)
    
  return (
    <main className='bg-accent/35 p-3 h-screen flex items-center'>
      <form className='login-form !h-[85%]' onSubmit={handleRegistration}>
        <div className="text-2xl font-normal tracking-wider mb-11 flex flex-col items-center gap-1">
            <span className='capitalize'>Sign Up</span>
            <div className="border-t-[3px] border-orange-400 w-[7rem]"></div>
        </div>

        <div className="w-full px-3 sm:px-3 md:px-8 lg:px-8 mb-3">
            <div className="input-div">
                <label htmlFor="name" className='label'>
                    <RiUser3Line size={15} />
                    <span>Name</span>
                </label>
                <input type="text" id='name' placeholder='Name' className='input-field' value={name} onChange={(e) => setName(e.target.value)} onKeyUp={checkfield}/>
                
                
            </div>

        </div>

        <div className="w-full px-3 sm:px-3 md:px-8 lg:px-8 mb-3">
            <div className="input-div">
                <label htmlFor="email" className='label'>
                    <RiMailLine size={15} />
                    <span>Email</span>
                </label>
                <input type="text" id='email' placeholder='Email' className='input-field'  value={email} onChange={(e) => setEmail(e.target.value)} />
                
            </div>
        </div>

        <div className="w-full px-3 sm:px-3 md:px-8 lg:px-8 mb-3">
            <div className="input-div">
                <label htmlFor="password" className='label'>
                    <RiLock2Line size={15} />
                    <span>Password</span>
                </label>
                <input type="password" id='password' placeholder='******' className='input-field'  value={password} onChange={(e) => setPassword(e.target.value)} />
                
            </div>
        </div>

        <div className="w-full px-3 sm:px-3 md:px-8 lg:px-8 mb-3">
            <div className="input-div">
                <label htmlFor="phone" className='label'>
                    <RiPhoneLine size={15} />
                    <span>Phone</span>
                </label>
                <input type="text" id='phone' placeholder='Mobile phone' className='input-field'  value={phone} onChange={(e) => setPhone(e.target.value)} />
                
            </div>
        </div>
        <div className="flex justify-between w-full px-3 sm:px-3 md:px-8 lg:px-8 mb-3 ">
            <button className={`btn-create !w-fit ${!isValid ? 'disabled:opacity-60 disabled:cursor-not-allowed' : ''}`} disabled={!isValid} onMouseOver={checkfield} >
                Register
            </button>
            <NavLink to={`/`} className='btn-register !w-fit'>Login</NavLink>
        </div>

        
      </form>
    </main>
  )
}

export default Register
