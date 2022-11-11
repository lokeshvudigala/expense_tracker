import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = ({ expenses }) => {
  if (!expenses.length)
    return <h2 className="expenses-list__fallback">No Expenses found</h2>;
  return (
    <ul className="expenses-list">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} currentExpense={expense} />
      ))}
    </ul>
  );
};
export default ExpensesList;
