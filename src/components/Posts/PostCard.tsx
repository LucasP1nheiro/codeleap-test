import { useSelector } from "react-redux";
import { DataType } from "../../types/data"
import { RootState } from "../../redux/username/store";


interface PostCardProps {
    post: DataType
}

function timeAgo(timestampStr: string): string {
  
  const timestamp = new Date(timestampStr);

  
  const now = new Date();
  const delta = now.getTime() - timestamp.getTime();

  
  if (delta > 86400000) { // 1 day in milliseconds
    const days = Math.floor(delta / 86400000);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (delta >= 3600000) { // 1 hour in milliseconds
    const hours = Math.floor(delta / 3600000);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (delta >= 60000) { // 1 minute in milliseconds
    const minutes = Math.floor(delta / 60000);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else {
    return 'just now';
  }
}



const PostCard = ({ post }: PostCardProps) => {
  const username = useSelector((state: RootState) => state.name.value);

  console.log(post.title);


  return (
    <div className="flex flex-col rounded-xl border-[1px] border-black">
      <div className="bg-paleBlue flex justify-between p-4 rounded-t-xl">
        <h1 className="text-2xl text-white font-medium">{post.title}</h1>
      </div>

      <div className="flex justify-between p-4">
        <h2 className="text-strongGray">@{post.username}</h2>
        <p className="text-strongGray">{timeAgo(post.created_datetime)}</p>
      </div>

      <div className="p-4">
        <p>{post.content}</p>
      </div>
    </div>
  )
}

export default PostCard