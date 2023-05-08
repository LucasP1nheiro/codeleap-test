import { useUpdatePost } from "../../hooks/posts/useUpdatePost";
import { DataType } from "../../types/data";

interface ChangePostProps {
  openChangeModal: (bool: boolean) => void,
  setData: (data: DataType[]) => void,
  id: number,
  page: number
}

const ChangePost = ({ openChangeModal, setData, id, page }: ChangePostProps) => {
  const {
    post,
    setPost,
    handleSubmit
  } = useUpdatePost({setData, id, openChangeModal, page})

  return (
    <div className="w-screen h-screen bg-black/60 flex items-center justify-center p-4 fixed top-0 left-0">
      <form
        onSubmit={handleSubmit}
        className="xl:w-1/3 md:w-2/3 w-full flex flex-col py-4 gap-8 rounded-xl bg-white p-8">
              <h1 className="md:text-xl text-lg"><strong>Edit item</strong></h1>

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
                value={post.title}
                placeholder="Hello world"
                className="outline-none rounded-xl border-[1px] border-black p-1"
                onChange={(e) => setPost({ ...post, title: e.target.value })}
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
                value={post.content}
                className="outline-none rounded-xl border-[1px] border-black p-1"
                onChange={(e) => setPost({ ...post, content: e.target.value })}
            />
        </div>

        <div
            className="w-full flex justify-end items-center gap-4"
          >
          <button
            className="px-8 py-2 rounded-xl border-[1px] border-black font-semibold"
            onClick={() => openChangeModal(false)}
          >
            Cancel
          </button>
            <button className="px-8 py-2 rounded-xl bg-green font-semibold text-white">Save</button>
        </div>
        

        </form>
    </div>
  )
}

export default ChangePost