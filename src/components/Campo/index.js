import "./Campo.css";

const Campo = (props) => {
  //Destructuración
  const { type = "text" } = props;

  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{props.titulo}</label>
      <input
        placeholder={props.placeholder}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
        type={type}
      ></input>
    </div>
  );
};

export default Campo;
