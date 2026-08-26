
import './App.css';
import JobColumn from './components/JobColumn';
import JobForm from './components/JobForm';
import Completed from './images/completed.png';
import InProgress from './images/in-progress.png';
import Failed from './images/failed.png'

function App() {
  return (
    <div>
      <JobForm />
      <div className='columnSection'>
        <JobColumn value="Need to Start" image={Failed}/>
        <JobColumn value="In Progress" image={InProgress}/>
        <JobColumn value="Completed" image={Completed}/>

      </div>
    </div>
  );
}

export default App;
