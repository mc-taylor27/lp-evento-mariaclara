import { programacao } from '../data/evento'


function Programacao() {
  return (
    <section id="programacao" className="bg-slate-50 px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-primaria">Programação</h2>
        <ul className="mt-8 space-y-3">
          {programacao.map((item) => (
            <li
              key={item.horario}
              className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-4"
            >
              <span className="2.75rem rounded bg-primaria px-3 py-1 text-center font-bold text-destaque">
                {item.horario}
              </span>
              <span className="font-medium text-slate-900">{item.atividade}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}


export default Programacao