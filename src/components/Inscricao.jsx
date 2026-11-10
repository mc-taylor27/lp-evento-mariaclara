import { useState } from 'react'
import { ingressos } from '../data/evento'


function Inscricao() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [ingresso, setIngresso] = useState(ingressos[0])
  const [enviado, setEnviado] = useState(false)


  function enviar(e) {
    e.preventDefault()
    setEnviado(true)
  }


  return (
    <section id="inscricao" className="bg-slate-50 px-4 py-16">
      <div className="mx-auto max-w-xl">
        <h2 className="text-3xl font-bold text-primaria">Inscrição</h2>


        {enviado ? (
          <div
            role="status"
            className="mt-8 rounded-xl border-2 border-primaria bg-white p-6 text-slate-900"
          >
            <p className="text-lg font-bold text-primaria">Inscrição confirmada!</p>
            <p className="mt-2">
              Obrigado, <strong>{nome}</strong>. Sua vaga na modalidade{' '}
              <strong>{ingresso}</strong> está garantida. Enviamos os detalhes para{' '}
              <strong>{email}</strong>.
            </p>
          </div>
        ) : (
          <form onSubmit={enviar} className="mt-8 space-y-4 rounded-xl bg-white p-6 shadow-sm">
            <label className="block">
              <span className="font-semibold text-slate-900">Nome completo</span>
              <input
                type="text"
                name="nome"
                autoComplete="name"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="mt-1 block min-h-11 w-full rounded-lg border border-slate-300 px-3"
              />
            </label>


            <label className="block">
              <span className="font-semibold text-slate-900">E-mail</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block min-h-11 w-full rounded-lg border border-slate-300 px-3"
              />
            </label>


            <label className="block">
              <span className="font-semibold text-slate-900">Modalidade / Ingresso</span>
              <select
                value={ingresso}
                onChange={(e) => setIngresso(e.target.value)}
                className="mt-1 block min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3"
              >
                {ingressos.map((opcao) => (
                  <option key={opcao} value={opcao}>
                    {opcao}
                  </option>
                ))}
              </select>
            </label>


            <button
              type="submit"
              className="min-h-11 w-full cursor-pointer rounded-lg bg-primaria px-6 py-3 font-bold text-white hover:opacity-95"
            >
              Confirmar inscrição
            </button>
          </form>
        )}
      </div>
    </section>
  )
}


export default Inscricao