import React, { useContext, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({
  signOut,
  isLoading,
  updateError,
  isEdit,
  handleSubmit,
  onClick,
}) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
    setErrors({
      [e.target.name]: e.target.validationMessage,
    });
    setIsValid(e.target.closest("form").checkValidity());
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
    setErrors({
      [e.target.name]: e.target.validationMessage,
    });
    setIsValid(e.target.closest("form").checkValidity());
  }

  function onSubmit(e) {
    e.preventDefault();
    handleSubmit({ name, email });
  }

  return (
    <div className="profile">
      <h2 className="profile__title">Привет, {currentUser.name}!</h2>
      {!isEdit && (
        <>
          <div className="profile__user-data">
            <p className="profile__field">
              <span>Имя</span>
              <span>{currentUser.name}</span>
            </p>
            <p className="profile__field">
              <span>E-mail</span>
              <span>{currentUser.email}</span>
            </p>
          </div>
          <div className="profile__buttons">
            <button
              type="button"
              className="profile__button profile__button_type_edit"
              onClick={onClick}
            >
              Редактировать
            </button>
            <button
              type="button"
              className="profile__button profile__button_type_exit"
              onClick={signOut}
            >
              Выйти из аккаунта
            </button>
          </div>
        </>
      )}
      {isEdit && (
        <form className="profile__user-data profile__form" onSubmit={onSubmit}>
          <input
            className="profile__field"
            type="text"
            name="name"
            minLength="2"
            maxLength="30"
            placeholder="Имя"
            value={name}
            onChange={handleNameChange}
          />
          <span className="name-error auth-form__input-error">
            {errors.name ? errors.name : ""}
          </span>
          <input
            className="profile__field"
            name="email"
            type="email"
            onChange={handleEmailChange}
            placeholder="E-mail"
            value={email}
          />
          <span className="email-error auth-form__input-error">
            {" "}
            {errors.email ? errors.email : ""}
          </span>
          <span className="auth-form__submit-error">{updateError}</span>
          <button
            type="submit"
            className={`auth-form__submit ${
              (!isValid || isLoading) && "auth-form__submit_disabled"
            }`}
            disabled={!isValid || isLoading}
          >
            Сохранить
          </button>
        </form>
      )}
    </div>
  );
}

export default Profile;
