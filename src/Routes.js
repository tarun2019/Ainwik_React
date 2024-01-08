import React from 'react';

// import * as fun from './components/functionalComp';
// import PropDemo from './components/propsDemo';
// import PropClassComp from './components/propClassComp';
// import Hamas from './components/StateInClassComp';
// import Counter from './components/temp';
// import UserLogin from './components/ternary';
// import LoginIfElse from './components/ifElse';
// import FetchComp from './components/fetchApi';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/layout';
// Header menu items /links below ----------
import Home from './components/pages/Home';
import LoginComp from './components/pages/login';

// Sidebar menu items /links  below ---------
import FunDeclaration, { ExpressionComp, ArrowFunction as Arrow} from './components/functionHooks/functionalComp';
import ClassComponent from './components/classLifecycle/classComponent';
import Lifecycle from './components/classLifecycle/lifecycle';
import HooksDemo from './components/functionHooks/hooksDemo';
import GetData from './components/getData';
import CustomAccordian from './components/structural/accordian';

// Footer menu items / routes below -------

// other routes / navlinks below -----
import SignUpComp from './components/pages/signupComp';
import NotFound from './components/pages/notFound';
import Contactus from './components/pages/contactus';
import Aboutus from './components/pages/aboutus';
import StateInClassComp from './components/classLifecycle/StateInClassComp';
import LifecycleMount from './components/classLifecycle/lifecycleMount';
import LifecycleUpdate from './components/classLifecycle/lifecycleUpdate';
import LifecycleUnmount from './components/classLifecycle/lifecycleUnmount';
import ErrorhandlingMethods from './components/classLifecycle/lifeErrorhandling';
import HooksIntro from './components/functionHooks/hooksIntro';
import StateHook from './components/functionHooks/stateHook';
import PureFunction from './components/functionHooks/pureFunction';
import EffectHook from './components/functionHooks/effectHook';
import ContextHook from './components/functionHooks/contextHook';

function RoutesComp() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          {/* header menu items / routes --- */}
          <Route index element={<Home />} />
          <Route exact path="login" element={<LoginComp/>} />
          {/* other routes --- */}
          <Route exact path='signup' element={<SignUpComp />} />
          <Route path='*' element={<NotFound/>} />
          {/* <Route path='learn' element={<tutorial />}> */}
          {/* sidebar menu items / routes --- */}
          <Route exact path='ClassComponent' element={<ClassComponent />} />
          <Route exact path='StateInClass' element={<StateInClassComp />} />
          <Route exact path='Lifecycle' element={<Lifecycle/>} />
          <Route exact path='LifecycleMount' element={<LifecycleMount/>} />
          <Route exact path='LifecycleUpdate' element={<LifecycleUpdate/>} />
          <Route exact path='LifecycleUnmount' element={<LifecycleUnmount/>} />
          <Route exact path='ErrorhandlingMethods' element={<ErrorhandlingMethods />} />
          <Route exact path='FunDeclaration' element={<FunDeclaration/>} />
          <Route exact path='ExpressionComp' element={<ExpressionComp/>} />
          <Route exact path='Arrow' element={<Arrow/>} />
          <Route exact path='PureFunction' element={<PureFunction/>} />
          <Route exact path='HooksIntro' element={<HooksIntro/>} />
          <Route exact path='StateHook' element={<StateHook/>} />
          <Route exact path='EffectHook' element={<EffectHook/>}/>
          <Route exact path='ContextHook' element={<ContextHook />} />
          <Route exact path='HooksDemo' element={<HooksDemo/>} />
          <Route exact path='GetData' element={<GetData/>} />
          <Route exact path='CustomAccordian' element={<CustomAccordian/>} />
          {/* Footer menu items / routes --- */}
          <Route exact path='/aboutus' element={<Aboutus/>} />
          <Route exact path='/contactus' element={<Contactus/>} />
          {/* </Route> */}
        </Route>
      </Routes>
      {/* <CustomAccordian /> */}
      {/* <FetchComp /> */}
      {/* <LoginIfElse /> */}
      {/* <UserLogin /> */}
      {/* <Counter />
      <Hamas />
      {/* <fun.ArrowFunction /> */}
      {/* <PropDemo msg={"Message, Hi Function"}/> */}
      {/* as prop value you can pass string / variable / array / object */}
      {/* <PropClassComp message={"Hi, class comp"}/> */}
    </div>
  );
}

export default RoutesComp;