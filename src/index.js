import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';

import App from './App';
import Loading from './components/Loading';
import reportWebVitals from './reportWebVitals';

const FullPageLoading = () => (
  <div className='vh-100 position-fixed top-50 start-50'>
    <Loading />
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Suspense fallback={<FullPageLoading />}>
        <App />
      </Suspense>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
