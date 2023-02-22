
import ValidatedLoginForm from "./ValidatedLoginForm";
import ReactDOM from 'react-dom'
import LoginForm from "./LoginForm";

function App() {
  return (
    <div className="App">
      
      <LoginForm />
      <ValidatedLoginForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

