function AuthForm({ handleChange, buttonText, isRegister }) {
  return (
    <form className="auth-form">
      {isRegister &&
        <>
          <span className="auth-form__input-name">Имя</span>
          <input className='auth-form__input' id="name" required name="name"
            type="text" onChange={handleChange} />
          <span className="name-error auth-form__input-error"></span>
        </>
      }
      <span className="auth-form__input-name">E-mail</span>
      <input className='auth-form__input' id="email" required name="email"
        type="email" onChange={handleChange} />
      <span className="email-error auth-form__input-error"></span>
      <span className="auth-form__input-name">Пароль</span>
      <input className='auth-form__input' id="password" required name="password"
        type="password" onChange={handleChange} />
      <span className="password-error form__input-error"></span>
      <button type="submit" className="auth-form__submit">{buttonText}</button>
    </form>
  )
}

export default AuthForm;