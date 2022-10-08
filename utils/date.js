import dayjs from "dayjs";

const dateFormat = (date) => {
    dayjs.locale('fr');
    const k = dayjs(date);
    return k.isValid() ? k.format('DD MMM YYY').toString() :  '';
}

export default dateFormat;
