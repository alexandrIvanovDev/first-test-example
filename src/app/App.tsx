import './styles/App.scss';
import { Router } from './providers/router/router.tsx';

const App = () => (
  <div className="wrapper">
    <Router />
    {/* <ButtonColorChanger /> */}
    {/* <LoginForm submitForm={submitForm} /> */}
    {/* {userData */}
    {/*  && ( */}
    {/*    <> */}
    {/*      <h3>User data</h3> */}
    {/*      <div> */}
    {/*        Email: */}
    {/*        {userData.email} */}
    {/*      </div> */}
    {/*      <div> */}
    {/*        Password: */}
    {/*        {userData.password} */}
    {/*      </div> */}
    {/*    </> */}
    {/*  )} */}
  </div>
);

export default App;
