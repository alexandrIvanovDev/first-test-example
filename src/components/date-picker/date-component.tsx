import { DatePicker, DatePickerProps, Space } from 'antd';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import s from './date-component.module.scss';

const monthFormat = 'YYYY/MM';

export const DateComponent = () => {
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
      <DatePicker
        value={dayjs(`${currentYear}-${currentMonth}`)}
        format={monthFormat}
        onChange={onChange}
        picker="month"
        allowClear={false}
      />
    </Space>
  );
};
