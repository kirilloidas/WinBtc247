import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {User} from "../../api/User";

class Restore extends Component {
    constructor(props) {
        super(props);
        this.state = {restore: true, userEmail: '', err: ''};
        this.toggleRestore = this.toggleRestore.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
        this.setErr = this.setErr.bind(this);
    }

    toggleRestore(e) {
        this.setState(state => ({...state, ...{restore: false}}));
    }

    setErr(string) {
        this.setState(state => ({...state, ...{err: string}}));
    }

    inputHandler(e) {
        this.setState(state => ({...state, ...{userEmail: e.target.value}}));
        this.setErr('');
    }

    render() {
        const {restore, userEmail, err} = this.state;
        const {history} = this.props;
        if (restore) {
            return (
                <div className="round-dark restore auth col-3">
                    <span onClick={() => history.push('/login')} className="restore-arrow">&larr;</span>
                    <form onSubmit={e => {
                        e.preventDefault();
                        User.forgotPassword({email: userEmail})
                            .then(res => {
                                if (res.data.status === "success") {
                                    this.toggleRestore(e);
                                } else {
                                    console.log(123)
                                    this.setErr('Wrong email');
                                }
                            })
                            .catch(error => this.setErr('Wrong email'));
                    }
                    }>
                        <div>
                            <h2>Forgot password?</h2>
                            <label htmlFor="phone">E-mail</label>
                            <input onInput={this.inputHandler} placeholder="lucky@mail.com" id="phone" name="phone"
                                   type="email" required/>
                        </div>
                        <span style={{display: err ? 'block' : 'none'}} className="error red">{err}</span>
                        <button>Reset password</button>
                    </form>
                </div>
            );
        } else {
            return (
                <div className="round-dark restore auth col-3">
                    <form onSubmit={e => e.preventDefault()}>
                        <h2>Email has been sent</h2>
                        <p style={{fontWeight: 300, opacity: "0.8"}}>We have sent a secret code on your mail <span style={{textDecoration: "underline", fontWeight: 400, opacity: "1"}}>{this.state.userEmail}</span>. Please, check your email and
                            copy the code</p>
                        <Link className="ok" to="/reset">OK</Link>
                    </form>
                </div>
            );
        }
    }

}

export default Restore;
