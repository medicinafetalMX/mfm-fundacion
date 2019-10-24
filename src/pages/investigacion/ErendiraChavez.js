import React, { Component } from 'react';
import SectionTitle from '../../components/SectionTitle';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import PrimaryHeader from '../../components/primaryHeader';

import erendira from "../../images/DraErendira.png";

class ErendiraChavez extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Dr. Eréndira Chávez" />
        <div className="content-body doctor-page">
          <SectionTitle title="Dra. Eréndira Leticia Chávez González" />
          <div className="doctor-profile center-profile row">
            <img src={erendira} alt="Dra. Erendira Chávez" />
          </div>

          <PrimaryHeader title="Trayectoria Académica" />
          <p>
            <b>Doctorado en Farmacología.</b> 2013 (Titulada). Centro Universitario de Ciencias de la Salud, (CUCS)  
            <br /><br />
            <b>Maestría en Farmacología.</b> 2011 (Titulada). Centro Universitario de Ciencias de la Salud, (CUCS)
            <br /><br />
            <b>Médico,  cirujano y partero.</b> Centro Universitario de Ciencias de la Salud, (CUCS)  Universidad de Guadalajara.   Periodo 2001 – 2005
            <br /><br />
            <b>Internado. </b> Unidad móvil del Centro de Salud Guachinango,  Jalisco, SSA. Periodo 2006
            <br /><br />
          </p>
          <PrimaryHeader title="Asociaciones Médicas" />
          <p>
            <ul>
              <li>Sociedad Alumnos y Egresados del Doctorado en Farmacología
              </li>
            </ul>
          </p>
          <br />
          <PrimaryHeader title="Publicaciones" />
          <p>
            <ol>
              <li>Manifestaciones clínicas reumáticas y marcadores de autoinmunidad en pacientes con infección por virus de hepatitis C. Publicado</li>
              <li>Insertion/deletion polymorphism of the angiotensin-converting enzyme gene in lupus nephritis among Mexicans. Immunopharmacol Immunotoxicol. 2013 Feb; 35(1): 174-80 PMID 23137230</li>
              <li>Report of pure 9p trisomy derived from a terminal balanced unreciprocal translocation. Genetic Counseling, 2014; 25 (3): 289-29. PMID 25365851</li>
            </ol>
          </p>
          <PrimaryHeader title="Distinciones" />
          <p>
            Ponente en el la jornada de actualización 2016 del programa de salud materna y perinatal “Mortalidad Materna”.
          </p>
          <p>
            Ponente en el curso de actualización en farmacología para enfermeras 2008 de la clínica 46 del  IMSS “Tratamiento de los trastornos degenerativos del sistema nervioso central”.
          </p>
          <p>
            Ponente en el curso de actualización en farmacología para enfermeras 2008 de la clínica 46 del  IMSS “Fármacos de uso sistémico que se eliminan por piel”.
          </p>
          <p>
            Ponente en curso de actualización en farmacología para enfermeras 2009 de la clínica 46 del  IMSS “Bases fisiológicas y fármacos utilizados en el sistema tegumentario”.
          </p>
          <p>
            Presentación en cartel en el marco del XXXIV Congreso Nacional de Genética Humana “Frecuencia de polimorfismo C3435T del gen MDR1 en pacientes con AR” realizado en Tuxtla Gutiérrez, Chiapas, noviembre 11 al 14 del 2009. 
          </p>
          <p>
            Ponente en el curso monográfico “Farmacología para enfermeras 2010” del CMNO del IMSS.
          </p>
          <p>
            Ponente en sesión simultánea en el marco del XXXVIII congreso mexicano de reumatología 2010.  “Frecuencia del polimorfismo C3435T del gen MDR1 en pacientes con AR y población general”.
          </p>
          <p>
            Ponente en el curso monográfico “Farmacología para enfermeras 2011” del CMNO del IMSS “Corticosteroides”.
          </p>
          
          <br />
          <br />

        </div>
      </Layout>
    )
  }
}

export default ErendiraChavez;