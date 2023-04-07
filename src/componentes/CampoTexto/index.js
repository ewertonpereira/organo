import './CampoTexto.css'

// const placeholderModificada = `${props.placeholder}` ex: usar placeholderModificada no lugar de props.placeholder

const CampoTexto = (props) => {
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input placeholder={props.placeholder}/>
    </div>
  );
};

export default CampoTexto
