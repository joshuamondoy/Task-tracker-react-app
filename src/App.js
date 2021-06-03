import Header from './components/Header'
function App() {


  return (
    //remember to always wrap every element in one parent element else it will throw an erro
    <div className='container'>
      <Header/> {/*this is the Header component file we created*/}
    </div>
  );
}

export default App;
