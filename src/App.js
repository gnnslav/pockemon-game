import './App.css';
import Header from './components/header';
import Layout from './components/layout';
import Footer from './components/footer';

import bgImg from './assets/images/bg1.jpg';

function App() {
  
  return (
    <div className="App">
      <Header title="Header"
              descr="Description"
      />
      <Layout title='Layout'
              descr='description' 
              urlBg={bgImg}
      />
      <Layout title='Layout'
              descr='description' 
              colorBg='red'
              
      />
      <Layout title='Layout'
              descr='description' 
              urlBg={bgImg}
      />
      <Footer />
    </div>
  );
}

export default App;
