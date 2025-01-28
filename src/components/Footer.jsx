import React from "react";
import { Link, useLocation } from "react-router-dom";

const getMenuItemsFooter = (pathname) => {
    const validPaths = ["/", "/Services"]; // Массив допустимых значений
    if (validPaths.includes(pathname)) {
        return (
            <>
                <div className="widget-title alt-font text-extra-small text-uppercase text-white-2 margin-15px-bottom font-weight-600">
                    О нас
                </div>
                <div className="text-small line-height-24 text-medium-gray">
                    <ul className="list-unstyled">
                        <li className="w-80 float-start">
                            <Link to="/portfolio/Kunstkarten" className="text-medium-gray text-small">
                                История компании
                            </Link>
                        </li>
                        <li className="w-80 float-start">
                            <Link to="/portfolio/Flusssystem" className="text-medium-gray text-small">
                                Вопросы и ответы
                            </Link>
                        </li>
                        <li className="w-80 float-start">
                            <Link to="/portfolio/Ubahn" className="text-medium-gray text-small">
                                Блог
                            </Link>
                        </li>
                        <li className="w-80 float-start">
                            <Link to="/portfolio/Bergbau" className="text-medium-gray text-small">
                                Контакты
                            </Link>
                        </li>
                    </ul>
                </div>
            </>
        );
    }

    if (pathname === "/about") {
        return null
    }

    // if (pathname.startsWith("/portfolio")) {
    //     return (
    //         <>
    //             <div className="widget-title alt-font text-extra-small text-uppercase text-white-2 margin-15px-bottom font-weight-600">
    //                 About me
    //             </div>
    //             <div className="text-small line-height-24 text-medium-gray">
    //                 <Link to="/about" className="text-medium-gray text-small">
    //                     Mehr sehen
    //                 </Link>
    //             </div>
    //         </>
    //     );
    // }

    return null;
};


const Footer = () => {
    const locationFooter = useLocation();
    return (
        <footer className="footer-clean-dark bg-extra-dark-gray padding-two-tb sm-padding-30px-tb">
            <div className="footer-widget-area padding-30px-bottom">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-4 col-sm-6 widget sm-margin-30px-bottom">
                            <div className="widget-title alt-font text-extra-small text-uppercase text-white-2 margin-15px-bottom font-weight-600">
                                Свяжитесь с нами
                            </div>
                            <div className="text-small line-height-24 text-medium-gray">
                                e-mail:{" "}
                                <a
                                    href="mailto:email@domain.ru"
                                    className="text-medium-gray"
                                >
                                    email@domain.ru
                                </a>
                            </div>
                            <div className="text-small line-height-24 text-medium-gray">
                                Телефон:{" "}
                                456-456789
                            </div>
                            <div className="text-small line-height-24 text-medium-gray">
                                Whatsapp:{" "}
                                132-456789
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 widget sm-margin-30px-bottom">
                            <div className="widget-title alt-font text-extra-small text-white-2 text-uppercase margin-15px-bottom font-weight-600">
                                Наши услуги
                            </div>
                            <ul className="list-unstyled">
                                <li className="w-80 float-start">
                                    <Link to="/portfolio/Kunstkarten" className="text-medium-gray text-small">
                                        Банкротство физ лиц
                                    </Link>
                                </li>
                                <li className="w-80 float-start">
                                    <Link to="/portfolio/Flusssystem" className="text-medium-gray text-small">
                                        Банкротство юр лиц
                                    </Link>
                                </li>
                                <li className="w-80 float-start">
                                    <Link to="/portfolio/Ubahn" className="text-medium-gray text-small">
                                        Поиск активов
                                    </Link>
                                </li>
                                <li className="w-80 float-start">
                                    <Link to="/portfolio/Bergbau" className="text-medium-gray text-small">
                                        Арбитраж
                                    </Link>
                                </li>
                                <li className="w-80 float-start">
                                    <Link to="/portfolio/Clustering" className="text-medium-gray text-small">
                                        Кассация
                                    </Link>
                                </li>
                                <li className="w-80 float-start">
                                    <Link to="/portfolio/Dresden" className="text-medium-gray text-small">
                                        Реструктуризация долгов
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 widget sm-margin-30px-bottom">
                            {getMenuItemsFooter(locationFooter.pathname)}
                            {/* <div className="widget-title alt-font text-extra-small text-uppercase text-white-2 margin-15px-bottom font-weight-600">
                                About me
                            </div>
                            <div className="text-small line-height-24 text-medium-gray">
                                <Link to="/about" className="text-medium-gray text-small">
                                    Mehr sehen
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="border-color-medium-dark-gray border-top padding-30px-top">
                    <div className="row">
                        <div className="col-12 text-small text-center text-medium-gray">
                            © 2025 Все права защищены<br />
                            Арбитражная контора Шалдин и Партнёры
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
