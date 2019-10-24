import React, { Component } from 'react';
import SectionTitle from '../../components/SectionTitle';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import PrimaryHeader from '../../components/primaryHeader';

import monica from "../../images/DraMonica.png";

class MonicaCruz extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Dra. Mónica Cruz" />
        <div className="content-body doctor-page">
          <SectionTitle title="Dra. Mónica Cruz" />
          <div className="doctor-profile row">
            <img src={monica} alt="Dr. Rogelio Cruz" />
            <div className="content">
              <p>
                Investigador Nacional Nivel 2. Sistema Nacional de Investigadores (SNI), Consejo Nacional de Ciencia y Tecnología (CONACyT), México.
              </p>
              <p>
                Revisora Científica de revistas de diferentes especialidades: PLOS One, Journal of American Society of Echocardiography, Ultrasound in Obstetrics and Gynecology, Fetal Diagnosis and Therapy, Gynecologic and Obstetric Investigation, Prenatal Diagnosis y Ginecología y Obstetricia de México.
              </p>
            </div>
          </div>
          
          <PrimaryHeader title="Trayectoria Académica" />
          <p>
            <b>Ginecología y Obstetricia</b>, Instituto Nacional de Perinatología “Isidro Espinosa de los Reyes”, Ciudad de México (2003-2007).
            <br /><br />
            <b>Medicina Materno-Fetal.</b> Instituto Nacional de Perinatología “Isidro Espinosa de los Reyes”, Ciudad de México (2007-2009).
            <br /><br />
            <b>Maestría en Investigación en Ciencias Clínicas.</b> Universidad de Barcelona, España (2009-2010).
            <br /><br />
            <b>Doctorado Internacional con Mención “Excel·lent Cum Laude”. </b> Universidad de Barcelona, España (2010-2013).
            <br /><br />
            <b>Estancia Postdoctoral.</b> Hospital Vall d’Hebrón – Universidad Autónoma de Barcelona, España (2014-2015).
            <br /><br />
            <b>Diplomatura en Diseño y Estadística en Ciencias de la Salud.</b> Universidad Autónoma de Barcelona, España (2009-2013).
            <br /><br />
          </p>
          <PrimaryHeader title="Certificaciones" />
          <p>
            <b>Especialidad en Ginecología y Obstetricia.</b> Consejo Mexicano de Ginecología y Obstetricia.
            <br /><br />
            <b>Especialidad en Medicina Materno-Fetal.</b> Consejo Mexicano de Ginecología y Obstetricia.
            <br /><br />
            <b>Ultrasonido de 11-14 semanas, longitud cervical y ultrasonido Doppler.</b> Fetal Medicine Foundation, Londres, Reino Unido.
            <br /><br />
          </p>
          <PrimaryHeader title="Asociaciones Médicas" />
          <p>
            <ul>
              <li>Colegio de Médicos Especialistas en Ginecología y Obstetricia de Querétaro (CMEGOQ).
              </li>
              <li>Miembro de la “International Society in Ultrasound in Obstetrics and Gynecology (ISUOG)”.
              </li>
              <li>Society for Maternal-Fetal Medicine (SMFM).</li>
            </ul>
          </p>
          <br />
          <PrimaryHeader title="Publicaciones" />
          <p>
            Ha publicado varios artículos originales en revistas indexadas con factor de impacto (19 en PubMed) y 10 capítulos en los siguientes libros:
          </p>
          <ol>
            <li>J. Copel, ed 2012. Obstetric Imaging: Expert Radiology Series. Saunders Title: Elsevier. ISBN: 978-14-3772-556-8.</li>
            <li>A. Galindo, ed 2014. Cardiología Fetal. Marbán Libros. ISBN: 978-84-7101-969-1.</li>
            <li>O. Dueñas, ed 2015. Manual de Obstetricia y Procedimientos Medicoquirúrgicos. McGraw Hill Interamericana. ISBN: 978-60-7151-217-8.</li>
            <li>Copel, Ed 2017. Obstetric Imaging: Fetal Diagnosis and Care. Saunders Title: Elsevier. ISBN: 978-03-2344-548-1.</li>
          </ol>
          <PrimaryHeader title="Distinciones" />
          <p>
            Mención Honorífica en la Especialidad de Ginecología y Obstetricia. Instituto Nacional de Perinatología, México, D.F., México.
          </p>
          <p>
            Mención “Excel·lent Cum Laude”, Doctorat Medicina. Universitat de Barcelona, España.
          </p>
          <p>
            Mención “Doctor Internacional”, Doctorat Medicina. Universitat de Barcelona, España.
          </p>
          <p>
            Best Free Communication Award.  OP01.06: Cardiovascular parameters in the prediction of mortality in early-onset intrauterine growth restriction. 20th World Congress on Ultrasound in Obstetrics and Gynecology, Praga, República Checa. Abstract: Ultrasound Obstet Gynecol. 2010;36:53.
          </p>
          <p>
            Best Free Communication Award.  OP21.02: Fetal cardiovascular programming in growth restricted 6 month-old infants with and without catch-up growth. 24th World Congress on Ultrasound in Obstetrics and Gynecology, Barcelona, España. Abstract: Ultrasound Obstet Gynecol. 2014;44:127.
          </p>
          <p>
            Top Abstract Award. 01. Fetal growth restriction induces different phenotypes of cardiac remodelling. 26th World Congress on Ultrasound in Obstetrics and Gynecology, Roma, Italia. Abstract: Ultrasound Obstet Gynecol. 2016;48:1.
          </p>
          <PrimaryHeader title="Revisor de Artículos en Revistas Médicas" />
          <ul>
            <li>Journal of the American Society of Echocardiography; impact factor 6.852</li>
            <li>Ultrasound in Obstetrics and Gynecology; impact factor 4.254.</li>
            <li>PLOS ONE; impact factor 3.534.</li>
            <li>Prenatal Diagnosis; impact factor 2.514.</li>
            <li>Fetal Diagnosis and Therapy; impact factor 2.295.</li>
            <li>BMC Pregnancy and Childbirth; impact factor 2.180.</li>
            <li>Journal of Perinatal Medicine; impact factor 1.798.</li>
            <li>European Journal of Obstetrics, Gynecology, and Reproductive Biology; impact factor 1.662.</li>
            <li>Gynecologic and Obstetric Investigation; impact factor 1.251.</li>
            <li>Ginecología y Obstetricia de México.</li>
            <li>Revisor de otros documentos médicos </li>
            <li>Guía de Práctica Clínica: Prevención primaria y tamizaje del parto pretérmino en el primer nivel de atención; Catálogo Maestro de Guías de Práctica Clínica SS-11808.</li>
          </ul>
          <br />
          <br />

        </div>
      </Layout>
    )
  }
}

export default MonicaCruz;