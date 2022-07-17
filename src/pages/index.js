import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';

import logo from '../assets/img/website-icon.png';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <img src={logo} width="220" />
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic1} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Precios Acecibles</h2>
            <p>
              Aprovecha nuestra oferta de sitios webs informativos Dominio
              (.xyz), Host y Certificados SSL por solo 7500$
              <br />
              Tambien consultanos por ofertas en: Catálogos de Productos con
              artículos/images, Blogs, Sistemas para organizarte, Tiendas
              virtuales, Chatbots entre otros.
            </p>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic2} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Rapidez</h2>
            <p>
              Desarrollamos y subimos tu proyecto lo mas rapido posible.
              <br />
              Atendemos tus urgencias, migraciones, caída de servidores,
              instancias.
            </p>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic3} alt=""/>
          </a>
          <div className="content">
            <h2 className="major">Más clientes</h2>
            <p>
              Obtenga más clientes, con nuestra forma de hacer las páginas,
              (SEO) aparece en los primeros lugares en google.
              <br />O sino Usando publicidad en google, facebook, instagram o
              youtube.
            </p>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Te ofrecemos:</h2>
          <p>
            Estamos capacitados con conocimientos en tecnologías modernas y
            escalables. Usamos las mejores herramientas adaptandonos a tus
            necesidades y ahorrandote en costos. <br />
            Experiencia y responsabilidad.
          </p>
          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Web</h3>
              <p>
                Páginas webs informativas, tiendas virtuales, galería de
                imágenes, blogs, automatización, chatbots, SEO y mucho más.
              </p>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">Frontend</h3>
              <p>
                Html5, Css3 y Javascript. Consumo de APIs, Bootstrap, React,
                herramientas para sitios web estaticos como Gatsby y Hugo.
              </p>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic6} alt="" />
              </a>
              <h3 className="major">Backend</h3>
              <p>
                Creación de APis, Base de datos Relacionales y No-Relacionales,
                ORMs, Tokens de seguridad, Testing y Documentación.
              </p>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic7} alt="" />
              </a>
              <h3 className="major">SRE</h3>
              <p>
                Contenerización de Aplicaciones, Hosting, ServerLess,
                Certificados SSL, DNS, Sistemas Operativos, Servicios de AWS
                (EC, Lightsail, EC2, S3, Lambda, DynamoDB entre otras).
              </p>
            </article>
          </section>
          <ul className="actions">
            <li>
              <a href="https://github.com/dani54196" className="button">
                Y mucho mas
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
