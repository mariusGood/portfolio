import './App.css';
import Banner from './components/Banner/Banner';
import Hero from './components/Hero/Hero';
import Menu from './components/Menu/Menu';
import ProjectsList from './components/ProjectsList/ProjectsList';

function App() {
  return (
    <div id='home' className='App'>
      <Menu />
      <Hero />
      <Banner deg='diagonal' />
      <ProjectsList />
      <Banner />
      {/* <About /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
