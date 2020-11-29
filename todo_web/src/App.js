import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
//import FirstComponent from "./components/learning-example/FirstComponent";
//import SecondComponent from "./components/learning-example/SecondComponent";
//import ThirdComponent from "./components/learning-example/ThirdComponent";
// import Counter from "./components/counter/Counter";
import React from 'react';
import TodoApp from "./components/todo/TodoApp";

function App() {
  return (
    <div className="App">
        {/*<Counter/>*/}
        <TodoApp/>
    </div>
  );
}





// class LearningComponents extends Component{
//     render() {
//         return(
//             <div className="learningcomponents">
//                 <FirstComponent></FirstComponent>
//                 <SecondComponent></SecondComponent>
//                 <ThirdComponent></ThirdComponent>
//             </div>
//             );
//     }
// }

export default App;

