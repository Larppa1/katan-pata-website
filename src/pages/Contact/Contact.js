import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

export default function Contact() {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_dqrnhat', 'template_pquqfst', form.current, 'n5MdbvlDxAKYVvX49')
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })
    }

    if(window.innerWidth < 768) {
        return(
            <div className="container">
                <header>
                    <Navbar />
                </header>
                <main>
                    <section id='contactMainContent'>
                        <article className='prose'>
                            <h1 style={{textAlign: 'center'}}>Ota yhteyttä</h1>
                            <h2 style={{textAlign: 'center'}}>Katariina Juva<br/>
                                040 56 44 049<br/>
                                katanpata@gmail.com
                            </h2>
                        </article>
                    </section>
                    <section>
                        <article id='feedbackContainer' className='prose'>
                            <h2>Anna palautetta!</h2>
                            <h4>Haluamme kuulla, miten olemme onnistuneet palveluiden tarjonnassa. Kaikki palautteet ovat nimettömiä, eikä niitä voida yhdistää kehenkään henkilöön.</h4>
                            <form ref={form} onSubmit={sendEmail}>
                                <textarea id='message' className="textarea textarea-bordered" placeholder="Viesti" name="message"></textarea>
                                <button className='btn' type='submit'>Lähetä</button>
                            </form>
                        </article>
                    </section>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }else {
        return(
            <div className="container">
                <header>
                    <Navbar />
                </header>
                <main>
                    <section id='contactMainContent'>
                        <article className='prose'>
                            <h1 style={{textAlign: 'center'}}>Ota yhteyttä</h1>
                            <h2 style={{textAlign: 'center'}}>Katariina Juva<br/>
                                040 56 44 049<br/>
                                katanpata@gmail.com
                            </h2>
                        </article>
                    </section>
                    <section>
                        <article id='feedbackContainer' className='prose'>
                            <h2>Anna palautetta!</h2>
                            <h4>Haluamme kuulla, miten olemme onnistuneet palveluiden tarjonnassa. Kaikki palautteet ovat nimettömiä, eikä niitä voida yhdistää kehenkään henkilöön.</h4>
                            <form ref={form} onSubmit={sendEmail}>
                                <textarea id='message' className="textarea textarea-bordered" placeholder="Viesti" name="message"></textarea>
                                <button className='btn' type='submit'>Lähetä</button>
                            </form>
                        </article>
                    </section>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}