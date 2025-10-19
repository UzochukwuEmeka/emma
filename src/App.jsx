import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sectionone from "./pages/sectionone/Sectionone";
import Sectiontwo from "./pages/sectiontwo/Sectiontwo";
import Sectionthree from "./pages/sectionthree/Sectionthree";
import Sectionfour from "./pages/sectionfour/Sectionfour";
import { useState, useEffect } from "react";
import Sectionfive from "./pages/sectionfive/Sectionfive";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    // Check if the document is already loaded
    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="loading-screen flex justify-center flex-col overflow-hidden">
          <div className="loader">
            <div className="modelViewPort flex-col">
              <div className="eva">
                <div className="head">
                  <div className="eyeChamber">
                    <div className="eye"></div>
                    <div className="eye"></div>
                  </div>
                </div>
                <div className="body">
                  <div className="hand"></div>
                  <div className="hand"></div>
                  <div className="scannerThing"></div>
                  <div className="scannerOrigin"></div>
                </div>
              </div>
              <p className="text-white font-medium text-xl">Loading...</p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* <Navbar /> */}
          <div className="container-fluid whole_page_container">
            <div className="row  flex-column">
              <Sectionone />
              <Sectiontwo />
              <Sectionthree />
              <Sectionfour />
              {/* <Sectionfive /> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
