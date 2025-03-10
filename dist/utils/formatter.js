import moment from 'moment';
export const formatDate = (date) => moment(date).format('MMM DD');
export const formatDateTime = (date) => moment(date).format('YYYY MMM DD HH:mm');
export const formatDateRange = (from, to) => `${formatDateTime(from)} - ${formatDateTime(to)}`;
export const formatName = (user) => {
    return `${user.firstname} ${user.lastname}`;
};
export const formatNumber = (num) => {
    return Number(num).toFixed(2);
};
export const formatPriceReadable = (num, curr) => {
    return `${curr ? '€' : ''}${Number(num).toLocaleString('de-DE', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })}`;
};
export const formatPriceRounded = (num) => {
    return Number(num).toLocaleString('de-DE', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
};
