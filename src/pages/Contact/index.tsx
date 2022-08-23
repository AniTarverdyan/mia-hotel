import React from 'react';
import './style.css';
import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Contact = () => {
  return (
    <div>
      <div className='contact-page-title'>
        <h2>КОНТАКТЫ</h2>
        <div className='underline'></div>
      </div>
      <div className='contact-page-content'>
        <div className='contact'>
          <div><LocationOnOutlinedIcon /></div>
          <div>
            <div className='contact-name'>АДРЕС</div>
            <p>г. Казань, ул. Адмиралтейская, 3, <br />корп.1,
              ТЦ «Петрушкин двор», 4-й этаж</p>
          </div>
        </div>
        <div className='contact'>
          <div><LocalPhoneTwoToneIcon /></div>
          <div>
            <div className='contact-name'>ТЕЛЕФОН</div>
            <p>+7 939 399-93-03</p>
          </div>
        </div>
        <div className='contact'>
          <div><InstagramIcon /></div>
          <div>
            <div className='contact-name'>ИНСТАГРАМ</div>
            <p>miapet.hotel</p>
          </div>
        </div>
        <div className='contact'>
          <div><TelegramIcon /></div>
          <div>
            <div className='contact-name'>ТЕЛЕГРАМ</div>
            <p>+7 939 399-93-03</p>
          </div>
        </div>
        <div className='contact'>
          <div><AlternateEmailIcon /></div>
          <div>
            <div className='contact-name'>E-MAIL</div>
            <p>miapet.hotel@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact;
