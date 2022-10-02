import './App.css';
import BookScreen from './components/pages/Books-Screen/Books-Screen';
import BooksProvider from './contexts/Books-Context.jsx';
function App() {
  return (
    <div className="App">
      <BooksProvider>
        <BookScreen />
      </BooksProvider>

    </div>
  );
}

export default App;
