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

const Bankruptcy = () => {
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
                <div className="container position-relative">
                    <div className="row align-items-center">
                        <div className="row align-items-center">
                            <div className="col-12 d-flex flex-column text-center justify-content-center page-title-large padding-30px-tb">
                                {/* <span className="d-block text-white-2 opacity6 alt-font margin-5px-bottom">Банкротство юридических лиц и предпринимателей</span> */}
                                <h4 className="alt-font text-white-2 font-weight-600 mb-0">Банкротство юридических лиц и предпринимателей</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">

                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <blockquote className="border-color-deep-pink">
                            <p>Мы уже много лет успешно занимаемся банкротством юридических лиц и предпринимателей. Мы берем на себя все этапы — от подготовки компании к процедуре банкротства до полного завершения дела. Судебное представительство, взаимодействие с арбитражным управляющим, сопровождение торгов — все эти и другие задачи вы можете доверить нам. Мы сделаем всё необходимое, чтобы процесс прошел максимально гладко и эффективно.</p>
                        </blockquote>
                    </div>
                </div>
            </div>



        </div >
    );
};

export default Bankruptcy;
