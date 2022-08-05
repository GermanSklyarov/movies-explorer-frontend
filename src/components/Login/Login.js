import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import logo from '../../images/logo.svg';

class Register extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
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
          <h2 className='auth-form__title'>Рады видеть!</h2>
          <AuthForm handleChange={this.handleChange} buttonText="Войти" />
          <p className='auth__paragraph'>Ещё не зарегистрированы?
            <Link to="/signup" className='auth__link'> Регистрация</Link>
          </p>
        </div>
      </div>
    )
  }
}

export default withRouter(Register);