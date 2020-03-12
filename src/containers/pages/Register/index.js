import React, { Component } from 'react';
import './Register.scss';
import Button from '../../../components/atoms/Button';
import { registerUserAPI } from '../../../config/redux/action';
import { connect } from 'react-redux'

class Register extends Component {
    state = {
        email: '',
        password: '',
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleRegisterSubmit = async () => {
        const { email, password } = this.state;
        console.log('data before send: ', email, password)
        const res = await this.props.registerAPI({ email, password }).catch(err => err)
        if (res) {
            this.setState({
                email: '',
                password: ''
            })
        }

    }


    render() {
        return (
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Register Page</p>
                    <input className="input" id="email" placeholder="Email" type="text" onChange={this.handleChangeText} value={this.state.email} />
                    <input className="input" id="password" placeholder="Password" type="password" onChange={this.handleChangeText} value={this.state.password} />
                    <Button onClick={this.handleRegisterSubmit} title='register' loading={this.props.isLoading} />
                </div>

                {/* <button>Go To Dashboard</button> */}

            </div>
        )
    }
}

const reduxState = (state) => ({
    isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
    registerAPI: (data) => dispatch(registerUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(Register);