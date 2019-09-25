import React from "react";
import SectionTitle from "../components/SectionTitle";
import Layout from "../components/layout";
import SEO from "../components/seo";

const EventsPage = () => (
  <Layout>
    <SEO title="Eventos" />
    <div className="content-body events-page">
      <SectionTitle title="Próximamente" />
    </div>
  </Layout>
)

export default EventsPage;