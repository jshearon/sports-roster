import firebase from 'firebase/app';
import 'firebase/auth';

const userInfo = () => ({
  id: firebase.auth().currentUser.uid,
  name: firebase.auth().currentUser.displayName,
  thumbnail: firebase.auth().currentUser.photoURL,
});

export default { userInfo };
