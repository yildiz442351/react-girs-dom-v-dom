import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Form from './Form'

/**
 * Her React Componenti bir Java Script fonksiyonudur
 * JSX yazımı kullanılır
 * JSX içerisinde direk olarak javascript kodları yazabiliriz
 * {} açmanız ve içine script yazmanız yeterlidir
 * jsx de class yerine className kulanılır
 * jsx de for yerine htmlFor kullanılır
 * stil yazarken tili obje şeklinde yazılır {{}}
 * 
*/


function App() {
  let kendiAdim = 'Yıldız'

  const pstil = {
    color: 'red'
    fontSize: '35px'
  }

  return (
    <div className="App">
      <Header />
      <Form />
    </div>
  );
}

export default App;
