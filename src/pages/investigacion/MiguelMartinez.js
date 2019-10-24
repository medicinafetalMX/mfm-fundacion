import React, { Component } from 'react';
import SectionTitle from '../../components/SectionTitle';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import PrimaryHeader from '../../components/primaryHeader';

import miguel from "../../images/DrMiguel.png";

class MiguelMartinez extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Dr. Miguel Martínez" />
        <div className="content-body doctor-page">
          <SectionTitle title="Dr. Miguel Martínez Rodríguez" />
          <div className="doctor-profile row">
            <img src={miguel} alt="Dr. Miguel Martínez" />
            <div className="content">
              <p>
                Medico fetal en la unidad de Investigación en medicina y cirugía fetal en el Hospital de Especialidades del Niño y la Mujer, Querétaro.
              </p>
            </div>
          </div>

          <PrimaryHeader title="Trayectoria Académica" />
          <p>
            <b>LASUS neurosonografía fetal</b>, Miami Fl, 2018.
            <br /><br />
            <b>Rotación clínica neurosonografía fetal.</b> ( 2018) Hospital Clinic / San Joan de Deu Barcelona
            <br /><br />
            <b>Sub-especialidad en Medicina Materno Fetal.</b> Periodo 2013-2015, Hospital Civil de Guadalajara Dr. Juan I Menchaca con validez por la Universidad de Guadalajara. Centro Universitario de ciencias de la salud.
            <br /><br />
            <b>Especialidad en Ginecología y Obstetricia. </b> Periodo 2009-2013 Hospital Civil de Guadalajara Dr. Juan I Menchaca con validez por la Universidad de Guadalajara. Centro Universitario de ciencias de la salud.
            <br /><br />
            <b>Médico, cirujano y partero.</b> Centro Universitario de Ciencias de la Salud, (CUCS) Universidad de Guadalajara. Periodo 2001 – 2005
            <br /><br />
            <b>Diplomado en Investigación Clínica.</b> Universidad de Guadalajara.
            <br /><br />
          </p>
          <PrimaryHeader title="Asociaciones Médicas" />
          <p>
            <ul>
              <li>Colegio Mexicano de Especialistas en Ginecología y Obstetricia (COMEGO)
              </li>
              <li>Colegio de Ginecología y Obstetricia de Querétaro
              </li>
              <li>Miembro Federado Activo del colegio de Ginecología y Obstetricia</li>
              <li>Miembro de la Sociedad de Medicina Materno Fetal del Estado de Jalisco </li>
              <li>Certificado por la Fetal Medicine Foundation (U.K.)I.D.119993 </li>
              <li>Evaluación de primer trimestre Longitud Cervical Doppler</li>
            </ul>
          </p>
          <br />
          <PrimaryHeader title="Distinciones" />
          <p>
            Experto en ecografía fetal avanzada, Co-Autor de artículos científicos en revistas internacionales relacionados a patología fetal.
          </p>
          <p>
            Profesor invitado en la residencia de especialidad de Ginecología y Obstetricia Secretaria de Salud, Hospital de Especialidades del Niño y la mujer.
          </p>
          <p>
            Miembro activo del colegio de Ginecología y Obstetricia del estado de Jalisco.
          </p>
          <p>
            Miembro activo de la sociedad de medicina materno fetal del estado de Jalisco.
          </p>
          <p>
            Profesor adjunto curso de ecocardiografía fetal, sept 2018, Querétaro.
          </p>
          <p>
            Profesor adjunto curso de procedimientos invasivos, Querétaro 2018.
          </p>
          <p>
            Profesor adjunto curso de Doppler fetal, Querétaro 2018.
          </p>
          <p>
            Profesor adjunto curso de primer trimestre, Querétaro 2018.
          </p>
          <p>
            Profesor invitado Diplomado de ultrasonido obstétrico, Universidad de Guadalajara: 2017-2018.
          </p>
          <p>
            Profesor adjunto en el tercer curso teórico practico Ultrasonido Doppler en Medicina Materno Fetal, avalado por la Sociedad de Medicina Materno Fetal del estado de Jalisco AC. 26 de noviembre 2016.
          </p>
          <p>
            Conferencista en el tercer curso teórico Practico de Ultrasonido Doppler en Medicina Fetal con el tema “Presentación de casos Clínicos” avalado por la Sociedad de Medicina Materno Fetal del Estado de Jalisco AC. Noviembre 2016. 
          </p>
          <p>
            Conferencista en el tercer curso teórico Practico de Ultrasonido Doppler en Medicina Fetal con el tema “Doppler en diagnóstico Prenatal” avalado por la Sociedad de Medicina Materno Fetal del Estado de Jalisco AC. Noviembre 2016.
          </p>
          <p>
            Conferencista en el tercer curso teórico Practico de Ultrasonido Doppler en Medicina Fetal con el tema “Utilidad del Doppler durante el trabajo de parto” avalado por la Sociedad de Medicina Materno Fetal del Estado de Jalisco AC. Noviembre 2016. 
          </p>
          <p>
            Conferencista en el tercer curso teórico Práctico de Ultrasonido Doppler en Medicina Fetal con el tema “Doppler de arterias uterinas en la predicción de preeclampsia y RCIU”. Noviembre 2016.
          </p>
          <br />
          <br />

        </div>
      </Layout>
    )
  }
}

export default MiguelMartinez;