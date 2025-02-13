
import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { nameList } from './components/store/PersonListSlicer';
import { Oscar } from './Oscar';

function App() {
  const personName = {
    first: "Musa",
    last: "Khalilov"
  }

  return (
    <div className="App">
      <Greet name="Musa" messageCount={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />

      <Status status='error' />

      <Heading>Placeholder text</Heading>

      <Oscar>
        <Heading>
          Oscar
        </Heading>
      </Oscar>
    </div>
  );
}

export default App;
