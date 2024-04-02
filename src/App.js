import logo from './logo.svg';
import './App.css';
import List from './functioncomponent/List/list';
import Table from './functioncomponent/Table/table';

function App() {
  return (
    <div className="App">
      <h1>Image task</h1>
      <br></br>
      <List/>
      <br>
      </br>
      <h1>Table task</h1>
      <br></br>
      <center><Table/></center>
      
    </div>
  );
}

export default App;
