import { Link } from "react-router-dom";

export default function HooksIntro() {
  return(
    <>
      <h3>React hooks are functions that enable functional components to use state and lifecycle features that were previously only available in class components.</h3>
      <p>Hooks were added in React 16.8</p>
      <p>Hooks are prefixed with 'use'</p>
      <p>You must import Hooks from react.</p>
      <p>Hooks can only be called inside React function components.</p>
      <p>Hooks can only be called at the top level of a component.</p>
      <p>Hooks cannot be conditional</p>
      <h4>Below are commonly used hooks :</h4>
      <ol>
        <li><Link>useState</Link></li>
        <li><Link>useEffect</Link></li>
        <li><Link>useRef</Link></li>
        <li><Link>useMemo</Link></li>
        <li><Link>useCallback</Link></li>
        <li><Link>useReducer</Link></li>
        <li><Link>useContext</Link></li>
        <li><Link>useLayoutEffect</Link></li>
        <li><Link>Custom hooks</Link></li>
      </ol>
    </>
  );
}