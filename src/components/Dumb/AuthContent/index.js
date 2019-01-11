import React, { Component } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import { routePaths } from '@routes'
import Icon from '@components/Dumb/Icon'

import './styles.scss'

class AuthContent extends Component {
    state = {
        isLogin: true
    }
    onChangePage = ({ target }) => {
        this.setState({
            isLogin: target.value === 'login'
        })
    }
    render() {
        const { isLogin } = this.state
        return (
            <div className="authPage">
                <div className={classNames('authPage__bg', {
                    'login': isLogin,
                    'signup': !isLogin,
                })}>
                    <div className="authPage__bg--login"></div>
                    <div className="authPage__bg--signup"></div>
                </div>
                <div className="authPage__header">
                    <div className="wm-container">
                        <Link to={routePaths.home}>
                            <Icon name="logo-h" />
                        </Link>
                    </div>
                </div>
                <div className="authPage__cart">
                    <div className="cart-header">
                        <button type="button" className={classNames('cart-tab', {'active': isLogin})} onClick={this.onChangePage} value="login">Log in</button>
                        <button type="button" className={classNames('cart-tab', {'active': !isLogin})} onClick={this.onChangePage} value="signup">Sign up</button>
                    </div>
                    <div className="cart-body"></div>
                </div>
            </div>
        )
    }
}

export default AuthContent



