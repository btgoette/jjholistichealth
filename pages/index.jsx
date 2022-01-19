/* Home Page */

// Layout Components
import Head from 'components/layout/Head'
import Jumbotron from 'components/layout/Jumbotron'

// Page Components
import Conditions from 'components/pages/home/Conditions'
import YouAreWhatYouEat from 'components/pages/home/YouAreWhatYouEat'

// Page Content
import content from 'public/content/en_US/pages/index.content'


export default function Home() {

  return (

    <>

      <Head {...content}/>

      <div className={content.pageName}>

        <Jumbotron/>
        
        <YouAreWhatYouEat />

        <Conditions />

      </div>

    </>
    
  )
}
