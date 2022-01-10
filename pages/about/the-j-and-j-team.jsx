// Custom Components
import Head from 'components/layout/Head'
import Hero from 'components/layout/Hero'
import TeamMembers from 'components/common/Team'

// Custom Styles and Content
import styles from 'scss/pages/about.module.scss'
import content from 'public/content/en_US/pages/about/team.content'


export default function JJTeam() {

    return (

        <>

            <Head {...content}/>

            <div className={styles.theJandJTeam}>

                <Hero {...content}/>
                            
                <TeamMembers />

            </div>

        </>
    )
}