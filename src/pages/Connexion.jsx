import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'

import { userLogin } from "../utils/authAction";

function Connexion() {
    const {loading, success, error} = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()

    useEffect(() => {
        if (success) navigate('/profil')
      }, [navigate, success])

    const submitForm = (data) => {
        dispatch(userLogin(data))
    };

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                {error && <p>Les informations sont invalides</p>}
                <form onSubmit={handleSubmit(submitForm)}>
                    <div className="input-wrapper">
                        <label htmlFor="email">Username</label>
                        <input type="email" id="email" {...register('email')} required />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" {...register('password')} required />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" {...register('remember-me')} />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button" disabled={loading}>Sign In</button>
                </form>
            </section>
        </main>
    );
}
export default Connexion