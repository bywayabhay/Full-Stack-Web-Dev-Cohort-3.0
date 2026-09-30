import About from "./assets/About";

let App = () => {
  return (
    <div>
      <h1>Hello Abhay</h1>
      <h2>Me there</h2>
      {
        // braces must be there for calling funtion like JS
      }
      <About name="Abhay" element={<h1> Hello dear </h1>}>
        <h1>Hello Bhalu</h1>
      </About>
      //funtional components
    </div>
  );
};

export default App;
