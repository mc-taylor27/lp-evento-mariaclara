import { useState } from 'react'
import { perguntas } from '../data/evento.js';



function PerguntasFrequentes() {
  const [abertaId, setAbertaId] = useState(null)


  function alternar(id) {
    setAbertaId((atual) => (atual === id ? null : id))
  }


  return (
    <section id="duvidas" className="bg-slate-50 px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-primaria">Perguntas frequentes</h2>


        <div className="mt-8 space-y-4">
          {perguntas.map((item) => {
            const estaAberta = abertaId === item.id


            return (
              <div
                key={item.id}
                className="rounded-xl border border-slate-200 bg-white shadow-sm"
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={estaAberta}
                    aria-controls={item.id}
                    onClick={() => alternar(item.id)}
                    className="flex min-h-11 w-full cursor-pointer items-center justify-between gap-4 px-6 py-4 text-left text-lg font-bold text-primaria hover:bg-slate-50"
                  >
                    <span>{item.pergunta}</span>
                    <span aria-hidden="true" className="text-xl font-extrabold">
                      {estaAberta ? '−' : '+'}
                    </span>
                  </button>
                </h3>


                <div
                  id={item.id}
                  hidden={!estaAberta}
                  className="border-t border-slate-100 px-6 py-4 text-slate-800"
                >
                  <p>{item.resposta}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


export default PerguntasFrequentes