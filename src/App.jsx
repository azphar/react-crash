import "./App.css";
import Todo from './components/Todo.jsx';
import Title from './components/Title.jsx';
import Modal from './components/modal.jsx';

function App() {
  return (
    <div>
      <Title />
      <div className="todo__wrapper">
      <Todo title="Finish Frontend Simplified"
      paragraph="Code along with Frontend Simplified step by step"
      />
      <Todo title="Complete interview section"
      paragraph="Finish every interview question in the next 6 weeks"
      />
      <Todo title="Land $100k Job"
      paragraph="Apply to 100 jobs"
      />
    </div>
    {/* <Modal title="Are you sure you want to delete?"/> */
    </div>
  );
}

export default App;


