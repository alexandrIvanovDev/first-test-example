import { ButtonColorChanger } from '../../components/button-color-changer/button-color-changer.tsx';
import s from './main-page.module.scss';
import { Input } from '../../components/input/input.tsx';
import { DatePicker } from '../../components/date-picker/date-picker.tsx';

export const MainPage = () => (
  <div className={s.wrapper}>
    <h2>Main page</h2>
    <ButtonColorChanger />
    <Input placeholder="Check color" />
    <div>
      {/* <DatePicker /> */}
    </div>
  </div>
);
