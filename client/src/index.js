import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './Ducks/Store/Store'; 
import { Provider } from 'react-redux';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
  key: "root",
  storage,              // localStorage에 저장=>반영구적으로 저장됨, 자동로그인에 유리 , session은 메모리상 저장이기 떄문에 브라우저를 종료하면 데이터가 사라진다.=>입력폼, 장바구니에 유리  , cookie는 다시보지 않기 팝업창에 유리 
  whitelist: ["Oauth"]  // Oauth만 저장 
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);