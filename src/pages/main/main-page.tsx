import { ButtonColorChanger } from 'components/button-color-changer/button-color-changer.tsx';
import { Input } from 'components/input/input.tsx';
import { DatePicker } from 'components/date-picker/date-picker.tsx';
import s from './main-page.module.scss';

export const MainPage = () => (
  <main className={s.container}>
    <h2 className={s.title}>Main page</h2>
    <div className={s.information}>
      <div className={s.colorChanger}>
        <ButtonColorChanger />
        <Input placeholder="Check color" />
      </div>
      <div>
        <DatePicker />
      </div>
    </div>
  </main>
);
