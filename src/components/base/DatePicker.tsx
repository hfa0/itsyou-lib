import React, { useEffect, useState } from 'react';
import Datetime from 'react-datetime';
import Input from './Input';

const DatePicker = ({
                      label,
                      date,
                      className,
                      onChange,
                      error,
                    }: {
  label?: string;
  date?: Date;
  className?: string;
  onChange?: (date: Date) => void;
  error?: string;
}) => {
  const [startDate, setStartDate] = useState<Date | undefined>(
    date || new Date(),
  );

  useEffect(() => {
    setStartDate(date);
  }, [date]);

  const handleChange = (date: any | string) => {
    setStartDate(new Date(date));
    onChange?.(new Date(date));
  };

  return (
    <Datetime
      renderInput={(props: any) => (
        <Input {...props} error={error} label={label} className={className} icon={'Calendar'} />
      )}
      initialValue={startDate}
      onChange={handleChange}
    />
  );
};

export default DatePicker;
