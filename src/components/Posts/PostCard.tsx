import { usePostCard } from "../../hooks/posts/usePostCard"
import { DataType } from "../../types/data"
import { timeAgo } from "../../utils/timeAgo"
import deleteImage from '../../assets/delete.svg'
import change from '../../assets/change.svg'


interface PostCardProps {
  post: DataType,
  openChangeModal: (bool: boolean) => void,
  openDeleteModal: (bool: boolean) => void,
  setCurrentId: (n: number) => void
}





const PostCard = ({ post, openChangeModal, openDeleteModal, setCurrentId }: PostCardProps) => {
 
  const {
    username,
    handleClickChange,
    handleClickDelete
  } = usePostCard({post, openChangeModal, openDeleteModal, setCurrentId})

  return (
    <div className="flex flex-col rounded-xl border-[1px] border-black">
      <div className="bg-paleBlue flex justify-between p-4 rounded-t-xl">
        <h1 className="text-2xl text-white font-medium">{post.title}</h1>
        {username === post.username && (
        <div className="flex gap-4">
          <button onClick={() => handleClickDelete()}><img src={deleteImage} alt="Delete" /></button>
          <button onClick={() => handleClickChange()}><img src={change} alt="Change" /></button>
        </div>
        )}
      </div>

      <div className="flex justify-between p-4">
        <h2 className="text-strongGray">@{post.username}</h2>
        <p className="text-strongGray">{timeAgo(post.created_datetime)}</p>
      </div>

      <div className="p-4">
        <p className="w-4/5">{post.content}</p>
      </div>
    </div>
  )
}

export default PostCard