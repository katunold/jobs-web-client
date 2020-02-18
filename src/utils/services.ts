import firebaseAPI from '../http/firebaseAPI';

const services = {
  firebaseSignOut: async (): Promise<any> => {
    return firebaseAPI.signOut;
  }
  //   firebaseSignIn: () => {}
};

export default services;
