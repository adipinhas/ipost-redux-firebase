// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import {HashRouter} from 'react-router-dom'
// import {createStore, applyMiddleware, compose} from 'redux'
// import rootReducer from './store/reducres/roootReducer'
// import {Provider} from 'react-redux'
// import thunk from 'redux-thunk'
// import {reduxFirestore,getFirestore} from 'redux-firestore'
// import {reactReduxFirebase,getFirebase } from 'react-redux-firebase'
// import fbConfig from './config/fbConfig'

// const store =  createStore(rootReducer,
//   compose( 
//     applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
//     reduxFirestore(fbConfig),
//     reactReduxFirebase(fbConfig)
//   )
//  );
// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//     <HashRouter>
//     <App />
//     </HashRouter>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();



import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducres/roootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
import firebase from 'firebase/app'

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
        reduxFirestore(firebase, fbConfig)
    )
);

const rrfProps = {
    firebase,
    config: fbConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
};

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <HashRouter>
            <App />
          </HashRouter>
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById("root")
);


serviceWorker.unregister(); 


