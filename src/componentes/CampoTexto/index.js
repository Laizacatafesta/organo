import "./CampoTexto.css";
const CampoTexto = () => { //componentes react sempre começam com letra maiscula
    return(
        <div className="campo-texto">
            <label>Nome</label>
            <input placeholder="Digite seu nome"/>
        </div>
    )
};

export default CampoTexto;