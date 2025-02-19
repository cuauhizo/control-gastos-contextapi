import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useBudget } from '../hooks/useBudget';
import AmountDisplay from './AmountDisplay';
import 'react-circular-progressbar/dist/styles.css';

export default function BudgetTracker() {
  const { state, totlaExpeses, remainingBudget, dispatch } = useBudget();
  const porcentage = +((totlaExpeses / state.budget) * 100).toFixed(2);
  console.log(porcentage);

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <div className="flex justify-center">
        <CircularProgressbar
          value={porcentage}
          styles={buildStyles({
            pathColor: porcentage === 100 ? '#dc2626' : '#3b82f6',
            trailColor: '#f5f5f5',
            textSize: 10,
            textColor: porcentage === 100 ? '#dc2626' : '#3b82f6',
          })}
          text={`${porcentage}% Gastado`}
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-8 ">
        <button
          type="button"
          className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg"
          onClick={() => dispatch({ type: 'reset-app' })}>
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
