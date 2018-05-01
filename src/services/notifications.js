import Noty from 'noty';

export default class NotificationsService {
  success(message) {
    (new Noty({
      text: message,
      type: 'success',
    })).show();
  }

  error(message) {
    (new Noty({
      text: message,
      type: 'error',
    })).show();
  }
}
