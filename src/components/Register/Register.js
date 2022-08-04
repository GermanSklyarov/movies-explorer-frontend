import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import logo from '../../images/logo.svg';

class Register extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className='auth register'>
        <div className='auth__wrapper'>
          <Link to="/" className='auth__logo-link'>
            <img className='auth__logo' src={logo} alt="логотип" />
          </Link>
          <h2 className='auth-form__title'>Добро пожаловать!</h2>
          <AuthForm handleChange={this.handleChange} buttonText="Зарегистрироваться" isRegister="true" />
          <p className='auth__paragraph'>Уже зарегистрированы?
            <Link to="/signin" className='auth__link'> Войти</Link>
          </p>
        </div>
      </div>
    )
  }
}

export default withRouter(Register);