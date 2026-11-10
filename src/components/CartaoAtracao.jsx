function CartaoAtracao({ nome, nivel, descricao }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <span className="inline-block rounded-full bg-destaque px-3 py-1 text-xs font-bold text-slate-950">
        {nivel}
      </span>
      <h3 className="mt-3 text-xl font-bold text-primaria">{nome}</h3>
      <p className="mt-2 text-slate-700">{descricao}</p>
    </article>
  )
}


export default CartaoAtracao