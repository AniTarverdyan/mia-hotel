import SendIcon from '@mui/icons-material/Send';
import { Button, TextField } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './style.css';

const Service = () => {
  return (
    <div className='home-content-service'>
      <h2>УСЛУГИ</h2>
      <div className='underline'></div>
      <div className='services'>
        <div className='residence'>
          <img
            className='pet-img'
            src='https://i.natgeofe.com/n/f0dccaca-174b-48a5-b944-9bcddf913645/01-cat-questions-nationalgeographic_1228126_4x3.jpg'
          />
          <NavLink className='nav-link' to={'/pricing'}>
            <h4>ПРОЖИВАНИЕ</h4>
          </NavLink>
          <p>
            Собаки и кошки живут в своих удобных отдельных <br /> апартаментах.
          </p>
        </div>
        <div className='residence'>
          <img
            className='pet-img'
            src='https://www.dogslife.com.au/wp-content/uploads/2018/10/1-3.jpg'
          />
          <NavLink className='nav-link' to={'/pricing'}>
            <h4>ИГРЫ</h4>
          </NavLink>
          <p>Выгуливаем и играем с Вашими питомцами.</p>
        </div>
        <div className='residence'>
          <img
            className='pet-img'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwf-Qysi-Qm25ATjGve9a1Z0XUS_AQLx9_-hEWmmuzWDXW45q-K4XumcjrkO9N9nFWG7E&usqp=CAU'
          />
          <h4>ВЕЧЕРИНКА</h4>
          <p>Устроим Вашему питомцу и его друзьям незабываемую вечеринку.</p>
        </div>
      </div>
      <div className='home-content-booking'>
        <div>
          <h4>ЗАБРОНИРОВАТЬ</h4>
          <div className='text-field'>
            <div>
              <TextField label='Имя *' variant='outlined' size='small' />
            </div>
            <div>
              <TextField label='Ваша почта' variant='outlined' size='small' />
            </div>
            <div>
              <TextField label='Телефон *' variant='outlined' size='small' />
            </div>
            <div>
              <TextField
                label='Сообшение *'
                multiline
                rows={5}
                variant='outlined'
              />
            </div>
            <Button color='success' endIcon={<SendIcon />}>
              Отправить
            </Button>
            <div className='button-underline'>_____</div>
          </div>
          <div>
            <p>Мы можем не только это!</p>
            <p>
              Если у Вас есть желание сделать что-то приятное и необычное Вашему
              питомцу, позвоните нам:
            </p>
            <div>+7 939 399-93-03</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;
