
import { CORE_CONCEPTS } from './data'
import Header from './Components/Header';
import CoreConcepts from './Components/CoreConcepts';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
        <h2>Core Components</h2>
        <ul>
        <CoreConcepts 
        image={CORE_CONCEPTS[0].image} 
        title={CORE_CONCEPTS[0].title} 
        description={CORE_CONCEPTS[0].description} 
        />
        <CoreConcepts {...CORE_CONCEPTS[1]}/>
        <CoreConcepts {...CORE_CONCEPTS[2]}/>
        <CoreConcepts {...CORE_CONCEPTS[3]}/>
        </ul>
      </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
