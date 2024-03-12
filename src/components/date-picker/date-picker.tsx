import { DatePicker as DatePickerAntd, DatePickerProps, Space } from 'antd';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import s from './date-picker.module.scss';

const monthFormat = 'YYYY/MM';

export const DatePicker = () => {
  const [currentMonth, setCurrentMonth] = useState<number>();
  const [currentYear, setCurrentYear] = useState<number>();

  const onChange: DatePickerProps['onChange'] = (date) => {
    setCurrentYear(dayjs(date).year());
    setCurrentMonth(dayjs(date).month() + 1);
  };

  useEffect(() => {
    const newDate = new Date();
    setCurrentMonth(newDate.getMonth() + 1);
    setCurrentYear(newDate.getFullYear());
  }, []);

  return (
    <Space className={s.wrapper}>
      <DatePickerAntd
        value={dayjs(`${currentYear}-${currentMonth}`)}
        format={monthFormat}
        onChange={onChange}
        picker="month"
        allowClear={false}
      />
    </Space>
  );
};
