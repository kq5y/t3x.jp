import{ useLayoutEffect, useState, RefObject } from 'react';


function useElementSize<T = HTMLDivElement>(ref: RefObject<T>): number[]{
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = () => {
        if (ref.current === null || ref.current === undefined) return
        else if ((ref.current as any).offsetWidth === undefined || (ref.current as any).offsetHeight === undefined) return
        else{
            setSize([(ref.current as any).offsetWidth, (ref.current as any).offsetHeight]);
        }
    }

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

export default useElementSize;

