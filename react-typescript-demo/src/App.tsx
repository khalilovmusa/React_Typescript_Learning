import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Conatiner';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/User';
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

      <Greet name="Musa" isLoggedIn={true} />

      <Button handleClick={() => console.log("Button clicked!")} />
      <Button handleClick={(event, id) => { console.log('Button Clicked!', event, id) }} />

      <Input value='' handleChange={event => console.log(event)} />

      <Container styles={{ border: '1px solid black', padding: '1rem' }} />

      <LoggedIn />

      <User />
    </div>
  );
}

export default App;
