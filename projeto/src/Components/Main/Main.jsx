import React from "react";
import './Main.css';




export default function Main(){
    return( 

       
        <><section id="hero">
            <div className="hero-container">
                <h1>Bem vindo a agência Milo</h1>
                <h2>Facilidando sua vida</h2>

            </div>
        </section><>
                <main id="main">


                    <section id="about" className="about">
                        <div className="container">

                            <div className="section-title">
                                <h2>Sobre nos</h2>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 order-1 order-lg-2">
                                    
                                    </div>
                                <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1">
                                    <h3>Agência que facilita a vida do cliente</h3>
                                    <p className="fst-italic">
                                        Viagens mais baratas e comodidade
                                    </p>
                                    
                                    <p>
                                        Acreditamos que um bom serviço é a melhor maneira de fidelizar um cliente
                                    </p>
                                    <p>
                                        Sua viagem será mais segura e com facilidade no pagamento
                                    </p>
                                </div>
                            </div>

                        </div>
                    </section>


                    <section id="services" className="services section-bg">
                        <div className="container">

                            <div className="section-title">
                                <h2>Serviços</h2>
                                <p>Confira alguns dos nossos serviços.</p>
                            </div>

                            <div className="row">

                                <div className="col-lg-4 col-md-6 icon-box">
                                    <div className="icon"><i className="bi bi-images"></i></div>
                                    <h4 className="title"><a href="">Parcelameto</a></h4>
                                    <p className="description">Você pode parcelar em até 12x a sua viagem</p>
                                </div>
                                <div className="col-lg-4 col-md-6 icon-box">
                                    <div className="icon"><i className="bi bi-sliders"></i></div>
                                    <h4 className="title"><a href="">Aplicativo</a></h4>
                                    <p className="description">Você terá acesso a o aplicativo na qual podera entrar em contato direto com o pós venda</p>
                                </div>
                                <div className="col-lg-4 col-md-6 icon-box">
                                    <div className="icon"><i className="bi bi-building"></i></div>
                                    <h4 className="title"><a href="">Agência</a></h4>
                                    <p className="description">A Agência conta com cobertura de seguro viagem.</p>
                                </div>
                            </div>

                        </div>
                    </section>




                    <section id="portfolio" className="portfolio">
                        <div className="container">



                            <div className="row portfolio-container">

                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                        <img src="../assets/css/img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""/>
                                            <div className="portfolio-info">
                                                <h3><a href="../css/assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1">App 1</a></h3>
                                                <div>
                                                    <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bi bi-plus"></i></a>
                                                    <a href="portfolio-details.html" title="Details"><i className="bi bi-link"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""/>
                                            <div className="portfolio-info">
                                                <h3><a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3">Web 3</a></h3>
                                                <div>
                                                    <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bi bi-plus"></i></a>
                                                    <a href="portfolio-details.html" title="Details"><i className="bi bi-link"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt=""/>
                                            <div className="portfolio-info">
                                                <h3><a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2">App 2</a></h3>
                                                <div>
                                                    <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bi bi-plus"></i></a>
                                                    <a href="portfolio-details.html" title="Details"><i className="bi bi-link"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <div className="portfolio-wrap">
                                        <img src="../css/assets/img/portfolio/.jpg" className="img-fluid" alt=""/>
                                            <div className="portfolio-info">
                                                <h3><a href="../../../assets/img/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2">Card 2</a></h3>
                                                <div>
                                                    <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bi bi-plus"></i></a>
                                                    <a href="portfolio-details.html" title="Details"><i className="bi bi-link"></i></a>
                                                </div>

                                            </div>
                                        </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                    <div className="portfolio-wrap">
                                        <img src="../css/assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt=""/>
                                            <div className="portfolio-info">
                                                <h3><a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2">Web 2</a></h3>
                                                <div>
                                                    <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bi bi-plus"></i></a>
                                                    <a href="portfolio-details.html" title="Details"><i className="bi bi-link"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                        <img src="../css/assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt=""/>
                                            <div className="portfolio-info">
                                                <h3><a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3">App 3</a></h3>
                                                <div>
                                                    <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bi bi-plus"></i></a>
                                                    <a href="portfolio-details.html" title="Details"><i className="bi bi-link"></i></a>
                                                </div>
                                            </div>
                                       </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <div className="portfolio-wrap">
                                        <img src="../css/assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt=""/>
                                            <div className="portfolio-info">
                                                <h3><a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1">Card 1</a></h3>
                                                <div>
                                                    <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bi bi-plus"></i></a>
                                                    <a href="portfolio-details.html" title="Details"><i className="bi bi-link"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <div className="portfolio-wrap">
                                        <img src="../css/assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt=""/>
                                            <div className="portfolio-info">
                                                <h3><a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3">Card 3</a></h3>
                                                <div>
                                                    <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bi bi-plus"></i></a>
                                                    <a href="portfolio-details.html" title="Details"><i className="bi bi-link"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                    <div className="portfolio-wrap">
                                        <img src="../css/assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt=""/>
                                            <div className="portfolio-info">
                                                <h3><a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 1">Web 1</a></h3>
                                                <div>
                                                    <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 1"><i className="bi bi-plus"></i></a>
                                                    <a href="portfolio-details.html" title="Details"><i className="bi bi-link"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                </div>

                            </div>

                        </div>
                    </section>



                    <section id="team" className="team">
                        <div className="container">

                            <div className="section-title">
                                <h2>Nosso Time</h2>
                                <p>Equipe altamente qualificada pronta para lhe auxiliar em sua jornada.</p>
                            </div>

                            <div className="row gy-4">
                                <div className="col-lg-4 col-md-6">
                                    <div className="member">
                                        <img src="../css/assets/img/team/team-1.jpg" alt=""/>
                                            <h4>Milo White</h4>
                                            <span>Vendas</span>
                                            <p>
                                                Facilidade e condições de pagamento para curtir sua viagem sem aperto
                                            </p>
                                            <div className="social">
                                                <a href=""><i className="bi bi-twitter"></i></a>
                                                <a href=""><i className="bi bi-facebook"></i></a>
                                                <a href=""><i className="bi bi-instagram"></i></a>
                                                <a href=""><i className="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="member">
                                        <img src="../css/assets/img/team/team-2.jpg" alt=""/>
                                            <h4>Ginger Silva</h4>
                                            <span>Telemarketing</span>
                                            <p>
                                                Podera entrar em contato com nossa equipe de Telemarketing e ter serviço agilizado
                                            </p>
                                            <div className="social">
                                                <a href=""><i className="bi bi-twitter"></i></a>
                                                <a href=""><i className="bi bi-facebook"></i></a>
                                                <a href=""><i className="bi bi-instagram"></i></a>
                                                <a href=""><i className="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="member">
                                        <img src="../css/assets/img/team/team-3.jpg" alt=""/>
                                            <h4>Downy Silveira</h4>
                                            <span>Roteiro</span>
                                            <p>
                                                Podera requisitar nosso time e pré definir um roteiro que masi lhe agrade
                                            </p>
                                            <div className="social">
                                                <a href=""><i className="bi bi-twitter"></i></a>
                                                <a href=""><i className="bi bi-facebook"></i></a>
                                                <a href=""><i className="bi bi-instagram"></i></a>
                                                <a href=""><i className="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                </div>

                            </div>

                        </div>
                    </section>


                    <section id="contact" className="contact section-bg">
                        <div className="container">

                            <div className="section-title">
                                <h2>Entre em contato</h2>
                                <p>Abaixo está nossos canais de comunicação </p>
                            </div>

                            <div className="row">



                                <div className="col-lg-3 col-md-6">
                                    <div className="info">
                                        <div>
                                            <i className="bi bi-geo-alt"></i>
                                            <p>Avenida paulista 1245<br/>São Paulo, Sp </p>
                                        </div>

                                        <div>
                                            <i className="bi bi-envelope"></i>
                                            <p>info@example.com</p>
                                        </div>

                                        <div>
                                            <i className="bi bi-phone"></i>
                                            <p> (11) 98000 44444 </p>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-lg-5 col-md-12">
                                    <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                        <div className="form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Seu nome" required/>
                                            </div>
                                        <div className="form-group mt-3">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Seu Email" required/>
                                            </div>
                                        <div className="form-group mt-3">
                                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Titulo" required/>
                                            </div>
                                        <div className="form-group mt-3">
                                            <textarea className="form-control" name="message" rows="5" placeholder="Mensagem" required></textarea>
                                        </div>
                                        <div className="my-3">
                                            <div className="loading">Loading</div>
                                            <div className="error-message"></div>
                                            <div className="sent-message">Your message has been sent. Thank you!</div>
                                        </div>
                                        <div className="text-center"><button type="submit">Enviar mensagem</button></div>
                                    </form>
                                </div>

                            </div>

                        </div>
                    </section>

                    


                </main>

            </><footer id="footer">
                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Agencia MIlo</span></strong>
                    </div>
                    <div className="credits">


                    </div>
                </div>
            </footer><a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a><script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script><script src="assets/vendor/glightbox/js/glightbox.min.js"></script><script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script><script src="assets/vendor/swiper/swiper-bundle.min.js"></script><script src="assets/vendor/php-email-form/validate.js"></script><script src="assets/js/main.js"></script></>
      
     

    );
}