import { ButtonColorChanger } from 'components/button-color-changer/button-color-changer.tsx';
import { Input } from 'components/input/input.tsx';
import { DateComponent } from 'components/date-picker/date-component.tsx';
import s from './main-page.module.scss';

export const MainPage = () => (
  <div className={s.container}>
    <h2 className={s.title}>Main page</h2>
    <div className={s.information}>
      <div className={s.colorChanger}>
        <ButtonColorChanger />
        <Input placeholder="Check color" />
      </div>
      <div>
        <DateComponent />
      </div>
    </div>
  </div>
);
