import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState(""); // Сообщение об успехе/ошибке

    // Регулярное выражение для email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Обработчик изменения полей
    const handleChange = (e) => {
        const { name, value } = e.target;

        // Автоформатирование телефона
        if (name === "phone") {
            let digits = value.replace(/\D/g, ""); // Удаляем всё, кроме цифр
            if (digits.length > 3 && digits.length <= 6) {
                digits = `${digits.slice(0, 3)}-${digits.slice(3)}`;
            } else if (digits.length > 6) {
                digits = `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
            }
            setFormData((prev) => ({ ...prev, phone: digits }));
            return;
        }

        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Отправка формы
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Проверка обязательных полей (имя и телефон)
        if (!formData.name || !formData.phone) {
            setStatus("⚠️ Пожалуйста, заполните обязательные поля (Имя и Телефон).");
            return;
        }

        // Проверка email (если заполнен)
        if (formData.email && !emailPattern.test(formData.email)) {
            setStatus("⚠️ Некорректный формат email. Введите полный адрес (example@domain.com).");
            return;
        }

        try {
            await emailjs.send(
                "service_id", // Заменить на свой ID сервиса EmailJS
                "template_id", // Заменить на свой ID шаблона
                {
                    from_name: formData.name,
                    from_phone: formData.phone,
                    from_email: formData.email || "Не указан", // Если email пустой
                    message: formData.message || "Сообщение отсутствует", // Если message пустое
                },
                "user_api_key" // Твой публичный ключ из EmailJS
            );

            setStatus("✅ Сообщение успешно отправлено!");
            setFormData({ name: "", phone: "", email: "", message: "" }); // Очистка формы
        } catch (error) {
            console.error("Ошибка отправки:", error);
            setStatus("❌ Ошибка отправки сообщения.");
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7 text-center margin-50px-bottom sm-margin-40px-bottom">
                    <div className="position-relative overflow-hidden w-100">
                        <span className="text-large text-outside-line-full padding-three-bottom alt-font font-weight-600 text-uppercase">
                            Оставьте нам сообщение
                        </span>
                        <span className="text-green alt-font text-large d-block md-margin-5px-bottom">И мы вам обязательно перезвоним</span>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="text-center">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        {status && <div className="form-results">{status}</div>}

                        <input
                            type="text"
                            name="name"
                            placeholder="Имя*"
                            className="text-green input-border-bottom required"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Телефон (XXX-XXX-XXXX)*"
                            className="input-border-bottom required"
                            value={formData.phone}
                            onChange={handleChange}
                            maxLength="12"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="E-mail (необязательно)"
                            className="input-border-bottom"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <textarea
                            name="message"
                            placeholder="Ваше сообщение (необязательно)"
                            className="input-border-bottom"
                            value={formData.message}
                            onChange={handleChange}
                        />
                        <button
                            type="submit"
                            className="btn btn-small btn-deep-green margin-30px-top sm-margin-three-top"
                        >
                            Отправить сообщение
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;