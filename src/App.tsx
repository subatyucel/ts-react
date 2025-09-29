import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import CourseGoals from "./components/CourseGoals";

export default function App() {
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "List of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoals
        goals={[
          { id: 1, title: "Learn TS", description: "Learn TS from ground up" },
          {
            id: 2,
            title: "Practice TS",
            description: "Practice working with TypeScript",
          },
        ]}
      />
    </main>
  );
}
