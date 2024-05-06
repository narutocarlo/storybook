import * as moment from 'moment';

function formatDate(value = '', formatType = '') {
  if (value == null) return 'N/A';
  return moment(value).format(formatType);
}

export {
  formatDate,
};
