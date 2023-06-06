import moment from 'moment-jalaali';
const momentJalali = moment;

momentJalali.loadPersian({
  dialect: 'persian-modern',
});

export default momentJalali;
