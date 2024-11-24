function Inputs({ name, label, type, value, icon, onChangeHandel, errors }) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <div className="input-group">
        <span className="input-group-text">
          <i className={icon}></i>
        </span>
        <input
          type={type}
          value={value}
          name={name}
          className="form-control"
          onChange={onChangeHandel} // Assurez-vous d'utiliser le bon nom
        />
      </div>
      {errors && <div style={{ color: "red" }}>{errors}</div>}
    </div>
  );
}

export default Inputs;
