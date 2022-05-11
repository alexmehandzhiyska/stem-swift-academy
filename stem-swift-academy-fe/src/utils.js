const formatDate = (date) => date.slice(0, 10).split('-').reverse().join('.');
const formatTime = (date) => {
    date = date.split('T');
    return date[1].slice(0, 5);
};

export { formatDate, formatTime };