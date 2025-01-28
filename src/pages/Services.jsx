import React, { useEffect, useState } from "react";
import Head from '../components/Head';
import { Link } from "react-router-dom";

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

const Services = () => {
    const webpSupported = isWebpSupported();
    const servicesImage = `${import.meta.env.BASE_URL}images/services/services-bg.${webpSupported ? 'webp' : 'jpg'}`
    const backgroungImage = `${import.meta.env.BASE_URL}images/main/parallax-bg21.${webpSupported ? 'webp' : 'jpg'}`
    const imageCached = isImageCached(servicesImage);
    const backgroungImageCached = isImageCached(backgroungImage);

    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = servicesImage;
        link.setAttribute('fetchpriority', 'high'); // Устанавливаем высокий приоритет
        document.head.appendChild(link);
        return () => {
            document.head.removeChild(link); // Удаляем, если компонент размонтируется
        };
    }, [servicesImage]);

    return (
        <div>
            <Head
                title="Без долгов | Главная"
                description="Мы профессиональные арбитражные управляющие, Берём на себя Ваши заботы"
            />
            <section className="cover-background background-position-top top-space"
                style={{ backgroundImage: `url(${servicesImage})`, marginTop: "72px", visibility: "visible", padding: "130px" }}
            >
                <div className="opacity-medium bg-extra-dark-gray"></div>
                <div className="container position-relative">
                    <div className="row align-items-center">
                        <div className="row align-items-center">
                            <div className="col-12 d-flex flex-column text-center justify-content-center page-title-large padding-30px-tb">
                                <span className="d-block text-white-2 opacity6 alt-font margin-5px-bottom">Весь спектр услуг</span>
                                <h4 className="alt-font text-white-2 font-weight-600 mb-0">Арбитраж и банкротство</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 text-center margin-100px-bottom sm-margin-40px-bottom">
                            <div className="position-relative overflow-hidden w-100">
                                <span className="text-small text-outside-line-full alt-font font-weight-600 text-uppercase">Мы предоставляем следующие услуги</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 blog-content">
                            <ul className="blog-text blog-wrapper grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large">
                                <li className="grid-sizer"></li>
                                <li className="grid-item " >
                                    <Link to="/ourservices/Bankruptcy" aria-label="Банкротство юридических лиц и предпринимателей">
                                        <div className="blog-post blog-post-style7 border-all border-color-light-gray padding-eight-all lg-padding-ten-all sm-padding-30px-all bg-white h-100">

                                            <div className="post-details" style={{ maxHeight: "100px" }}>
                                                <span className="text-large alt-font margin-50px-bottom md-margin-30px-bottom d-block">Банкротство юридических лиц и предпринимателей</span>
                                            </div>
                                        </div></Link>
                                </li>
                                {/* <!-- end blog post item --> */}
                                {/* <!-- start blog post item --> */}
                                <li className="grid-item ">
                                    <Link to="/ourservices/subsidiary" aria-label="Защита от субсидиарной ответственности">
                                        <div className="blog-post blog-post-style7 border-all border-color-light-gray padding-eight-all lg-padding-ten-all sm-padding-30px-all bg-white h-100">
                                            <div className="post-details" style={{ maxHeight: "100px" }}>
                                                <span className="text-large alt-font margin-50px-bottom md-margin-30px-bottom d-block">Защита от субсидиарной ответственности</span>

                                            </div>
                                        </div></Link>
                                </li>
                                {/* <!-- end blog post item --> */}
                                {/* <!-- start blog post item --> */}
                                <li className="grid-item " >
                                    <a href="#">
                                        <div className="blog-post blog-post-style7 border-all border-color-light-gray padding-eight-all lg-padding-ten-all sm-padding-30px-all bg-white h-100">
                                            <div className="post-details" style={{ maxHeight: "100px" }}>
                                                <span className="text-large alt-font margin-50px-bottom md-margin-30px-bottom d-block">Защита при оспаривании сделок в банкротстве</span>
                                            </div>
                                        </div></a>
                                </li>
                                <li className="grid-item " >
                                    <a href="#">
                                        <div className="blog-post blog-post-style7 border-all border-color-light-gray padding-eight-all lg-padding-ten-all sm-padding-30px-all bg-white h-100">

                                            <div className="post-details" style={{ maxHeight: "100px" }}>
                                                <span className="text-large alt-font margin-50px-bottom md-margin-30px-bottom d-block">Включение в реестр требований кредиторов</span>
                                            </div>
                                        </div></a>
                                </li>
                                <li className="grid-item " >
                                    <a href="#">
                                        <div className="blog-post blog-post-style7 border-all border-color-light-gray padding-eight-all lg-padding-ten-all sm-padding-30px-all bg-white h-100">

                                            <div className="post-details" style={{ maxHeight: "100px" }}>
                                                <span className="text-large alt-font margin-50px-bottom md-margin-30px-bottom d-block">Жалобы и смена арбитражного управляющего</span>
                                            </div>
                                        </div></a>
                                </li>
                                <li className="grid-item " >
                                    <a href="#">
                                        <div className="blog-post blog-post-style7 border-all border-color-light-gray padding-eight-all lg-padding-ten-all sm-padding-30px-all bg-white h-100">

                                            <div className="post-details" style={{ maxHeight: "100px" }}>
                                                <span className="text-large alt-font margin-50px-bottom md-margin-30px-bottom d-block">Взыскание убытков с директора в банкротстве</span>
                                            </div>
                                        </div></a>
                                </li>

                                {/* <!-- end blog post item --> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </section >

            <section >
                <div className="container">
                    <div className="row row-cols-1 row-cols-lg-3 row-cols-sm-2 justify-content-center">
                        <div className="col md-margin-30px-bottom xs-margin-15px-bottom last-paragraph-no-margin" >
                            <div className="feature-box">
                                <div className="content">
                                    <div className="text-medium alt-font text-extra-dark-gray margin-10px-bottom md-margin-5px-bottom">Банкротство юридических лиц и предпринимателей</div>
                                </div>
                            </div>
                        </div>
                        <div className="col md-margin-30px-bottom xs-margin-15px-bottom last-paragraph-no-margin">
                            <div className="feature-box">
                                <div className="content">
                                    <div className="text-medium alt-font text-extra-dark-gray margin-10px-bottom md-margin-5px-bottom">Защита от субсидиарной ответственности</div>
                                </div>
                            </div>
                        </div>
                        <div className="col last-paragraph-no-margin" >
                            <div className="feature-box">
                                <div className="content">
                                    <div className="text-medium alt-font text-extra-dark-gray margin-10px-bottom md-margin-5px-bottom">Защита при оспаривании сделок в банкротстве</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div >
    );
};

export default Services;
