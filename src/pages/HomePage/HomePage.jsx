import Layout from "@/app/Layout";
import Hero from "@/entities/sections/Hero";
import Popular from "@/entities/sections/Popular";
import Stories from "@/entities/sections/Stories";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <Stories />
      <Popular />
    </Layout>
  );
};

export default HomePage;
