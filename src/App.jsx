import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex">
        <div className="">
          <Sidebar />
        </div>
        <div className="bg-mysecondary min-h-screen w-full">
          <Navbar />
          <Content />
        </div>
      </div>
    </>
  );
}

export default App;
