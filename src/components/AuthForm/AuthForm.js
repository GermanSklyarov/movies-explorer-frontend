function AuthForm({
  handleChange,
  handleSubmit,
  buttonText,
  isRegister,
  isValid,
  errors,
  authError,
  isLoading,
}) {
  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      {isRegister && (
        <>
          <span className="auth-form__input-name">Имя</span>
          <input
            className="auth-form__input"
            id="name"
            required
            name="name"
            minLength="2"
            maxLength="30"
            type="text"
            onChange={handleChange}
          />
          <span className="name-error auth-form__input-error">
            {errors.name ? errors.name : ""}
          </span>
        </>
      )}
      <span className="auth-form__input-name">E-mail</span>
      <input
        className="auth-form__input"
        id="email"
        required
        name="email"
        type="email"
        onChange={handleChange}
      />
      <span className="email-error auth-form__input-error">
        {" "}
        {errors.email ? errors.email : ""}
      </span>
      <span className="auth-form__input-name">Пароль</span>
      <input
        className="auth-form__input"
        id="password"
        required
        name="password"
        type="password"
        onChange={handleChange}
      />
      <span className="password-error auth-form__input-error">
        {errors.password ? errors.password : ""}
      </span>
      <span className="auth-form__submit-error">{authError}</span>
      <button
        type="submit"
        className={`auth-form__submit ${
          (!isValid || isLoading) && "auth-form__submit_disabled"
        }`}
        disabled={!isValid || isLoading}
      >
        {buttonText}
      </button>
    </form>
  );
}

export default AuthForm;
