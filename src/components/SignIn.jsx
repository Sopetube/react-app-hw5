import style from './signin.module.css';
import { useState } from 'react';
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";

const emailRegexp = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
const pwRegexp = new RegExp('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$');

const SignIn = () => {
    const [data, setData] = useState({email: '', password: '',});

    function changeHandler({target}){
        const {name, value} = target;
        const regExp = name === 'email' ? emailRegexp : pwRegexp;
        const isValid = regExp.test(value);

        if(isValid){
            target.classList.add(style.success);
            target.classList.remove(style.error);
        } else {
            target.classList.add(style.error);
            target.classList.remove(style.success);

        }
        if(!value){
            target.classList.remove(style.error);
        }
    setData({...data, [name]: value});        
    }

    return(
            <div className={style.loginbox}>
                <div className={style.head}>
                    <img src="https://static.vecteezy.com/system/resources/previews/015/117/333/original/padlock-icon-with-glowing-neon-effect-security-lock-sign-secure-protection-symbol-png.png" alt="lock" width="30px"/>
                    <h2>Sign In</h2>
                </div>
                <div className={style.logininfo}>
                    <input
                    name='email'
                    type="email"
                    placeholder="Email Address *"
                    value={data.email}
                    onChange={changeHandler}/>
                    
                    <input
                    name='password'
                    type="password"
                    placeholder="Password *"
                    value={data.password}
                    onChange={changeHandler}/>
                </div>
                <div className={style.remeber}>
                    <input
                    type="checkbox"/>
                        <span className={style.rememberCheckbox}>Remember me</span>
                </div>
                <button>Sign in</button>
                <div className={style.ctaline}>
                    <Link to='/' className={style.forgotpw}>Forgot password?</Link>
                    <Link to='/signup' className={style.signupbtn}>Don't have an account? Sign Up</Link>
                </div>
                <span className={style.copyright}>Copyright © Your Website 2023.</span>
            </div>
            
    )
}

export default SignIn