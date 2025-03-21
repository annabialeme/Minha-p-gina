"use client"

import styles from "../../styles/Signup.module.css";
import {useState} from "react";

export default function Signup() {
    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <img src=""></img>
                <h1>Sign Up</h1>
                <p>Não tem uma conta? <a href="/sign">Faça Log In</a></p>
                <div className={styles.email}>
                    <p>Email:</p>
                    <input type="texto" id="taskInput" placeholder="Digite aqui seu e-mail"></input>
                </div>
                <div className={styles.password}>
                    <p>Senha:</p>
                    <input type="texto" id="taskInput" placeholder="Crie sua senha"></input>
                </div>
                <div className={styles.logincontainer}>
                    <button className={styles.button}>Sign Up</button>
                    <div className={styles.information}><a href="/password">Esqueceu sua senha?</a></div>
                </div>
            </div>
        </div>
    )
}