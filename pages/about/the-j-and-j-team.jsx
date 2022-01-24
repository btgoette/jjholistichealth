/* The J&J Team Page */

// Layout Components
import Head from 'components/layout/Head'
import Hero from 'components/layout/Hero'

// Page Components
import Team from 'components/pages/about/Team'

// Page Content
import content from 'public/content/en_US/pages/about/team.content'


export default function JJTeam() {

    return (

        <>

            <Head {...content}/>

            <div className={content.pageName}>

                <Hero {...content}/>
                            
                <Team />

            </div>

        </>

    )
}