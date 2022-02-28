import filtros from './filtros.json';

export default function Filtros() {
  function selecionarFiltro(filtro) {}
  return (
    <div>
      {filtros.map((filtro) => (
        <button key={filtro.id} onClick={() => selecionarFiltro}>
          {filtro.label}
        </button>
      ))}
    </div>
  );
}
