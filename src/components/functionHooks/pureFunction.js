export default function PureFunction() {
  return(
    <>
      <p>Most React components are pure functions, meaning they receive an input and produce a predictable output.</p>
      <p>This is pure because, given the same input, it will always return the same output.</p>
      <p>The input to a JavaScript function is arguments. In case of a React component it is <b>Props!</b></p>
      <p>Pure functions have the great benefit of being predictable, reliable, and easy to test.</p>
      
    </>
  );
}