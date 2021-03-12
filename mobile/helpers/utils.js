import moment from "moment";
moment.locale("fr");

const dateUtils = {
    currentDate: formatedDate => {
        return moment().format(formatedDate);
    },
    formatDate: (date, formatedDate) => {
        return moment(new Date(date)).format(formatedDate);
    },
};

export { dateUtils };
