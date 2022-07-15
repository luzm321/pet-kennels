import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";


export const Register = () => {

    const [registerUser, setRegisterUser] = useState({ username: "", password: "" });
    const [conflictDialog, setConflictDialog] = useState(false);

    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const newUser = { ...registerUser }
        newUser[event.target.id] = event.target.value
        setRegisterUser(newUser)
    };

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?username=${registerUser.username}`)
            .then(res => res.json())
            .then(user => !!user.length)
    };

    const handleRegister = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            username: registerUser.username,
                            password: registerUser.password
                        })
                    })
                        .then(res => res.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                sessionStorage.setItem("kennel_user", createdUser.id)
                                navigate("/")
                            }
                        })
                }
                else {
                    setConflictDialog(true)
                };
            });

    };

    return (
        <div className="loginDiv">
            <main className="container--register">

                <dialog className="dialog dialog--password" open={conflictDialog}>
                    <div>Account with that username already exists</div>
                    <button className="button--close" onClick={e => setConflictDialog(false)}>Close</button>
                </dialog>

                <form className="form--login" onSubmit={handleRegister}>
                    <h1 className="h3 mb-3 font-weight-normal registerHeader">Please Register for Pet Kennels!</h1>
                    {/* <img className="avatar" src="" alt=""></img> */}
                    <fieldset className="fieldDiv">
                        <label className="reg_label"  htmlFor="inputUsername"> Username: </label>
                        <input type="username" name="username" id="username" className="reg_input" placeholder="Username..." required value={registerUser.username} onChange={handleInputChange} />
                    </fieldset>
                    <fieldset className="fieldDiv">
                        <label className="reg_label"  htmlFor="inputPassword"> Password: </label>
                        <input type="password" name="password" id="password" className="reg_input" placeholder="Password..." required value={registerUser.password} onChange={handleInputChange} />
                    </fieldset>
                    <fieldset>
                        <button className="registerBut" type="submit"> Sign In </button>
                    </fieldset>
                </form>
            </main>
        </div>
    );
};