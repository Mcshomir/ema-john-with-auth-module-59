import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './Register.css'

const Register = () => {
    const [error, setError] = useState(null)
    const { createUser, } = useContext(AuthContext);
    const handleClick = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);
        if (password !== confirm) {
            setError("password not match !");
            return;

        }
        if (password.length < 6) {
            setError("password length is small !");
            return;
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
            })
            .catch(error => {
                console.error("error", error)
                form.reset()
            })
    }

    return (
        <div>
            <div className="form-container">
                <h1 className='center'>Sign Up</h1>
                <form onSubmit={handleClick} className='form-details'>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="confirm">Confirm Password</label>
                        <input type="password" name="confirm" required />
                    </div>
                    <div className="form-control">
                        <input className='submit' type="submit" value="SignUp" />

                        <p className='pra-link'><small>Have an Account? <Link to='/signin'>Please Login !</Link></small></p>
                        <p><small>{error}</small></p>
                    </div>


                </form>

            </div>
        </div>
    );
};

export default Register;