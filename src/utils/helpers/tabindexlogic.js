import React from 'react';

export function useTabIndexLogic() {
  const [tabIndex, setTabIndex] = React.useState(0);
  const [divSize, setDivSize] = React.useState();
  const handleTabsChange = index => {
    setTabIndex(index);
  };

  const cellRef = React.useRef();

  React.useEffect(() => {
    function handleResize() {
      if (tabIndex === 3) {
        setDivSize(cellRef.current?.clientHeight);
      }
    }

    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [tabIndex]);

  console.log('heyyyyy there', divSize);

  return {tabIndex, setTabIndex, handleTabsChange, cellRef, divSize};
}
