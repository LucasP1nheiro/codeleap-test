import { useFormPost } from "../../hooks/posts/useFormPost"


const FormPost = () => {
  const {
    title,
    setTitle,
    content,
    setContent,
    handleSubmit,
  } = useFormPost()

  return (
    <form
        onSubmit={handleSubmit}
        className="flex flex-col border-[1px] border-black p-4 rounded-xl gap-4"
      >
          <h1 className="text-2xl font-semibold"><strong>What's on your mind?</strong></h1>

          <div className="flex flex-col gap-1">
              
              <label
                  htmlFor="title"
                  className="font-semibold"
              >
                  Title
              </label>

            <input
                id="title"
                name="title"  
                type="text"
                value={title}
                placeholder="Hello world"
                className="outline-none rounded-xl border-[1px] border-black p-1"
                onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
              
              <label
                  htmlFor="content"
                  className="font-semibold"
              >
                  Content
              </label>

            <textarea
                id="content"
                name="content"  
                placeholder="Content here"
                value={content}
                className="outline-none rounded-xl border-[1px] border-black p-1"
                onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <div
            className="w-full flex justify-end items-center"
          >
            <button
                type="submit"
                className={title === "" || content === "" ? "bg-default px-8 py-2 rounded-xl w-fit text-white uppercase justify-end" : "bg-paleBlue px-8 py-2 rounded-xl w-fit text-white uppercase justify-end"}
                disabled={title === "" || content === ""}
            >
                Enter
            </button>
        </div>

      </form>
  )
}

export default FormPost