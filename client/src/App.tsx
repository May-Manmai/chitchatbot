
import "./App.css";
import HomePage from "./pages/HomePage";


function App() {
   
    // useEffect(() => {
    //     axios
    //         .get("/api/test")
    //         .then((response) => response.data)
    //         .then((data: any) => {
    //             setServerDate(data.date);
    //         });
    // }, []);
    return (
        
        <div className="App">
            < HomePage/>
        </div>
       
    );
}

export default App;
