import './App.scss';
import CompareTable from './components/CompareTable/CompareTable';
import ScoreTable from './components/ScoreTable/ScoreTable';
import UserInput from './components/UserInput/UserInput';

const arr = [
  {name: 'a', value: [null, true, true, true]},
  {name: 'b', value: [false, null, true, true]},
  {name: 'c', value: [false, false, null, true]},
  {name: 'd', value: [false, false, false, null]},
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
