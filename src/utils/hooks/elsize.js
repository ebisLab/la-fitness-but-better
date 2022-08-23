import {useEffect, useRef, useState} from 'react';

export function useElSize() {
  const ref = useRef(null);

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [divSize, setDivSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    setHeight(ref.current.offsetHeight);
    setWidth(ref.current.offsetWidth);
    setDivSize({
      width: ref.current.offsetHeight,
      height: ref.current.offsetWidth,
    });
  }, []);
  console.log('height 2nd hook', height);
  console.log('width 2nd hook', width);
  return {divSize, ref};
  //   return 'TESTER TESTERINO';
}
