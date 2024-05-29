import { useEffect, useRef, useState } from "react";
import Form from "./components/Form";
import "./index.css";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";

function App() {
  const ref = useRef<HTMLInputElement>(null);

  // useEffect executes after render
  useEffect(() => {
    if (ref.current) ref.current.focus();
  });

  // When you have multiple useEffects,
  // React will run in the order after each render
  useEffect(() => {
    document.title = "My App";
  });

  return (
    <div>
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
}

export default App;
