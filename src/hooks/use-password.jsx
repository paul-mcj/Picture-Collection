// react and misc
import { useState } from "react";

const usePassword = () => {
     const [showPassword, setShowPassword] = useState(true);

     const handleShowPassword = () => {
          setShowPassword(() => !showPassword);
     };

     return { showPassword, handleShowPassword };
};

export default usePassword;
