import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "./layouts/Layout";
import {useState} from "react";
import {ContactForm} from "@/types";
import { send } from "@/services/emailjs.service";

const ContactPage: NextPage = () => {
  const [form, setForm] = useState<ContactForm>({
    fullName: "",
    email: "",
    phoneNumber: "",
    coupon: "",
    hasPartitaIVA: "",
    privacy: false
  })

  const [privacy, setPrivacy] = useState<boolean>(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (privacy) {
      const { fullName, email, phoneNumber, coupon, hasPartitaIVA } = form;
      send('Daniele', fullName, email, phoneNumber, coupon || '', hasPartitaIVA)
      .then(() => {
        console.log("Email inviata!");
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.currentTarget;
    console.log(name, value);
    setForm({
      ...form,
      [name]: value
    });
  }

  return (
    <>
      <Head>
        <title>EasyFisco - Contatti</title>
        <meta name="description" content="EasyFisco gestisce i clienti e la fiscalità per te, per darti modo di dedicare il tuo tempo alle cose più importanti" />
      </Head>
      <Layout>
        <header id="header" className="header">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="text-container">
                  <h1 className="large">Vuoi saperne di più? <span>Contattaci</span></h1>
                  <p className="large">Siamo disponobili 24/7 per rispondere ad ogni tua domanda</p>
                  <a href="#contact-form" className="btn-solid-lg">Vai al form</a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="image-container">
                  <Image 
                    className="img-fluid"
                    src="/images/contact-us.svg"
                    width={400}
                    height={500}
                    layout="responsive"
                    alt="Contattaci"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
        <div id="contact-form" className="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2>Compila il form <span>per essere ricontattato</span></h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col mb-4 text-start">
                      <label htmlFor="fullName" className="form-label">Nome e cognome *</label>
                      <input 
                        id="fullName"
                        type="text"
                        className="form-control"
                        name="fullName"
                        placeholder="es. Mario Verdi"
                        aria-label="Nome e cognome"
                        required
                        value={form.fullName}
                        onChange={handleChange}
                      />
                  </div>
                    <div className="col mb-4 text-start">
                      <label htmlFor="email" className="form-label">Email *</label>
                      <input
                        id="email"
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="es. mario.verdi@gmail.com"
                        aria-label="Email"
                        required
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col mb-4 text-start">
                      <label htmlFor="phoneNumber" className="form-label">Numero di telefono *</label>
                      <input
                        id="phoneNumber"
                        type="text"
                        className="form-control"
                        name="phoneNumber"
                        placeholder="Es. 123 456 6789"
                        aria-label="Telefono"
                        required
                        value={form.phoneNumber}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col mb-4 text-start">
                      <label htmlFor="coupon" className="form-label">Coupon</label>
                      <input
                        id="coupon"
                        type="text"
                        className="form-control"
                        name="coupon"
                        placeholder=""
                        aria-label="Coupon"
                        value={form.coupon}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-check text-start">
                    <input
                      id="noPartitaIVA"
                      type="radio"
                      className="form-check-input"
                      name="hasPartitaIVA"
                      value="no"
                      checked={form.hasPartitaIVA==="no"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="noPartitaIVA"> 
                       Non ho un partita IVA e vorrei aprirne una
                    </label>
                  </div>
                  <div className="form-check text-start">
                    <input
                      id="siPartitaIVA"
                      type="radio"
                      className="form-check-input"
                      name="hasPartitaIVA"
                      value="si"
                      checked={form.hasPartitaIVA==="si"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="siPartitaIVA"> 
                       Ho già una partita IVA e vorrei passare a EasyFisco
                    </label>
                  </div>
                  <div className="mt-4 form-check text-start">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="privacy"
                      id="privacy"
                      onChange={() => setPrivacy(!privacy)}
                    />
                    <label className="form-check-label" htmlFor="privacy">
                      Ho letto e accetto l'<a href="informativa-privacy-EasyFisco.pdf">informativa sulla Privacy</a> *
                    </label>
                  </div>
                  <button type="submit" className="btn-solid-lg">INVIA</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default ContactPage;
