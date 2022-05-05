import FunctionalComp from './components/FunctionalComp';

function App() {
  return (
    <div>
      <FunctionalComp firstname="John" lastname="smith" age={88} haircolor="Black"/>  
      <FunctionalComp firstname="Millard" lastname="Fillmore" age={768} haircolor="Pink"/>  
      <FunctionalComp firstname="Maria" lastname="Smith" age={7} haircolor="Green"/>  
      <FunctionalComp firstname="Jane" lastname="Doe" age={45} haircolor="Black"/>  
    </div>
  );
}

export default App;