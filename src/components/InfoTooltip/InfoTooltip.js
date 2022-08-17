function InfoTooltip({ isOpen, onClose }) {
  return (
    <div className={`infotooltip ${isOpen && "infotooltip_opened"}`}>
      <div className="infotooltip__container">
        <div className="infotooltip__image"></div>
        <h2 className="infotooltip__title">Успешно</h2>
        <button
          className="infotooltip__close"
          type="button"
          aria-label="закрыть"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default InfoTooltip;
