import { useReducer, createContext, Dispatch, ReactNode, useMemo } from 'react';
import { BudgetActions, BudgetState, budgetReducer, initialState } from '../reducers/budget-reducer';

type BudgetContextProps = {
  state: BudgetState;
  dispatch: Dispatch<BudgetActions>;
  totlaExpeses: number;
  remainingBudget: number;
};

export const BudgetContext = createContext<BudgetContextProps>(null!);

type BudgetProviderProps = {
  children: ReactNode;
};

export const BudgetProvaider = ({ children }: BudgetProviderProps) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);
  const totlaExpeses = useMemo(
    () => state.expenses.reduce((total, expense) => expense.amount + total, 0),
    [state.expenses]
  );

  const remainingBudget = state.budget - totlaExpeses;

  return (
    <BudgetContext.Provider value={{ state, dispatch, totlaExpeses, remainingBudget }}>
      {children}
    </BudgetContext.Provider>
  );
};
