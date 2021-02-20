import '../styles/index.scss'
import { Recipes } from './Recepies'
import banner from '../images/banner_img.png'

const App = () => {
  return (
    <>
      <section className="hero">
        <img src={banner}></img>
      </section>
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