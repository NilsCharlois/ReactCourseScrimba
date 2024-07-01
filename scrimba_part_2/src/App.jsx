import './App.css'
import { CardComponent } from './Components/CardComponent'
import { NavbarComponent } from './Components/NavbarComponent'
import { HeroComponent } from "./Components/HeroComponent"

import Data from './Data.json'

function App() {

  const dataElements = Data.map(element => {
    return <CardComponent
      img={element.coverImg}
      rating={element.rating}
      reviewCount={element.reviewCount}
      location={element.location}
      title={element.title}
      price={element.price}
      />
})

  return (
    <>
      <div>
        <NavbarComponent/>
        <HeroComponent/>
        <section className="cards-list">
        {dataElements}
        </section>        
      </div>      
    </>
  )
}

export default App
