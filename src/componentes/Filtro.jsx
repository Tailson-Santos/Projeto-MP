export function Filtro({
  busca,
  setBusca,
  ordem,
  setOrdem,
  mostrarFavoritos,
  setMostrarFavoritos
}) {
  const inputSizeStyle = "border p-1 rounded"
  return (

    <div className=" fixed bottom-0 left-0 w-full bg-black p-4 shadow-md md:static">

      <input
        type="text"
        placeholder="Buscar cidade..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className={inputSizeStyle}
      />

      <select
        value={ordem}
        onChange={(e) => setOrdem(e.target.value)}
        className={inputSizeStyle}
      >
        <option value="az">A → Z</option>
        <option value="za">Z → A</option>
        <option value="dias-crescente">Dias ↑</option>
        <option value="dias-decrescente">Dias ↓</option>
      </select>

  

    </div>
  )
}