import moment from 'moment';

export const formatDate = (date: string | Date | number) =>
  moment(date).format('MMM DD, YYYY');

export const formatDateTime = (
  date: string | Date | number,
) => moment(date).format('YYYY MMM DD HH:mm');

export const formatDateRange = (
  from: string | Date | number,
  to: string | Date | number,
) => `${formatDateTime(from)} - ${formatDateTime(to)}`;

export const formatName = (user: {
  firstname: string;
  lastname: string;
}) => {
  return `${user.firstname} ${user.lastname}`;
};

export const formatNumber = (num: number) => {
  return Number(num).toFixed(2);
};

export const formatPriceReadable = (
  num: number,
  curr?: boolean,
) => {
  return `${curr ? '€' : ''}${Number(num).toLocaleString(
    'de-DE',
    {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
  )}`;
};
export const formatPriceRounded = (num: number) => {
  return Number(num).toLocaleString('de-DE', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};

export const formatDateShort = (date: string | Date | number) =>
  moment(date).format('MMM DD');