import React from "react";
import { Link, withRouter } from "react-router-dom";
import AuthForm from "../AuthForm/AuthForm";
import logo from "../../images/logo.svg";

class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
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
          <h2 className="auth-form__title">Рады видеть!</h2>
          <AuthForm
            handleChange={this.handleChange}
            isValid={this.state.isValid}
            errors={this.state.errors}
            handleSubmit={this.handleSubmit}
            authError={this.props.authError}
            isLoading={this.props.isLoading}
            buttonText="Войти"
          />
          <p className="auth__paragraph">
            Ещё не зарегистрированы?
            <Link to="/signup" className="auth__link">
              {" "}
              Регистрация
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
