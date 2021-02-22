import React, {useState} from 'react';
import {User} from "../../api/User";
import {Link} from "react-router-dom";

const Reset = ({history}) => {
    const [success, setSuccess] = useState(false);
    const [password, setPassword] = useState(true)
    const [passwordConfirm, setPasswordConfirm] = useState(true)
    const [secret, setSecret] = useState('');
    const [pass, setPass] = useState('');
    const [confpass, setConfpass] = useState('');
    const [err, setErr] = useState('');
    if (!success) {
        return (
            <div className="round-dark auth">
              <span onClick={() => {
                  setSecret('');
                  history.push("/restore")
              }} className="back">&larr;</span>
                <h2>Enter secret code</h2>
                <form onSubmit={e => {
                    e.preventDefault();
                    if (confpass.length < 8 || confpass.length < 8) {
                        setErr('Password length must be 8 characters')
                    } else {
                        User.updatePassword({secret, pass, confpass})
                            .then(res => {
                                if (res.data.status === "success") {
                                    setSuccess(true);
                                } else {
                                    setErr("Wrong secret code!")
                                }
                            })
                            .catch(error => setErr("Expired or missed secret code"))
                    }

                }}>
                    <div className="">
                        <input value={secret} onInput={e => setSecret(e.target.value)} id="secret" name="secret"
                               type="text"
                               required/>
                    </div>

                    <div className={password ? 'pass' : 'text'}>
                        <span onClick={() => setPassword(!password)} className="eye"/>
                        <label htmlFor="password">New password</label>
                        <input min='8' onChange={e => {
                            setPass(e.target.value);
                            setErr('');
                        }}
                               value={pass}
                               id="password" name="password" type={password ? 'password' : 'text'} required/>
                    </div>
                    <div className={passwordConfirm ? 'pass' : 'text'}>
                        <span onClick={() => setPasswordConfirm(!passwordConfirm)} className="eye"/>
                        <label htmlFor="passwordConfirm">Repeat password</label>
                        <input min='8' onChange={e => {
                            setConfpass(e.target.value);
                            setErr('');
                        }}
                               value={confpass}
                               id="passwordConfirm" name="passwordConfirm"
                               type={passwordConfirm ? 'password' : 'text'}
                               required/>
                    </div>

                    <span style={{display: err ? 'block' : 'none'}} className="error red">{err}</span>
                    <button type="submit">RESET</button>
                </form>
            </div>
        );
    } else {
        return (
            <div className="round-dark auth">
                <h2>Password has been changed!</h2>
                <form>
                    <button><Link to="/login">OK</Link></button>
                </form>
            </div>
        )
    }
};

export default Reset;
