import './App.scss';
import CompareTable from './components/CompareTable/CompareTable';
import ScoreTable from './components/ScoreTable/ScoreTable';
import UserInput from './components/UserInput/UserInput';

const App = () => {
  return (
    <div className='app__container'>
      <div className='app__entry-field'>
        <UserInput />
        <ScoreTable />
      </div>
      <CompareTable />
    </div>
  );
}

export default App;
