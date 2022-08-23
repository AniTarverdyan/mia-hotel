import { Button, TextField } from '@mui/material';
import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import "./style.css";
import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Location = () => {
    return (
        <div className="home-content-location">
            <div className="find-us">
                <h2>КАК НАС НАЙТИ</h2>
                <div className="underline"></div>
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
                            <TextField label="Сообшение *" multiline rows={5} variant="outlined" />
                        </div>
                        <Button color="success" endIcon={<SendIcon />} >Отправить</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Location;
