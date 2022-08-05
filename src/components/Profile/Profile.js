function Profile() {
  return (
    <div className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <div className="profile__user-data">
        <p className="profile__field">
          <span>Имя</span>
          <span>Виталий</span>
        </p>
        <p className="profile__field">
          <span>E-mail</span>
          <span>pochta@yandex.ru</span>
        </p>
      </div>
      <div className="profile__buttons">
        <button type="button" className="profile__button profile__button_type_edit">Редактировать</button>
        <button type="button" className="profile__button profile__button_type_exit">Выйти из аккаунта</button>
      </div>
    </div>
  );
}

export default Profile;