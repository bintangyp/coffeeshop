import { redirect } from "react-router-dom";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Login from "./page/Login";

function App() {
  const [user, setUser] = useState(null);
  if (user === null) {
    return <Login />;
  }
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
