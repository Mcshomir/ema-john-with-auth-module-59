import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './SignIn.css'

const SignIn = () => {
    const { signIn } = useContext(AuthContext);
    const nevigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const signInClick = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                nevigate(from, { replace: true });
            })
            .catch(error => {
                console.error("error", error)
            })

    }
    return (
        <div>
            <div className="form-container">
                <h1 className='center'>logIn</h1>
                <form onSubmit={signInClick} className='form-details'>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" required />
                    </div>
                    <div className="form-control">
                        <input className='submit' type="submit" value="SignIn" />
                        <p className='pra-link'><small>New to Ema-John ? <Link to='/register'>Plz Register !</Link></small></p>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default SignIn;