/* Kids Page */

// Layout Components
import Head from 'components/layout/Head'
import Hero from 'components/layout/Hero'

// Page Components
import Mission from 'components/pages/kids/Mission'
import Vision from 'components/pages/kids/Vision'
import Values from 'components/pages/kids/Values'
import NutritionalMedicine from 'components/pages/kids/NutritionalMedicine'
import WeAreWhatWeConsume from 'components/pages/kids/WeAreWhatWeConsume'
import Conditions from 'components/pages/kids/Conditions'
import ForPreTeensAndTeenagers from 'components/pages/kids/ForPreTeensAndTeenagers'

// Page Content
import content from 'public/content/en_US/pages/kids/kids.content'


export default function Kids() {

  return (

    <>

      <Head {...content} />

      <div className="about">

        <Hero {...content} />

        <Mission />

        <Vision />

        <Values />

        <NutritionalMedicine />

        <WeAreWhatWeConsume />

        <Conditions />

        <ForPreTeensAndTeenagers />

      </div >

    </>
    
  )
}