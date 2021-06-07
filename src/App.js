import './App.scss';
import CompareTable from './components/CompareTable/CompareTable';
import ScoreTable from './components/ScoreTable/ScoreTable';
import UserInput from './components/UserInput/UserInput';

const arr = [
  {name: 'a', score: '4'},
  {name: 'b', score: '3'},
  {name: 'c', score: '2'},
  {name: 'd', score: '1'},
];


const App = () => {
  return (
    <div className='app__container'>
      <div className='app__entry-field'>
        <UserInput />
        <ScoreTable arr={arr}/>
      </div>
      <CompareTable arr={arr}/>
    </div>
  );
}

export default App;
