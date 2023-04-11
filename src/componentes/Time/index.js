import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    return (
        props.colaboradores.length > 0 && <section className='time' style={{  backgroundImage: 'url(/imagens/fundo.png)',backgroundColor: props.corSecundaria }}>
            <input 
                onChange={evento => props.mudarCor(evento.target.value, props.nome)} 
                value={props.corPrimaria} 
                type='color' 
                className='inputCor'/>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map((colaborador, indice) => {
                    return (
                        <Colaborador 
                            corDeFundo={props.corPrimaria}
                            key={indice}
                            nome={colaborador.nome} 
                            cargo={colaborador.cargo}
                            imagem={colaborador.imagem}
                            aoDeletar={props.aoDeletar}
                        />
                    )
                })}    
            </div>
        </section>
    )
} 

export default Time