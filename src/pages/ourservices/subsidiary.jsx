import React, { useEffect, useState } from "react";
import Head from '../../components/Head';

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

const Subsidiary = () => {
    const webpSupported = isWebpSupported();
    const bankruptImage = `${import.meta.env.BASE_URL}images/services/imageBankrupt450.${webpSupported ? 'webp' : 'jpg'}`
    const backgroungImage = `${import.meta.env.BASE_URL}images/main/parallax-bg21.${webpSupported ? 'webp' : 'jpg'}`
    const imageCached = isImageCached(bankruptImage);
    const backgroungImageCached = isImageCached(backgroungImage);

    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = bankruptImage;
        link.setAttribute('fetchpriority', 'high'); // Устанавливаем высокий приоритет
        document.head.appendChild(link);
        return () => {
            document.head.removeChild(link); // Удаляем, если компонент размонтируется
        };
    }, [bankruptImage]);

    return (
        <div>
            <Head
                title="Без долгов | Главная"
                description="Мы профессиональные арбитражные управляющие, Берём на себя Ваши заботы"
            />
            <section className="cover-background background-position-top top-space"
                style={{ backgroundImage: `url(${bankruptImage})`, marginTop: "72px", visibility: "visible", padding: "130px" }}
            >
                <div className="opacity-medium bg-extra-dark-gray"></div>
                <div class="container-fluid padding-five-lr">
                    <div class="row justify-content-end">
                        <div class="col-xxl-5 col-xl-6 col-lg-7">
                            <div class="padding-ten-all md-padding-70px-all sm-padding-25px-all bg-white box-shadow-light">
                                <i class="fa-solid fa-quote-left text-deep-pink icon-extra-large margin-5px-bottom"></i>
                                <p class="text-extra-dark-gray margin-50px-bottom md-margin-20px-bottom alt-font">Hello, I'm a UI/UX Designer &amp; Frontend Developer from Victoria, Australia. I hold a master degree of Design from World University.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div >
    );
};

export default Subsidiary;
