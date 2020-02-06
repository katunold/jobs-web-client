import Firebase from './Firebase';
import api from './api';
import appFirebase from './Firebase';

const db = appFirebase.firestore();
const functions = appFirebase.functions();

const initializeAuthorizationListener = async (send: any): Promise<any> => {
  return Firebase.auth().onAuthStateChanged(
    async (user: firebase.User | null) => {
      if (user) {
        const tokenID = await user.getIdToken(true);
        api.initializeApi(tokenID, user.uid);
        const reports = await api.getReportsList();
        const watchlists = await api.getUserWatchlists();
        const isAdmin = await api.isAdmin();
        const hasTeam = await api.hasTeam();

        send({
          type: 'AUTH_SUCCESS',
          payload: {
            user: {
              tokenID,
              email: user.email,
              uid: user.uid,
              watchlists: watchlists.data.watchlists,
              firstName: user.displayName?.split(' ')[0] || 'User',
              isAdmin: isAdmin.data.is_admin,
              reports: reports.data.reports,
              hasTeam: hasTeam.data.has_team
            }
          }
        });
      } else {
        send({ type: 'AUTH_FAILURE', payload: { user } });
      }
    }
  );
};

export const signInWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<any> => {
  return await Firebase.auth().signInWithEmailAndPassword(email, password);
};

const signOut = async (): Promise<any> => {
  return await Firebase.auth().signOut();
};

const sendPasswordResetEmail = async (email: string): Promise<any> => {
  return await Firebase.auth().sendPasswordResetEmail(email);
};

const verifyPasswordResetCode = async (code: string): Promise<any> => {
  return await Firebase.auth().verifyPasswordResetCode(code);
};

const confirmPasswordReset = async (
  code: string,
  password: string
): Promise<any> => {
  return await Firebase.auth().confirmPasswordReset(code, password);
};

const fetchCompanies = async (): Promise<any> => {
  const companiesRef = db.collection('companies');
  const querySnapshot = await companiesRef.get();

  const companies: any = [];
  querySnapshot.forEach(doc => companies.push({ ...doc.data(), id: doc.id }));
  return companies;
};

const createUser = functions.httpsCallable('createUser');

export default {
  initializeAuthorizationListener,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  fetchCompanies,
  createUser,
  verifyPasswordResetCode,
  confirmPasswordReset
};
