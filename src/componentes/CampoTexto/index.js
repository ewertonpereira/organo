import './CampoTexto.css'

// const placeholderModificada = `${props.placeholder}` ex: usar placeholderModificada no lugar de props.placeholder

const CampoTexto = (props) => {

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value)
  }

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input 
        onChange={aoDigitado} 
        placeholder={props.placeholder}
        required={props.obrigatorio} 
        value={props.valor} 
      />
    </div>
  );
};

export default CampoTexto
