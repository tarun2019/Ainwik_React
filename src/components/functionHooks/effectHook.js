import effectSyntaxImg from '../../images/useEffectSyntax.png'

export default function EffectHook () {
  return(
    <>
      <p>Side effects are not predictable because they are actions which are performed with the "outside world."</p>
      <p className="warn">Side effects should be separated from the rendering process. If we need to perform a side effect, it should strictly be done after our component renders.</p>
      <p>This is why useEffect exists: to provide a way to handle performing these side effects.</p>
      <p className='error italic'>It serves the same purpose as componentDidMount, componentDidUpdate, componentWillUnmount.</p>
      <p>Common side effects include:</p>
      <ol>
        <li>Making a request to an API for data from a backend server</li>
        <li>To interact with browser APIs (that is, to use document or window directly)</li>
        <li>Using unpredictable timing functions like setTimeout or setInterval</li>
        <li></li>
      </ol>
      <h4>Syntax :</h4>
      <img src={effectSyntaxImg} alt='useEffectSyntax' width="100%"/>
      <br/><br/><h4>How to use :</h4>
      <ol className='italic'>
        <li>import useEffect from "react";</li>
        <li>Call it above the returned JSX in our component</li>
        <li>Pass it two arguments: a function and an array ( 2nd argument is optional )</li>
        <li>1st argument is a callback function. We can perform our side effects or multiple side effects in it.</li>
        <li>The second argument is an array, called the dependencies array.</li>
        <li>As <b>componentDidUpdate</b> - What this array will do is it will check and see if a value has changed between renders. If so, it will execute our use effect function again.</li>
        <li>If the dependencies array is missing, useEffect will run after every render.</li>
        <li>As <b>componentDidMount</b> - If you do provide an empty array, ( which is recommend ) effect function will run only once after the component has rendered the first time.</li>
        <li>As <b>componentWillUnmount</b> - return a function from within the useEffect function.  It is only required in a few cases, such as when you need to stop a repeated side effect when your component unmounts. i.e. - clearInterval, unsubscribe</li>
      </ol>
      <h3 className='error'>Ref:- https://www.freecodecamp.org/news/react-useeffect-absolute-beginners/</h3>
    </>
  );
}