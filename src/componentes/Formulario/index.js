import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa/index';
import './Formulario.css';

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => { //faz carregar a pagina sem atualizar e voltar ao inicio quando clica no botão
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha o card com os dados do colaborador</h2>

                <CampoTexto 
                obrigatorio ={true} 
                label="Nome" 
                placeholder="Digite seu nome" 
                value ={nome} 
                aoAlterado={valor => setNome(valor)}/>

                <CampoTexto 
                obrigatorio={true} 
                label="Cargo" 
                placeholder="Digite seu cargo"  
                value ={cargo} 
                aoAlterado={valor => setCargo(valor)}/>

                <CampoTexto 
                label="Imagem" 
                placeholder="Digite o endereço da imagem"  
                value ={imagem} 
                aoAlterado={valor => setImagem(valor)}/>

                <ListaSuspensa 
                obrigatorio={true} 
                label="Time" 
                itens={props.times}
                valor={time}
                aoAlterado={valor => setTime(valor)}/>

                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario