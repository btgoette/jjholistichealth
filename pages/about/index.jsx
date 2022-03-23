/* About Page */

// Page Components
import Head from "components/common/Head"
import Hero from "components/common/Hero"
import Section from "components/common/Section"

// Page Content
import page from "public/content/en_US/Page/About/about.content"

export default function About() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <Hero {...page.hero} />
      <Section {...page.block.weTakeYourComfortSeriously} />
      <Section {...page.block.mission} />
      <Section {...page.block.vision} />
      <Section {...page.block.howWeTakeCareOfOurPatients} />
    </div>
  )
}
