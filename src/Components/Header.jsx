import coreImg from '../assets/react-core-concepts.png'

const random_choice=["Core","Fundamental","Crucial"]
let choice=random_choice[Math.floor(Math.random()*random_choice.length)]

function Header(){
  return(
     <header>
        <img src={coreImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {choice} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )

}
export default Header