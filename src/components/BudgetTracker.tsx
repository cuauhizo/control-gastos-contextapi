import { useBudget } from '../hooks/useBudget';
import AmountDisplay from './AmountDisplay';
export default function BudgetTracker() {
  const { state, totlaExpeses, remainingBudget } = useBudget();

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <div className="flex justify-center">
        <img
          src="/grafico.jpg"
          alt="Grafica de gastos"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-8 ">
        <button
          type="button"
          className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg">
          Resetear App
        </button>
        <AmountDisplay
          label="Presupuesto"
          amount={state.budget}
        />
        <AmountDisplay
          label="Disponible"
          amount={remainingBudget}
        />
        <AmountDisplay
          label="Gastado"
          amount={totlaExpeses}
        />
      </div>
    </div>
  );
}
