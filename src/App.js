import "./styles.css";
import Tours from "./Tours";

export default function App() {
  console.log("Entre APP");
  return (
    <main>
      <section>
        <div className="title">
          <h2>On Tours</h2>
          <div className="underline"></div>
        </div>
        <Tours />
      </section>
    </main>
  );
}
