import { percursos } from '../data/evento'
import CartaoAtracao from './CartaoAtracao'


function Atracoes() {
  return (
    <section id="percursos" className="px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-primaria">Percursos</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {percursos.map((percurso) => (
            <CartaoAtracao
              key={percurso.nome}
              nome={percurso.nome}
              nivel={percurso.nivel}
              descricao={percurso.descricao}
            />
          ))}
        </div>
      </div>
    </section>
  )
}


export default Atracoes