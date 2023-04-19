import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((promises) => {
      const arr = [];
      promises.forEach((item) => {
        if (item.status === 'fulfilled') {
          arr.push({ status: item.status, value: item.value });
        } else {
          arr.push({
            status: item.status,
            value: `Error: ${item.reason.message}`,
          });
        }
      });
      return arr;
    });
}
