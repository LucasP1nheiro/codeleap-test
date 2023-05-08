import { useSelector } from "react-redux";
import { RootState } from "../../redux/username/store";
import { DataType } from "../../types/data";

interface PostCardProps {
    post: DataType,
    openChangeModal: (bool: boolean) => void,
    openDeleteModal: (bool: boolean) => void,
    setCurrentId: (n: number) => void
}

export function usePostCard({ post, openChangeModal, openDeleteModal, setCurrentId }: PostCardProps) {
    
    const username = useSelector((state: RootState) => state.name.value);

    const handleClickDelete = () => {
        openDeleteModal(true)
        setCurrentId(post.id)
    }

    const handleClickChange = () => {
        openChangeModal(true)
        setCurrentId(post.id)
    }


    return {
        username,
        handleClickDelete,
        handleClickChange,
    }
}