import CoreConcepts from './CoreConcepts'
import { CORE_CONCEPTS } from '../data'
import Section from './Section'
export default function CoreConcept(){
    return(
      <>
     <Section id="core-concepts" title="Core Components">
    
        <ul>
          {CORE_CONCEPTS.map((items,index)=>( <CoreConcepts key={index} {... items}/>))}
        {/* <CoreConcepts 
        image={CORE_CONCEPTS[0].image} 
        title={CORE_CONCEPTS[0].title} 
        description={CORE_CONCEPTS[0].description} 
        />
        <CoreConcepts {...CORE_CONCEPTS[1]}/>
        <CoreConcepts {...CORE_CONCEPTS[2]}/>
        <CoreConcepts {...CORE_CONCEPTS[3]}/> */}
        </ul>
      </Section>
        </>
      )
}