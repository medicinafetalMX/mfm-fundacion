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
        <SectionTitle title="Foro" />
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