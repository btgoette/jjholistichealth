/* Home Page */

// Page Components
import Head from "components/common/Head"
import Hero from "components/common/Hero"
import Section from "components/common/Section"
import HomeConditions from "components/common/HomeConditions"
import BlogSlider from "components/common/BlogSlider"

// Page Content
import page from "public/content/en_US/Page/home.content"

export default function Home() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <Hero {...page.hero} />
      <BlogSlider />
      <Section {...page.block.youAreWhatYouEat} />
      <HomeConditions {...page.block.conditions}/>
    </div>
  )
}
