import React from "react";
import { Button, Checkbox, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import "./style.css";
import logo from '../../assets/images/mia-logo.png';
import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Home = () => {
    return (
        <div className="home-content">
            <h2>ДОБРО ПОЖАЛОВАТЬ</h2>
            <p>в отель для кошек и собак «Mia» в Казани!</p>
            <div className="underline"></div>
            <div className="about-hotel">
                <p>
                    «Mia» — это дом для четвероногих членов Вашей семьи. Работая над
                    открытием, мы учли опыт европейских и американских отелей для домашних
                    животных. Как только Ваш питомец сделает первые шаги в нашем отеле, он
                    окажется в атмосфере уюта и комфорта, познакомится с персоналом,
                    горячо любящим всех четвероногих, а Вы сможете выбрать своему любимцу
                    номер для передержки с учетом его характера, предпочтений и привычек.
                </p>
            </div>
            <div>
                <div className="hotel-privileges">
                    <Checkbox checked color="success" />
                    <p>Просторное помещение</p>
                </div>
                <div className="hotel-privileges">
                    <Checkbox checked color="success" />
                    <p>Видеонаблюдение в каждом номере</p>
                </div>
                <div className="hotel-privileges">
                    <Checkbox checked color="success" />
                    <p>Естественное освещение</p>
                </div>
                <div className="hotel-privileges">
                    <Checkbox checked color="success" />
                    <p>Звукоизоляция номеров у собак</p>
                </div>
            </div>
            <div className="home-content-part2">
                <div>
                    <h4>ЗАБРОНИРОВАТЬ</h4>
                    <div className="text-field">
                        <div>
                            <TextField label="Имя *" variant="outlined" size="small" />
                        </div>
                        <div>
                            <TextField label="Ваша почта" variant="outlined" size="small" />
                        </div>
                        <div>
                            <TextField label="Телефон *" variant="outlined" size="small" />
                        </div>
                        <div>
                            <TextField
                                label="Сообшение *"
                                multiline
                                rows={5}
                                variant="outlined"
                            />
                        </div>
                        <Button color="success" endIcon={<SendIcon />} >Отправить</Button>
                        <div className="button-underline">_____</div>
                    </div>
                    <div>
                        <p>Мы можем не только это!</p>
                        <p>Если у Вас есть желание сделать что-то приятное и необычное Вашему питомцу,
                            позвоните нам:</p>
                        <div>+7 939 399-93-03</div>
                    </div>
                </div>
            </div>
            <div className="home-content3">
                <div className="about-hotel">
                    <img className="header-logo" src={logo} alt="" height="100" />
                    <h2>НАШ ОТЕЛЬ</h2>
                    <div className="underline2"></div>
                    <p>Наши гостиничные номера профессионально оформлены и изготовлены по индивидуальному заказу.
                        У нас есть две зоны — одна для собак декоративных пород, а другая для кошек.</p>
                    <div className="hotel-info">
                        <div>
                            Территория для кошек, которая расположена на площади в 80 м2, с установленными кабинами из закалённого стекла площадью от 2.5 до 4 м2 с учетом полок.
                        </div>
                        <div>
                            Территория для декоративных собак, которая расположена в двух комнатах общей площадью 30 м2. В них размещаются апартаменты площадью от 2 до 3 м2.
                        </div>
                        <div>
                            Зоны разделены между собой, каждый из апартаментов оборудован веб-камерой, по которой вы можете круглые сутки наблюдать за своим питомцем.
                        </div>
                    </div>
                    <p>Наши сотрудники — добросовестные, любящие животных работники, которым очень нравится находиться рядом с четвероногими друзьями и заботиться о них. Будь то прогулки с питомцами, груминг или просто передержка, что бы Вас не заинтересовало, мы обещаем Вашему питомцу уникальный, роскошный, безопасный и веселый отдых и развлечения в нашем отеле.</p>
                    <div className="underline2"></div>
                    <h3>
                        МЫ ДЕЛАЕМ ВСЕ, ЧТОБЫ ВАШИ ПИТОМЦЫ ЧУВСТВОВАЛИ СЕБЯ ТАК ЖЕ ХОРОШО, КАК У СЕБЯ ДОМА!</h3>
                </div>
            </div>
            <div className="home-content4">
                <div className="find-us">
                    <h2>КАК НАС НАЙТИ</h2>
                    <div className="underline2"></div>
                </div>
                <div className="contact-time">
                    <div className="contact-for-find">
                        <div className="phone-contact">
                            <div>
                                <LocalPhoneTwoToneIcon />
                                <div>ТЕЛЕФОН</div>
                            </div>
                            <div>
                                +7 939 399-93-03
                            </div>
                        </div>
                        <div className="working-time">
                            <div>
                                <AccessTimeIcon />
                                <div>ВРЕМЯ РАБОТЫ</div>
                                <div>
                                    <p>9.00 — 20.00 в будни</p>
                                    <p>10.00 — 18.00 в субботу-воскресенье</p>
                                </div>
                            </div>
                        </div>
                        <div className="location">
                            <div>
                                <LocationOnOutlinedIcon />
                                <div>АДРЕС</div>
                                <p>Казань, ул. Адмиралтейская, 3<br />
                                    БЦ «Петрушкин двор», 4-й этаж</p>
                            </div>

                        </div>
                    </div>
                    <div className="text-field-for-contact" >
                        <p>Напишите нам что и когда нужно Вашему питомцу,<br /> и как с Вами связаться.</p>
                        <div className="text-field">
                        <div>
                            <TextField label="Имя *" variant="outlined" size="small" />
                        </div>
                        <div>
                            <TextField label="Ваша почта" variant="outlined" size="small" />
                        </div>
                        <div>
                            <TextField label="Телефон *" variant="outlined" size="small" />
                        </div>
                        <div>
                            <TextField
                                label="Сообшение *"
                                multiline
                                rows={5}
                                variant="outlined"
                            />
                        </div>
                        <Button color="success" endIcon={<SendIcon />} >Отправить</Button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;