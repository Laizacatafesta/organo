import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Times';

function App() {

  const times = [
    {
      nome:'Programação',
      corPrimaria: '#57C278',
      corSecundaria:'#D7F7E9'
    },
     {
      nome:'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria:'#E8F8FF'
    },
    {
  
      nome:'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria:'#F0F8E2'
    },
     {
      nome:'Devops',
      corPrimaria: '#E06B69',
      corSecundaria:'#FDE7E8'
    },
     {
      nome:'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria:'#FAE9F5'
    },
     {
      nome:'Mobile',
      corPrimaria: '#FFBAD5',
      corSecundaria:'#FFF5D9'
    },
     {
      nome:'Inovação e Gestão',
      corPrimaria: '#F08A29',
      corSecundaria:'#FFEEDF'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
    </div>
  )
}

export default App;
