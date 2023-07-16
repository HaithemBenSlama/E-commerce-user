import React from "react";

const ForgetPassword = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: showSignup ? 0 : 1, scale: showSignup ? 0.9 : 1 }}
      transition={{ duration: 0.5 }}
      className={`pt-16 items-center justify-center flex px-5 md:px-0 ${
        showSignup ? "hidden" : ""
      }`}
    >
      <div className="md:px-16 w-full px-10 mt-10 md:w-1/3 bg-slate-100 py-10 rounded-xl shadow-xl">
        <h2 className="font-bold text-2xl">Login</h2>
        <p className="text-sm mt-4">If you already a member, easily log in</p>
        <form className="flex flex-col gap-4 mt-5">
          <CustomInput
            disabled={false}
            error={false}
            errorMessage={""}
            id={"login_email"}
            label={"Email"}
            name={"login_email"}
            placeholder={"exemple@comapny.com"}
            required={true}
            type={"email"}
          />
          <div className="flex items-start my-3">
            <div className="flex items-center h-5">
              <input
                id="terms"
                aria-describedby="terms"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                required=""
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                for="terms"
                className="font-light text-gray-500 dark:text-gray-300"
              >
                I accept the{" "}
                <a
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  href="#"
                >
                  Terms and Conditions{" "}
                </a>
              </label>
            </div>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default ForgetPassword;
