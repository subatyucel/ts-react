import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import CourseGoals from "./components/CourseGoals";
import { useState } from "react";
import NewGoal from "./components/NewGoal";

export default function App() {
  const [goals, setGoals] = useState([
    { id: 1, title: "Learn TS", description: "Learn TS from ground up" },
    {
      id: 2,
      title: "Practice TS",
      description: "Practice working with TypeScript",
    },
  ]);

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((g) => g.id !== id));
  }

  function handleAddGoal(title: string, description: string) {
    setGoals((prevGoals) =>
      prevGoals.concat({ id: Math.random(), title, description })
    );
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "List of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAdd={handleAddGoal} />
      <CourseGoals goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
}
