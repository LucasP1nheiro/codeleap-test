import { useSignupModal } from "../../hooks/signup/useSignupModal"


export const SignupModal = () => {
  const {
    userName,
    setUserName,
    handleSubmit
  } = useSignupModal()

  return (
    <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-4 bg-white rounded-xl xl:w-1/3 md:w-1/2 w-full"
    >
        <h1 className="font-bold text-2xl">Welcome to CodeLeap network!</h1>

        <label htmlFor="username">Please enter your username</label>
          <input
            placeholder="John doe"
            name="username"
            type="text"
            id="username"
            className="outline-none rounded-xl border-[1px] border-black p-1"
            onChange = {(e) => setUserName(e.target.value)}
          />
          
          <div
            className="w-full flex justify-end items-center"
          >
            <button
                type="submit"
                className={userName === "" ? "bg-default px-8 py-2 rounded-xl w-fit text-white uppercase justify-end" : "bg-paleBlue px-8 py-2 rounded-xl w-fit text-white uppercase justify-end hover:bg-paleBlue/50 duration-500"}
                disabled={userName === ""}
            >
                Enter
            </button>
        </div>
    </form>
  )
}

