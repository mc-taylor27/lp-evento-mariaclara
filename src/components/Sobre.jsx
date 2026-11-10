import { evento, numeros } from '../data/evento'


function Sobre() {
  return (
    <section id="sobre" className="px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-primaria">Sobre o evento</h2>
        <p className="mt-4 leading-relaxed text-slate-800">{evento.sobre}</p>


        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {numeros.map((item) => (
            <div
              key={item.descricao}
              className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center"
            >
              <p className="text-3xl font-extrabold text-primaria">{item.valor}</p>
              <p className="mt-1 font-medium text-slate-700">{item.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


export default Sobre