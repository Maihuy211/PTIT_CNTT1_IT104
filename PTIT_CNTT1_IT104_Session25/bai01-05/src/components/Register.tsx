export default function Register() {
  return (
    <div className=" bg-white flex items-center justify-center rounded-2xl pb-5">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-semibold text-slate-800 text-center mb-6 w-[450px]">
          Create account
        </h1>

        <form className="space-y-5">


          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700"
            >
              Your email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="name@company.com"
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 placeholder:text-slate-400 h-[40px] text-[14px]"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-slate-700"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 placeholder:text-slate-400 h-[40px] text-[14px]"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 placeholder:text-slate-400 h-[40px] text-[14px]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-2.5 text-white h-[40px] text-[14px]"
          >
            Login an account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <a href="#" className="font-medium text-gray-500 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}
