import type { NextPage } from "next";
import Head from "next/head";
import Layout from "./layouts/Layout";
import AppHeader from "./components/header/Header";
import Features from "./components/features/Features";
import { API_FEATURES, API_PRICING, API_QUESTIONS } from "../../server/api";
import {Feature, Price, Question} from "@/types";
import Details from "./components/details/Details";
import Invitation from "./components/invitation/Invitation";
import Pricing from "./components/pricing/Pricing";
import FAQ from "./components/faq/FAQ";

type HomeProps = {
  features: Feature[];
  pricing: Price[];
  questions: Question[];
}

const Home: NextPage<HomeProps> = ({ features, pricing, questions }) => {
  return (
    <>
      <Head>
        <title>EasyFisco: fiscalità per ogni esigenza</title>
        <meta name="description" content="EasyFisco gestisce i clienti e la fiscalità per te, per darti modo di dedicare il tuo tempo alle cose più importanti" />
      </Head>
      <Layout>
        <AppHeader />
        <Features items={features} />
        <Details />
        <Invitation />
        <Pricing items={pricing} />
        <FAQ items={questions} />
      </Layout>  
    </>
  );
}
export async function getStaticProps() {
  try {
    const responseFeatures = await fetch(API_FEATURES);
    const features = await responseFeatures.json();

    const responsePricing = await fetch(API_PRICING);
    const pricing = await responsePricing.json();

    const questionsPricing = await fetch(API_QUESTIONS);
    const questions = await questionsPricing.json();

    if (!responseFeatures.ok || !responsePricing.ok || !responsePricing.ok) throw "Response not ok!"

    return { 
      props: { features, pricing, questions }
    }
  } catch (error) {
    return { notFound: true }
  }
}

export default Home;
