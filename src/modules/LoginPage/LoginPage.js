import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../common/Logo";
import image from "../../assets/Illustration Export.png";
import googleLogo from "../../assets/grommet-icons_google.png";
import { auth } from "../../Firebase";
import {
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";
import './loginpage.scss'

export default function LoginPage() {
    const navigate = useNavigate();
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                navigate("/dashboard");
            }
        });
    }, []);
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((res) => {
                console.log("login success ")
            })
            .catch((err) => console.log(err));
    };
    return (
        <div className="login-page flex-row">
            <div className="box flex-column">
                <Logo />
                <p className="title title-todo">LOGIN</p>
                <p className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet at
                    eleifend feugiat vitae faucibus nibh dolor dui. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Aliquet at eleifend feugiat vitae
                    faucibus nibh dolor dui.
                </p>

                <button className="login-btn" onClick={signInWithGoogle}>
                    <img src={googleLogo} className="google-logo" />
                    <span> Sign in using google</span>
                </button>
            </div>
            <div className="box img-box">
                <img src={image} alt="" />
            </div>
        </div>
    );
}
