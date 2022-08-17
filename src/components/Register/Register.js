import React from "react";
import { Link, withRouter } from "react-router-dom";
import AuthForm from "../AuthForm/AuthForm";
import logo from "../../images/logo.svg";

class Register extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      errors: {},
      isValid: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.props.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    this.setState({
      errors: {
        [name]: e.target.validationMessage,
      },
    });
    this.setState({ isValid: e.target.closest("form").checkValidity() });
  }

  render() {
    return (
      <div className="auth register">
        <div className="auth__wrapper">
          <Link to="/" className="auth__logo-link">
            <img className="auth__logo" src={logo} alt="логотип" />
          </Link>
          <h2 className="auth-form__title">Добро пожаловать!</h2>
          <AuthForm
            handleChange={this.handleChange}
            buttonText="Зарегистрироваться"
            isRegister="true"
            handleSubmit={this.handleSubmit}
            isValid={this.state.isValid}
            errors={this.state.errors}
            authError={this.props.authError}
            isLoading={this.props.isLoading}
          />
          <p className="auth__paragraph">
            Уже зарегистрированы?
            <Link to="/signin" className="auth__link">
              {" "}
              Войти
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(Register);
