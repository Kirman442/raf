import React, { useEffect, useState } from "react";
import Head from '../components/Head';
import { Link } from "react-router-dom";
// import HomeGallery from "../components/HomeGallery";

import { LazyLoadComponent } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const isWebpSupported = () => {
    const elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d')) && elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

const isImageCached = (url) => {
    const img = new Image();
    img.src = url;

    return img.complete; // Вернет true, если изображение уже загружено
};

const Home = () => {
    const webpSupported = isWebpSupported();
    const gislogo = `${import.meta.env.BASE_URL}images/main/about-banner.${webpSupported ? 'webp' : 'jpg'}`
    const backgroungImage = `${import.meta.env.BASE_URL}images/main/parallax-bg21.${webpSupported ? 'webp' : 'jpg'}`
    const imageCached = isImageCached(gislogo);
    const backgroungImageCached = isImageCached(backgroungImage);

    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = gislogo;
        link.setAttribute('fetchpriority', 'high'); // Устанавливаем высокий приоритет
        document.head.appendChild(link);
        return () => {
            document.head.removeChild(link); // Удаляем, если компонент размонтируется
        };
    }, [gislogo]);

    return (
        <div>
            <Head
                title="Без долгов | Главная"
                description="Мы профессиональные арбитражные управляющие, Берём на себя Ваши заботы"
            />
            <section className="cover-background background-position-top top-space"
                style={{ backgroundImage: `url(${gislogo})`, marginTop: "72px", visibility: "visible", padding: "130px" }}
            >
                <div className="opacity-medium bg-extra-dark-gray"></div>
                <div className="container position-relative">
                    <div className="row align-items-center">
                        <div className="row align-items-center">
                            <div className="col-12 d-flex flex-column text-center justify-content-center page-title-large padding-30px-tb">
                                <span className="d-block text-white-2 opacity6 alt-font margin-5px-bottom">Мы команда профессиональных арбитражных управляющих</span>
                                <h4 className="alt-font text-white-2 font-weight-600 mb-0">Берём на себя Ваши заботы</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6 text-center md-margin-30px-bottomt wow animate__fadeInLeft">
                            {/* <img src="images/about-img3.jpg" alt="" className="border-radius-6 w-100" data-no-retina=""> */}
                            {/* <img className="border-radius-6 w-100" src='images/main/about-img3.jpg'
                                alt="Foto" data-no-retina /> */}
                            <img className="border-radius-6 w-100" src={`${import.meta.env.BASE_URL}images/main/about-img3.${webpSupported ? 'webp' : 'jpg'}`}
                                alt="Foto" data-no-retina />
                        </div>
                        <div className="col-lg-7 col-md-6 text-center text-md-start padding-eight-lr lg-padding-six-lr md-padding-15px-lr">
                            <span className="text-deep-pink alt-font margin-10px-bottom d-inline-block text-medium">Не беспокойтесь, Вы в надёжных руках</span>
                            <h6 className="alt-font text-extra-dark-gray">Мы заботимся об успехе наших клиентов от начала и до конца. Наш опыт помогает создавать решения.</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum is printing and typesetting simply dummy text.</p>
                            <Link className="btn btn-dark-gray btn-small text-extra-small btn-rounded margin-5px-top" to="Services" aria-label="Services link"><i className="margin-5px-right no-margin-left" aria-hidden="true"></i>Наши услуги</Link>
                            {/* <a href="services" className="btn btn-dark-gray btn-small text-extra-small btn-rounded margin-5px-top"><i className="fa-solid fa-circle-play icon-very-small margin-5px-right no-margin-left" aria-hidden="true"></i> Наши услуги</a> */}
                        </div>
                    </div>
                    <div className="divider-full margin-seven-bottom margin-three-top"></div>
                    <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 justify-content-center">
                        <div className="col-sm-8 md-margin-60px-bottom sm-margin-40px-bottom text-center text-md-start ">
                            <span className="text-extra-dark-gray alt-font text-large margin-15px-bottom d-block md-margin-5px-bottom">Расскажите, что случилось?</span>
                            <p className="w-90 md-w-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been standard dummy text ever since. Lorem Ipsum been the industry. Lorem Ipsum has been.</p>
                        </div>
                        <div className="col-sm-8 md-margin-60px-bottom sm-margin-40px-bottom text-center text-md-start " data-wow-delay="0.2s">
                            <span className="text-extra-dark-gray alt-font text-large margin-15px-bottom d-block md-margin-5px-bottom">Разработка стратегии</span>
                            <p className="w-90 md-w-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been standard dummy text ever since. Lorem Ipsum been the industry. Lorem Ipsum has been.</p>
                        </div>
                        <div className="col-sm-8 text-center text-md-start " data-wow-delay="0.4s">
                            <span className="text-extra-dark-gray alt-font text-large margin-15px-bottom d-block md-margin-5px-bottom">Нацеленность на результат</span>
                            <p className="w-90 md-w-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been standard dummy text ever since. Lorem Ipsum been the industry. Lorem Ipsum has been.</p>
                        </div>
                    </div>
                    {/* <div className="row row-cols-1 row-cols-lg-3 row-cols-sm-2 justify-content-center">
                        <div className="col md-margin-50px-bottom sm-margin-40px-bottom last-paragraph-no-margin">
                            <div className="feature-box-5 position-relative">
                                <i className="fas fa-desktop text-medium-gray icon-medium"></i>
                                <div className="feature-content">
                                    <div className="text-extra-dark-gray margin-10px-bottom alt-font font-weight-600">Digital Solutions</div>
                                    <p className="d-inline-block w-75 lg-w-100 xs-w-90">Lorem Ipsum is simply text the printing and typesetting standard industry.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col md-margin-50px-bottom sm-margin-40px-bottom last-paragraph-no-margin">
                            <div className="feature-box-5 position-relative">
                                <i className="icon-book-open text-medium-gray icon-medium"></i>
                                <div className="feature-content">
                                    <div className="text-extra-dark-gray margin-10px-bottom alt-font font-weight-600">SEO Marketing</div>
                                    <p className="d-inline-block w-75 lg-w-100 xs-w-90">Lorem Ipsum is simply text the printing and typesetting standard industry.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col last-paragraph-no-margin">
                            <div className="feature-box-5 position-relative">
                                <i className="icon-gift text-medium-gray icon-medium"></i>
                                <div className="feature-content">
                                    <div className="text-extra-dark-gray margin-10px-bottom alt-font font-weight-600">Creative Strategy</div>
                                    <p className="d-inline-block w-75 lg-w-100 xs-w-90">Lorem Ipsum is simply text the printing and typesetting standard industry.</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>

            <section className="lg-padding-two-lr md-no-padding-lr" style={{ backgroundImage: `url(${backgroungImage})`, visibility: "visible" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-sm-10 margin-six-bottom text-center last-paragraph-no-margin">
                            <div className="alt-font text-deep-pink margin-10px-bottom text-uppercase text-small">Больше причин доверить нам свои проблемы</div>
                            <h5 className="alt-font text-extra-dark-gray font-weight-400 mb-0">Сложные виды банкротств и поиск активов</h5>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-lg-3 row-cols-sm-2">
                        <div className="col margin-six-bottom md-margin-50px-bottom sm-margin-40px-bottom wow animate__fadeInUp last-paragraph-no-margin">
                            <div className="feature-box-5 position-relative">
                                <div className="feature-content">
                                    <div className="text-extra-dark-gray margin-10px-bottom alt-font font-weight-600">Банкротство физ лиц</div>
                                    <p className="d-inline-block sm-w-90">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col margin-six-bottom md-margin-50px-bottom sm-margin-40px-bottom wow animate__fadeInUp last-paragraph-no-margin">
                            <div className="feature-box-5 position-relative">
                                <div className="feature-content">
                                    <div className="text-extra-dark-gray margin-10px-bottom alt-font font-weight-600">Банкротство юр лиц</div>
                                    <p className="d-inline-block sm-w-90">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col margin-six-bottom md-margin-50px-bottom sm-margin-40px-bottom wow animate__fadeInUp last-paragraph-no-margin">
                            <div className="feature-box-5 position-relative">
                                <div className="feature-content">
                                    <div className="text-extra-dark-gray margin-10px-bottom alt-font font-weight-600">Поиск активов</div>
                                    <p className="d-inline-block sm-w-90">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col md-margin-50px-bottom sm-margin-40px-bottom wow animate__fadeInUp last-paragraph-no-margin">
                            <div className="feature-box-5 position-relative ">
                                <div className="feature-content">
                                    <div className="text-extra-dark-gray margin-10px-bottom alt-font font-weight-600">Арбитраж</div>
                                    <p className="d-inline-block sm-w-90">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col xs-margin-40px-bottom wow animate__fadeInUp last-paragraph-no-margin">
                            <div className="feature-box-5 position-relative">
                                <div className="feature-content">
                                    <div className="text-extra-dark-gray margin-10px-bottom alt-font font-weight-600">Кассация</div>
                                    <p className="d-inline-block sm-w-90">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col wow animate__fadeInUp last-paragraph-no-margin">
                            <div className="feature-box-5 position-relative">
                                <div className="feature-content">
                                    <div className="text-extra-dark-gray margin-10px-bottom alt-font font-weight-600">Реструктуризация долгов</div>
                                    <p className="d-inline-block sm-w-90">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div >
    );
};

export default Home;
