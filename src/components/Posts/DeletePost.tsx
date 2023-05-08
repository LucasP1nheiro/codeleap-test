
import { useDeletePost } from "../../hooks/posts/useDeletePost";
import { DataType } from "../../types/data";


interface DelePostProps {
  openDeleteModal: (bool: boolean) => void;
  id: number,
  setData: (data: DataType[]) => void
}

const DeletePost = ({ openDeleteModal, id, setData }: DelePostProps) => {
  const handleDelete = useDeletePost({ id, openDeleteModal, setData })
  
 
  return (
    <div className="w-screen h-screen bg-black/60 flex items-center justify-center p-4 fixed top-0 left-0">
          <div className="xl:w-1/3 md:w-2/3 w-full flex flex-col py-4 gap-8 rounded-xl bg-white p-8">
              <h1 className="md:text-xl text-lg"><strong>Are you sure you want to delete this item?</strong></h1>

              <div className='flex gap-4 items-center justify-end'>
                  
                  <button
                    className="px-8 py-2 rounded-xl border-[1px] border-black font-semibold"
                    onClick={() => openDeleteModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-8 py-2 rounded-xl bg-red font-semibold text-white"
                    onClick={() => handleDelete()}
                  >
                    Delete
                  </button>
              </div>
          </div>
    </div>
  )
}

export default DeletePost