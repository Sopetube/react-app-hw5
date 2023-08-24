import { useState } from 'react';
import { Link } from "react-router-dom";
import style from './signup.module.css';

const emailRegexp = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
const pwRegexp = new RegExp('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$');
const nameRegexp = new RegExp('([A-Z]|[a-z]){3,}', 'i');

const SignUp = () => {
    const [data, setData] = useState({email: '', password: '', name:'', lastname:''});
    function validation(name, value){
        let regexp = null;
    switch(name){
        case 'email':
            regexp = emailRegexp;
            break;
        case 'password':
            regexp = pwRegexp;
            break;
        case 'name':
            regexp = nameRegexp;
            break;
        default:
            throw new Error('Erororroro')
            }
            const isValid = regexp.test(value);
            return isValid
    }
    function changeHandler({target}){
        const {name, value} = target;
        const isValid = validation(name, value);

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
        <>
            <div className={style.logininfo}>
                <div className={style.head}>
                    <img src="https://static.vecteezy.com/system/resources/previews/015/117/333/original/padlock-icon-with-glowing-neon-effect-security-lock-sign-secure-protection-symbol-png.png" alt="lock" width="30px"/>
                    <span>Sign Up</span>
                </div>
                <div className={style.namebox}>
                    <input
                        type="text"
                        name="name"
                        placeholder="First Name"
                        className={style.name}
                        value={data.name}
                        onChange={changeHandler}/>
                    <input
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                        className={style.lastname}
                        value={data.lastname}
                        onChange={changeHandler}/>
                </div>
                <div className={style.credentials}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={data.email}
                    onChange={changeHandler}/>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={data.password}
                    onChange={changeHandler}/>
                </div>
                <div className={style.promo}>
                    <input
                    type="checkbox" />
                    <span>I want to receive inspiration, marketing promotions and updates via email</span>
                </div>
                <button>Sign up</button>
                <div className={style.ctaline}>
                    <Link to='/signin' >Already have an account? Sign in</Link>
                </div>
                    <span className={style.copyright}>Copyright © Your Website 2023.</span>
        </div>
        </>
    )
}

export default SignUp