import { evento } from '../data/evento'


function Cabecalho() {
  return (
    <header className="bg-primaria text-white shadow">
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-destaque focus:px-4 focus:py-3 focus:font-bold focus:text-slate-950"
      >
        Pular para o conteúdo
      </a>


      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <span className="text-lg font-extrabold text-destaque">{evento.nome}</span>
        <nav aria-label="Menu principal" className="flex flex-wrap gap-2">
          <a href="#sobre" className="inline-flex 2.75rem items-center px-3 font-medium hover:text-destaque">
            Sobre
          </a>
          <a href="#programacao" className="inline-flex 2.75rem items-center px-3 font-medium hover:text-destaque">
            Programação
          </a>
          <a href="#percursos" className="inline-flex 2.75rem items-center px-3 font-medium hover:text-destaque">
            Percursos
          </a>
          <a href="#duvidas" className="inline-flex 2.75rem items-center px-3 font-medium hover:text-destaque">
            Dúvidas
          </a>
          <a href="#inscricao" className="inline-flex 2.75rem items-center px-3 font-medium hover:text-destaque">
            Inscrição
          </a>
        </nav>
      </div>
    </header>
  )
}


export default Cabecalho