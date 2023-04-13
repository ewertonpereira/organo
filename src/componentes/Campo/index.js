import './Campo.css'

// const placeholderModificada = `${props.placeholder}` ex: usar placeholderModificada no lugar de props.placeholder

const Campo = ({ type = 'text', label, placeholder, valor, aoAlterado, obrigatorio = false }) => {

  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value)
  }

  return (
        <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input 
        type={type}
        onChange={aoDigitado} 
        placeholder={placeholder}
        required={obrigatorio} 
        value={valor} 
      />
    </div>
  );
};

export default Campo
