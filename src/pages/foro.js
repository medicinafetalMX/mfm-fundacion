import React from "react";
import SectionTitle from "../components/SectionTitle";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { graphql } from "gatsby";

const ForumPage = ({ data }) => {

  const datos = data.preguntas.edges;

  return (
    <Layout>
      <SEO title="Foro" />
      <div className="content-body about-page">
        <SectionTitle title="Foro" style={{ margin: 'none' }} />
        <Accordion allowZeroExpanded={true}>
          {datos.map(({ node }, index) => (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  {node.question}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <>
                  {documentToReactComponents(node.answer.json)}
                </>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
        <div>
          <br />
          <SectionTitle title="Contáctanos" />
          <form action="https://formsubmit.co/emmanuelestrada544@gmail.com" method="POST">

            <input className="form-styling" type="text" name="Nombre" placeholder="Nombre completo" required />
            <input className="form-styling" type="email" name="Email" placeholder="Correo electrónico" required />
            <textarea className="form-styling" name="Pregunta" placeholder="Déjanos tu pregunta" style={{ height: '120px' }} required></textarea>
            <input type="hidden" name="_template" value="box"></input>
            <div className="button-container">
              <center><button type="submit" className="button button-cta">Enviar</button></center>
            </div>
          </form>
        </div>

      </div>
    </Layout>
  )
}

export default ForumPage;

export const query = graphql`
  {
    preguntas: allContentfulForo (
      sort: { fields: [createdAt], order: DESC }
    ) {
      edges {
        node {
          answer {
            json
          }
          question
        }
      }
    }
  }
`