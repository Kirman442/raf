import React, { useEffect, useState } from "react";
import Head from '../components/Head';
import ContactForm from "../components/ContactForm";

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
                                <span className="d-block text-white-2 opacity6 alt-font margin-5px-bottom text-large">Мы команда профессиональных арбитражных управляющих</span>
                                <h3 className="alt-font text-white-2 opacity8 font-weight-600 mb-0">Берём на себя Ваши заботы</h3>
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
                            <span className="text-green alt-font margin-10px-bottom d-inline-block text-medium">Не беспокойтесь, Вы в надёжных руках</span>
                            <h6 className="alt-font text-extra-dark-gray">Мы заботимся об успехе наших клиентов от начала и до конца. Наш опыт помогает создавать решения.</h6>
                            <p>Мы сопровождаем процедуры банкротства на всех этапах, обеспечивая защиту интересов наших клиентов.
                                Наши специалисты помогают грамотно урегулировать финансовые трудности, минимизируя риски и потери.
                                Опираясь на многолетний опыт, мы разрабатываем стратегии, которые ведут к оптимальному решению сложных ситуаций.
                                Доверьтесь профессионалам – мы берём на себя все юридические и организационные вопросы, чтобы Вы могли сосредоточиться на новом этапе жизни.</p>
                            {/* <Link className="btn btn-dark-gray btn-small text-extra-small btn-rounded margin-5px-top" to="Services" aria-label="Services link"><i className="margin-5px-right no-margin-left" aria-hidden="true"></i>Наши услуги</Link> */}
                            {/* <a href="services" className="btn btn-dark-gray btn-small text-extra-small btn-rounded margin-5px-top"><i className="fa-solid fa-circle-play icon-very-small margin-5px-right no-margin-left" aria-hidden="true"></i> Наши услуги</a> */}
                        </div>
                    </div>
                    <div className="divider-full margin-seven-bottom margin-three-top"></div>
                    <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 justify-content-center">
                        <div className="col-sm-8 md-margin-60px-bottom sm-margin-40px-bottom text-center text-md-start ">
                            <span className="text-extra-dark-gray alt-font text-large margin-15px-bottom d-block md-margin-5px-bottom">Расскажите, что случилось?</span>
                            <p className="w-90 md-w-100">Мы внимательно выслушаем вашу ситуацию и разберёмся в деталях. Анализируем финансовое положение, обязательства и возможные пути решения. Наши эксперты оценят риски и предложат первый шаг к выходу из сложной ситуации.</p>
                        </div>
                        <div className="col-sm-8 md-margin-60px-bottom sm-margin-40px-bottom text-center text-md-start " >
                            <span className="text-extra-dark-gray alt-font text-large margin-15px-bottom d-block md-margin-5px-bottom">Разработка стратегии</span>
                            <p className="w-90 md-w-100">На основе полученных данных мы разрабатываем персональный план действий. Оптимизируем процесс с учётом законодательных требований и вашей выгоды. Прозрачность и эффективность — ключевые принципы нашей работы.</p>
                        </div>
                        <div className="col-sm-8 text-center text-md-start ">
                            <span className="text-extra-dark-gray alt-font text-large margin-15px-bottom d-block md-margin-5px-bottom">Защита интересов на каждом этапе</span>
                            <p className="w-90 md-w-100">Мы сопровождаем вас на всех этапах процедуры, включая судебные разбирательства. Грамотно отстаиваем права клиентов, используя проверенные юридические инструменты. Наша цель — максимально выгодный для вас результат.

                            </p>
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

            {/* <section className="lg-padding-two-lr md-no-padding-lr" style={{ backgroundImage: `url(${backgroungImage})`, visibility: "visible" }}>
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
            </section> */}

            <section className="wow animate__fadeIn bg-light-gray" >
                <div className="container">
                    {/* <div className="row justify-content-center">
                        <div className="col-lg-7 text-center margin-100px-bottom sm-margin-40px-bottom">
                            <div className="position-relative overflow-hidden w-100">
                                <span className="text-small text-outside-line-full alt-font font-weight-600 text-uppercase">Tab Style 02</span>
                            </div>
                        </div>
                    </div> */}
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-sm-10 margin-six-bottom text-center last-paragraph-no-margin">
                            <div className="alt-font text-green margin-10px-bottom text-uppercase text-small">Больше причин доверить нам свои проблемы</div>
                            <h5 className="alt-font text-extra-dark-gray font-weight-400 mb-0">Арбитраж и помощь при банкротстве</h5>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center tab-style3" id="animated-tab1">
                            {/* <!-- start tab navigation --> */}
                            <ul className="nav nav-tabs margin-50px-bottom sm-margin-30px-bottom text-uppercase alt-font text-small font-weight-600 justify-content-center flex-column flex-md-row" role="tablist">
                                <li className="nav-item" role="presentation"><a href="#tab3_sec1" data-bs-toggle="tab" className="nav-link text-medium-gray active" aria-selected="true" role="tab" >Арбитраж</a></li>
                                <li className="nav-item" role="presentation"><a href="#tab3_sec2" data-bs-toggle="tab" className="nav-link text-medium-gray " aria-selected="false" tabindex="-1" role="tab" >Банкротство</a></li>
                                {/* <li className="nav-item" role="presentation"><a href="#tab3_sec3" data-bs-toggle="tab" className="nav-link text-medium-gray" aria-selected="false" role="tab" tabindex="-1">Production</a></li>
                                <li className="nav-item" role="presentation"><a href="#tab3_sec4" data-bs-toggle="tab" className="nav-link text-medium-gray" aria-selected="false" tabindex="-1" role="tab">Happy Client</a></li> */}
                            </ul>
                            {/* <!-- end tab navigation --> */}
                        </div>
                    </div>

                    <div className="tab-content">

                        <div id="tab3_sec1" className="tab-pane fade in active show" role="tabpanel">
                            <div className="row justify-content-center">
                                <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 justify-content-center">
                                    {/* <!-- start feature box item --> */}
                                    <div className="col-sm-8 md-margin-60px-bottom sm-margin-40px-bottom text-center text-md-start " >
                                        <span className="text-extra-dark-gray alt-font text-large margin-15px-bottom d-block md-margin-5px-bottom">Судебное взыскание задолженности для бизнеса</span>
                                        <p className="w-90 md-w-100">Профессиональная юридическая услуга, включающая комплексное представление интересов клиента в суде, разработку правовой позиции, подготовку процессуальных документов и участие в судебных заседаниях. Защита обеспечивает минимизацию правовых рисков и наиболее благоприятный исход дела для клиента.</p>
                                        <div className="separator-line-horrizontal-medium-light3 bg-deep-green w-50px mx-auto mx-md-0"></div>
                                    </div>
                                    {/* <!-- end feature box item --> */}
                                    {/* <!-- start feature box item --> */}
                                    <div className="col-sm-8 md-margin-60px-bottom sm-margin-40px-bottom text-center text-md-start ">
                                        <span className="text-extra-dark-gray alt-font text-large margin-15px-bottom d-block md-margin-5px-bottom">Защита при судебных спорах</span>
                                        <p className="w-90 md-w-100">Специализированная юридическая услуга по принудительному возврату долгов через суд, включающая досудебную подготовку документов, подачу искового заявления, представление интересов в суде и последующее сопровождение исполнительного производства. Помогает бизнесу эффективно возвращать просроченную дебиторскую задолженность.</p>
                                        <div className="separator-line-horrizontal-medium-light3 bg-deep-green w-50px mx-auto mx-md-0"></div>
                                    </div>
                                    {/* <!-- end feature box item --> */}
                                    {/* <!-- start feature box item --> */}
                                    <div className="col-sm-8 text-center text-md-start ">
                                        <span className="text-extra-dark-gray alt-font text-large margin-15px-bottom d-block md-margin-5px-bottom">Судебное представительство в арбитражном суде</span>
                                        <p className="w-90 md-w-100">Судебное представительство в арбитражном суде - профессиональная услуга, направленная на защиту интересов клиента в ходе арбитражного процесса. Включает подготовку процессуальных документов, представление доказательств и непосредственное участие в судебных заседаниях от имени доверителя. Эта услуга особенно востребована при рассмотрении дел о банкротстве и корпоративных спорах.</p>
                                        <div className="separator-line-horrizontal-medium-light3 bg-deep-green w-50px mx-auto mx-md-0"></div>
                                    </div>
                                    {/* <!-- end feature box item --> */}
                                </div>

                                <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 justify-content-center padding-five-top">
                                    {/* <!-- start feature box item --> */}
                                    <div className="col-sm-8 md-margin-60px-bottom sm-margin-40px-bottom text-center text-md-start " >
                                        <span className="text-extra-dark-gray alt-font text-large margin-15px-bottom d-block md-margin-5px-bottom">Альтернативные способы взыскания задолженности для бизнеса</span>
                                        <p className="w-90 md-w-100">Эффективные внесудебные методы работы с должниками, включающие проведение переговоров, реструктуризацию задолженности, заключение мировых соглашений и использование исполнительной надписи нотариуса. Позволяет получить оплату быстрее и с меньшими издержками, чем при судебном разбирательстве.</p>
                                        <div className="separator-line-horrizontal-medium-light3 bg-deep-green w-50px mx-auto mx-md-0"></div>
                                    </div>
                                    {/* <!-- end feature box item --> */}
                                    {/* <!-- start feature box item --> */}
                                    <div className="col-sm-8 md-margin-60px-bottom sm-margin-40px-bottom text-center text-md-start ">
                                        <span className="text-extra-dark-gray alt-font text-large margin-15px-bottom d-block md-margin-5px-bottom">Взыскание долга с индивидуальных предпринимателей</span>
                                        <p className="w-90 md-w-100">Специализированная юридическая услуга по возврату задолженности с ИП, учитывающая особенности их правового статуса. Включает анализ имущественного положения должника, подготовку и подачу иска в арбитражный суд, сопровождение исполнительного производства с учетом специфики взыскания с физических лиц.</p>
                                        <div className="separator-line-horrizontal-medium-light3 bg-deep-green w-50px mx-auto mx-md-0"></div>
                                    </div>
                                    {/* <!-- end feature box item --> */}
                                    {/* <!-- start feature box item --> */}
                                    <div className="col-sm-8 text-center text-md-start ">
                                        <span className="text-extra-dark-gray alt-font text-large margin-15px-bottom d-block md-margin-5px-bottom">Дополнительные услуги в арбитражных спорах</span>
                                        <p className="w-90 md-w-100">Комплекс сопутствующих юридических услуг, включающий обеспечение иска, розыск активов должника, проведение экспертиз, получение выписок и справок из государственных органов, обжалование судебных актов и сопровождение исполнительного производства.</p>
                                        <div className="separator-line-horrizontal-medium-light3 bg-deep-green w-50px mx-auto mx-md-0"></div>
                                    </div>
                                    {/* <!-- end feature box item --> */}
                                </div>

                                <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 justify-content-center padding-five-top">
                                    {/* <!-- start feature box item --> */}
                                    <div className="col-sm-8 md-margin-60px-bottom sm-margin-40px-bottom text-center text-md-start " >
                                        <span className="text-extra-dark-gray alt-font text-large margin-15px-bottom d-block md-margin-5px-bottom">Проведение торгов по реализации имущества</span>
                                        <p className="w-90 md-w-100">Профессиональная услуга по организации и проведению торгов в рамках процедуры банкротства, включающая подготовку положения о торгах, публикацию информации о торгах, проведение оценки имущества, работу с электронными площадками и оформление результатов торгов. Обеспечивает максимальную прозрачность и эффективность реализации имущества должника.</p>
                                        <div className="separator-line-horrizontal-medium-light3 bg-deep-green w-50px mx-auto mx-md-0"></div>
                                    </div>
                                    {/* <!-- end feature box item --> */}
                                    {/* <!-- start feature box item --> */}
                                    <div className="col-sm-8 md-margin-60px-bottom sm-margin-40px-bottom text-center text-md-start ">
                                        <span className="text-extra-dark-gray alt-font text-large margin-15px-bottom d-block md-margin-5px-bottom">Представительство в собраниях кредиторов</span>
                                        <p className="w-90 md-w-100">Комплексная услуга по подготовке и проведению собраний кредиторов, включающая уведомление участников, подготовку необходимых документов и отчетов, ведение протокола собрания и оформление его результатов. Обеспечивает соблюдение прав всех участников процедуры банкротства и законность принимаемых решений.</p>
                                        <div className="separator-line-horrizontal-medium-light3 bg-deep-green w-50px mx-auto mx-md-0"></div>
                                    </div>
                                    {/* <!-- end feature box item --> */}
                                    {/* <!-- start feature box item --> */}
                                    <div className="col-sm-8 text-center text-md-start ">
                                        <span className="text-extra-dark-gray alt-font text-large margin-15px-bottom d-block md-margin-5px-bottom">Сопровождение мирового соглашения в банкротстве</span>
                                        <p className="w-90 md-w-100">Специализированная юридическая услуга по разработке и заключению мирового соглашения между должником и кредиторами в деле о банкротстве. Включает согласование условий соглашения, подготовку документов для его утверждения судом, контроль исполнения условий соглашения и представление интересов сторон в суде при его утверждении.</p>
                                        <div className="separator-line-horrizontal-medium-light3 bg-deep-green w-50px mx-auto mx-md-0"></div>
                                    </div>
                                    {/* <!-- end feature box item --> */}
                                </div>
                            </div>
                        </div>


                        <div id="tab3_sec2" className="tab-pane fade in" role="tabpanel">
                            <div className="row justify-content-center">
                                <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 justify-content-center">
                                    {/* <!-- start feature box item --> */}
                                    <div className="col-sm-8 md-margin-60px-bottom sm-margin-40px-bottom text-center text-md-start " >
                                        <span className="text-extra-dark-gray alt-font text-large margin-15px-bottom d-block md-margin-5px-bottom">Банкротство юридических лиц и предпринимателей</span>
                                        <p className="w-90 md-w-100">Комплексное юридическое сопровождение процедуры банкротства компаний и ИП, включающее подготовку необходимых документов, представление интересов в арбитражном суде, взаимодействие с арбитражным управляющим и кредиторами. Позволяет провести процедуру банкротства с максимальной защитой интересов должника.</p>
                                        <div className="separator-line-horrizontal-medium-light3 bg-deep-green w-50px mx-auto mx-md-0"></div>
                                    </div>
                                    {/* <!-- end feature box item --> */}
                                    {/* <!-- start feature box item --> */}
                                    <div className="col-sm-8 md-margin-60px-bottom sm-margin-40px-bottom text-center text-md-start ">
                                        <span className="text-extra-dark-gray alt-font text-large margin-15px-bottom d-block md-margin-5px-bottom">Защита от субсидиарной ответственности</span>
                                        <p className="w-90 md-w-100">Профессиональная юридическая помощь руководителям и собственникам бизнеса по предотвращению и оспариванию привлечения к субсидиарной ответственности. Включает разработку правовой позиции, сбор доказательств добросовестности действий и представление интересов в суде при рассмотрении заявления о привлечении к ответственности.</p>
                                        <div className="separator-line-horrizontal-medium-light3 bg-deep-green w-50px mx-auto mx-md-0"></div>
                                    </div>
                                    {/* <!-- end feature box item --> */}
                                    {/* <!-- start feature box item --> */}
                                    <div className="col-sm-8 text-center text-md-start ">
                                        <span className="text-extra-dark-gray alt-font text-large margin-15px-bottom d-block md-margin-5px-bottom">Защита при оспаривании сделок в банкротстве</span>
                                        <p className="w-90 md-w-100">Специализированная юридическая услуга по защите интересов сторон при оспаривании сделок должника в деле о банкротстве. Включает анализ оснований оспаривания, подготовку правовой позиции и доказательственной базы, представительство в суде при рассмотрении заявления об оспаривании сделки.</p>
                                        <div className="separator-line-horrizontal-medium-light3 bg-deep-green w-50px mx-auto mx-md-0"></div>
                                    </div>
                                    {/* <!-- end feature box item --> */}
                                </div>

                                <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 justify-content-center padding-five-top">
                                    {/* <!-- start feature box item --> */}
                                    <div className="col-sm-8 md-margin-60px-bottom sm-margin-40px-bottom text-center text-md-start " >
                                        <span className="text-extra-dark-gray alt-font text-large margin-15px-bottom d-block md-margin-5px-bottom">Включение требований в реестр кредиторов</span>
                                        <p className="w-90 md-w-100">Профессиональная юридическая услуга по включению требований в реестр кредиторов должника, включающая подготовку заявления, сбор подтверждающих документов, обоснование требований в суде и защиту от возражений других кредиторов. Учитывает специфику требований различных категорий кредиторов, включая участников строительства.
                                        </p>
                                        <div className="separator-line-horrizontal-medium-light3 bg-deep-green w-50px mx-auto mx-md-0"></div>
                                    </div>
                                    {/* <!-- end feature box item --> */}
                                    {/* <!-- start feature box item --> */}
                                    <div className="col-sm-8 md-margin-60px-bottom sm-margin-40px-bottom text-center text-md-start ">
                                        <span className="text-extra-dark-gray alt-font text-large margin-15px-bottom d-block md-margin-5px-bottom">Жалобы и смена арбитражного управляющего</span>
                                        <p className="w-90 md-w-100">Специализированная услуга по оспариванию действий или бездействия арбитражного управляющего, включающая сбор доказательств нарушений, подготовку жалоб и заявлений об отстранении, представление интересов в суде. Помогает обеспечить законность проведения процедуры банкротства.
                                        </p>
                                        <div className="separator-line-horrizontal-medium-light3 bg-deep-green w-50px mx-auto mx-md-0"></div>
                                    </div>
                                    {/* <!-- end feature box item --> */}
                                    {/* <!-- start feature box item --> */}
                                    <div className="col-sm-8 text-center text-md-start ">
                                        <span className="text-extra-dark-gray alt-font text-large margin-15px-bottom d-block md-margin-5px-bottom">Взыскание убытков с директора в банкротстве
                                        </span>
                                        <p className="w-90 md-w-100">Комплексная юридическая услуга по привлечению руководителей должника к ответственности за причиненные убытки, включающая выявление и доказывание недобросовестных действий, подготовку заявления о взыскании убытков и представление интересов в суде при рассмотрении заявления.
                                        </p>
                                        <div className="separator-line-horrizontal-medium-light3 bg-deep-green w-50px mx-auto mx-md-0"></div>
                                    </div>
                                    {/* <!-- end feature box item --> */}
                                </div>

                                <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 justify-content-center padding-five-top">
                                    {/* <!-- start feature box item --> */}
                                    <div className="col-sm-8 md-margin-60px-bottom sm-margin-40px-bottom text-center text-md-start " >
                                        <span className="text-extra-dark-gray alt-font text-large margin-15px-bottom d-block md-margin-5px-bottom">Сопровождение процедуры реструктуризации долгов</span>
                                        <p className="w-90 md-w-100">Профессиональная услуга по разработке и реализации плана реструктуризации задолженности, включающая анализ финансового состояния должника, согласование условий с кредиторами, подготовку необходимых документов и контроль исполнения утвержденного плана.
                                        </p>
                                        <div className="separator-line-horrizontal-medium-light3 bg-deep-green w-50px mx-auto mx-md-0"></div>
                                    </div>
                                    {/* <!-- end feature box item --> */}
                                    {/* <!-- start feature box item --> */}
                                    <div className="col-sm-8 md-margin-60px-bottom sm-margin-40px-bottom text-center text-md-start ">
                                        <span className="text-extra-dark-gray alt-font text-large margin-15px-bottom d-block md-margin-5px-bottom">Оспаривание требований кредиторов</span>
                                        <p className="w-90 md-w-100">Специализированная юридическая услуга по выявлению и оспариванию необоснованных требований кредиторов в деле о банкротстве, включающая анализ обоснованности требований, подготовку возражений и доказательственной базы, представительство в суде при рассмотрении требований.
                                        </p>
                                        <div className="separator-line-horrizontal-medium-light3 bg-deep-green w-50px mx-auto mx-md-0"></div>
                                    </div>
                                    {/* <!-- end feature box item --> */}
                                    {/* <!-- start feature box item --> */}
                                    <div className="col-sm-8 text-center text-md-start ">
                                        <span className="text-extra-dark-gray alt-font text-large margin-15px-bottom d-block md-margin-5px-bottom">Защита прав залоговых кредиторов
                                        </span>
                                        <p className="w-90 md-w-100">Комплексная юридическая услуга по защите интересов залоговых кредиторов в деле о банкротстве, включающая установление залоговых требований, контроль за сохранностью предмета залога, участие в определении порядка реализации залогового имущества и распределении вырученных средств.
                                        </p>
                                        <div className="separator-line-horrizontal-medium-light3 bg-deep-green w-50px mx-auto mx-md-0"></div>
                                    </div>
                                    {/* <!-- end feature box item --> */}
                                </div>
                            </div>
                        </div>


                        {/* <div id="tab3_sec3" className="tab-pane fade in" role="tabpanel">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 last-paragraph-no-margin">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum typesetting has dummy text.</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                </div>
                            </div>
                        </div>


                        <div id="tab3_sec4" className="tab-pane fade in" role="tabpanel">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 last-paragraph-no-margin">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum typesetting has dummy text.</p>
                                </div>
                            </div>
                        </div> */}

                    </div>

                </div>
            </section>

            <section className="wow animate__fadeIn" >
                <div className="container px-0 padding-five-bottom">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8 margin-eight-bottom md-margin-40px-bottom sm-margin-30px-bottom text-center last-paragraph-no-margin">
                            <h5 className="alt-font font-weight-700 text-extra-gray text-uppercase mb-0">Давайте решим проблемы</h5>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2">
                        {/* <!-- start contact info item --> */}
                        <div className="col text-center md-margin-eight-bottom sm-margin-30px-bottom wow animate__fadeInUp last-paragraph-no-margin">
                            <div className="d-inline-block margin-20px-bottom">
                                <div className="bg-deep-green icon-round-medium"><i className="icon-map-pin icon-medium text-white-2"></i></div>
                            </div>
                            <div className="text-extra-dark-gray text-uppercase text-small font-weight-600 alt-font margin-5px-bottom">Приходите к нам</div>
                            <p className="mx-auto">Краснодар, ул. Красная 35, офис 120<br />Шалдин и Партнёры</p>
                        </div>
                        {/* <!-- end contact info item --> */}
                        {/* <!-- start contact info item --> */}
                        <div className="col text-center md-margin-eight-bottom sm-margin-30px-bottom wow animate__fadeInUp last-paragraph-no-margin">
                            <div className="d-inline-block margin-20px-bottom">
                                <div className="bg-deep-green  icon-round-medium"><i className="icon-chat icon-medium text-white-2"></i></div>
                            </div>
                            <div className="text-extra-dark-gray text-uppercase text-small font-weight-600 alt-font margin-5px-bottom">поговорим о деле</div>
                            <p className="mx-auto">Тел: 452-5989</p>
                        </div>
                        {/* <!-- end contact info item --> */}
                        {/* <!-- start contact info item --> */}
                        <div className="col text-center xs-margin-30px-bottom wow animate__fadeInUp last-paragraph-no-margin">
                            <div className="d-inline-block margin-20px-bottom">
                                <div className="bg-deep-green icon-round-medium"><i className="icon-envelope icon-medium text-white-2"></i></div>
                            </div>
                            <div className="text-extra-dark-gray text-uppercase text-small font-weight-600 alt-font margin-5px-bottom">напишите нам</div>
                            <p className="mx-auto"><a href="mailto:info@domain.ru">info@domain.ru</a></p>
                        </div>
                        {/* <!-- end contact info item --> */}
                        {/* <!-- start contact info item --> */}
                        <div className="col text-center wow animate__fadeInUp last-paragraph-no-margin">
                            <div className="d-inline-block margin-20px-bottom">
                                <div className="bg-deep-green icon-round-medium"><i className="icon-mobile icon-medium text-white-2"></i></div>
                            </div>
                            <div className="text-extra-dark-gray text-uppercase text-small font-weight-600 alt-font margin-5px-bottom">Whatsapp</div>
                            <p className="mx-auto">Тел: 125-7896</p>
                        </div>
                        {/* <!-- end contact info item --> */}
                    </div>
                </div>

                <ContactForm />
            </section >



        </div >
    );
};

export default Home;
