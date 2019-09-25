import React from "react";
import SectionTitle from "../components/SectionTitle";
import Layout from "../components/layout";
import SEO from "../components/seo";

const ForumPage = () => (
  <Layout>
    <SEO title="Foro" />
    <div className="content-body about-page">
      <SectionTitle title="Foro" />
      <p>
        Déjanos tus preguntas frecuentes y uno de nuestros especialistas las responderá para futuras consultas.
      </p>
    </div>
  </Layout>
)

export default ForumPage;