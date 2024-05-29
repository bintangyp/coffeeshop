import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="fixed">
        <Sidebar />
      </div>
      <Navbar />
    </>
  );
}

export default App;
