interface Context {
  user: null | firebase.User;
  title: string;
  likedEntities: any;
}

const initialContext: Context = {
  user: null,
  title: '',
  likedEntities: null
};

const statechart = {
  id: 'App',
  initial: 'init',
  context: initialContext,
  states: {
    init: {
      on: {
        AUTH_SUCCESS: {
          target: 'signedIn',
          actions: 'updateUser'
        },
        AUTH_FAILURE: {
          target: 'signedOut',
          actions: 'updateUser'
        },
        UPDATE_TITLE: {
          actions: 'updateTitle'
        }
      }
    },

    signedIn: {
      on: {
        AUTH_FAILURE: {
          target: 'signedOut',
          actions: 'updateUser'
        },
        UPDATE_TITLE: {
          actions: 'updateTitle'
        }
      }
    },
    signedOut: {
      on: {
        AUTH_SUCCESS: {
          target: 'signedIn',
          actions: 'updateUser'
        },
        UPDATE_TITLE: {
          actions: 'updateTitle'
        }
      }
    }
  }
};

export default statechart;
