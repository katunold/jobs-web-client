import { assign } from 'xstate';

// interface IUserEvent {
//   type: 'string';
//   payload: {
//     user: firebase.User;
//   };
// }

const actions = {
  updateUser: assign({
    user: (_: any, event: any) => event.payload.user,
    title: ''
  }),
  updateTitle: assign({
    title: (_: any, event: any) => event.payload.title
  }),
  updateLikedEntities: assign({
    likedEntities: (ctx: any, event: any) => event.payload
  })
};

export default actions;
