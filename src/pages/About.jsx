import { useState } from 'react';
import useSpring from '../CustomHook/useSpring';

const Abount = () => {
  const [target, setTarget] = useState(0);
  const value = useSpring(target);

  return (
    <div>
      {value}
      <br />
      <button onClick={() => setTarget(0)}>Set 0</button>
      <button onClick={() => setTarget(100)}>Set 100</button>
    </div>
  );
};


export default Abount