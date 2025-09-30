import { useRef, type FormEvent } from "react";

interface NewGoalProps {
  onAdd: (title: string, description: string) => void;
}

export default function NewGoal({ onAdd }: NewGoalProps) {
  const goalRef = useRef<HTMLInputElement>(null);
  const summarysRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredGoal = goalRef.current!.value;
    const enteredSummary = summarysRef.current!.value;

    onAdd(enteredGoal, enteredSummary);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input type="text" id="goal" ref={goalRef} required />
      </p>

      <p>
        <label htmlFor="summary">Short summary</label>
        <input type="text" id="summary" ref={summarysRef} required />
      </p>

      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
