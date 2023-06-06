function Toggle({ handleToggle }) {
  return (
    <label
      htmlFor="toggle"
      className="flex items-center cursor-pointer select-none"
    >
      <div className="relative">
        <input type="checkbox" id="toggle" className="sr-only" />
        <div
          className="h-7 w-14 
        bg-toggle-light 
        dark:bg-gradient-to-r from-toggle-dark-left to-toggle-dark-right rounded-full transition duration-500"
          onClick={handleToggle}
        ></div>
        <div
          className="absolute h-5 w-5 
          left-8 top-1 flex items-center justify-center rounded-full 
          dark:-translate-x-7
          bg-primary-white dark:bg-theme-dark-bgVeryDarkBlue transition duration-500"
          onClick={handleToggle}
        ></div>
      </div>
    </label>
  );

  //     <div className="relative">
  //       <div
  //         className={`w-12 h-6 bg-gradient-to-r from-toggle-dark-left to-toggle-dark-right rounded-2xl cursor-pointer transition duration-500 ${
  //           isOn ? ContainerToggleChecked : ""
  //         }`}
  //         onClick={handleToggle}
  //       />
  //       <div
  //         className={`absolute top-0.5 -left-5 w-5 h-5 rounded-full bg-theme-dark-bgVeryDarkBlue
  //         transition duration-500 ${isOn ? CircleToggleChecked : ""}`}
  //         onClick={handleToggle}
  //       />
  //     </div>
  //   );
}

export default Toggle;
