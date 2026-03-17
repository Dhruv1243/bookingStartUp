import { getProjects, getSiteConfig } from "../lib/strapi";
import LandingPage from "../components/landingPage/LandingPage";

export async function getStaticProps() {
  const [siteConfig, projects] = await Promise.all([
    getSiteConfig(),
    getProjects(),
  ]);

  return {
    props: {
      siteConfig,
      projects,
    },
    revalidate: 30,
  };
}

export default function HomePage({ siteConfig, projects }) {
  return <LandingPage siteConfig={siteConfig} projects={projects} />;
}
