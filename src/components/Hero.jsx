import { evento } from '../data/evento'


function Hero() {
  return (
    <section className="bg-primaria px-4 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-extrabold sm:text-5xl">{evento.nome}</h1>
        <p className="mt-4 text-xl font-medium text-destaque">{evento.slogan}</p>
        <p className="mt-4 text-base">{evento.data}</p>
        <p className="mt-1 text-base">{evento.local}</p>
        <a
          href="#inscricao"
          className="mt-8 inline-flex 2.75rem items-center rounded-lg bg-destaque px-6 py-3 font-bold text-slate-950 hover:opacity-90"
        >
          Garantir minha inscrição
        </a>
      </div>
    </section>
  )
}


export default Hero