import moment from 'moment';

export function marketTime() {
  const currentDate = moment().format('YYYY-MM-DD');
  const currentDateTime = moment();
  const checkDateTime = moment(currentDate + ' 15:30:00');
  const checkStartDateTime = moment(currentDate + ' 09:00:00');
  if (
    checkDateTime > currentDateTime &&
    checkStartDateTime < currentDateTime
  ) {
    return true;
  } else {
    return false;
  }
}
