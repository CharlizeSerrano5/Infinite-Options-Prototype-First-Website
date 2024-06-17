import './App.css';
import Header from './Header';
import Card from './Components/Card'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Card
      title='Card Title'
      imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx6fwDm83Pu2Rs8pjD0B6pSKqy1Ed6D5JCktNnXWKIW4sPdB9bEdErH5GQcvrbunh2GSc&usqp=CAU'
      body='3.4 Ratings'
       />
    </div>
  );
}

export default App;
