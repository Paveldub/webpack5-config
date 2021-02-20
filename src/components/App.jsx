import '../styles/index.scss'
import {Recipes} from './Recepies'

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Hey React from main</h1>
        </section>
        <Recipes />
      </main>
    </>
  )
}

export default App;