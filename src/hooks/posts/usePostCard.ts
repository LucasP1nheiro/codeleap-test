
import { DataType } from "../../types/data";

interface PostCardProps {
    post: DataType,
    openChangeModal: (bool: boolean) => void,
    openDeleteModal: (bool: boolean) => void,
    setCurrentId: (n: number) => void
}

export function usePostCard({ post, openChangeModal, openDeleteModal, setCurrentId }: PostCardProps) {
    
    const username = localStorage.getItem('username');

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