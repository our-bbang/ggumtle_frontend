import { useState } from 'react';

//input에 focused된 적이 있는지 확인하는 hook
export const useFocusedOnce = () => {
  const [isFocusedOnce, setIsFocuesed] = useState(false);

  const handleFocus = () => {
    setIsFocuesed(true);
  };

  return {
    isFocusedOnce,
    handleFocus,
  };
};
