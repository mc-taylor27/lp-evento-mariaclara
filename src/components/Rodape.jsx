import { evento } from '../data/evento'


function Rodape() {
  return (
    <footer className="bg-primaria px-4 py-8 text-center text-white">
      <p className="font-bold text-destaque">{evento.nome}</p>
      <p className="mt-1 text-sm">{evento.local}</p>
      <p className="mt-4 text-xs text-slate-200">
        Evento fictício criado para fins didáticos
      </p>
    </footer>
  )
}


export default Rodape