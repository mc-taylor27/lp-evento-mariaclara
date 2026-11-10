import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Programacao from './components/Programacao'
import Atracoes from './components/Atracoes'
import PerguntasFrequentes from './components/PerguntasFrequentes'
import Inscricao from './components/Inscricao'
import Rodape from './components/Rodape'


function App() {
  return (
    <>
      <Cabecalho />
      <main id="conteudo-principal">
        <Hero />
        <Sobre />
        <Programacao />
        <Atracoes />
        <PerguntasFrequentes />
        <Inscricao />
      </main>
      <Rodape />
    </>
  )
}


export default App