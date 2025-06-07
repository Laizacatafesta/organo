import "./CampoTexto.css";
const CampoTexto = (props) => { //componentes react sempre começam com letra maiscula
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={props.placeholder}/>
        </div>
    )
};

export default CampoTexto;