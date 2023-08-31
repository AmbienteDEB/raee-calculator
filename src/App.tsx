import Formulario from "./components/Formulario";
import { ResultsTabs } from "./components/ResultsTabs";
import { Nav } from "./components/Nav";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div
      className="flex flex-col gap-4 relative h-screen overflow-hidden"
      onSubmit={(e) => e.preventDefault()}
    >
      <Nav />
      <div className="flex flex-col p-4 gap-4 mt-14 w-full max-h-screen overflow-y-auto">
        <Formulario />
        <ResultsTabs />
      </div>
      <Toaster />
    </div>
  );
}

export default App;
