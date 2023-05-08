import {deletePost, getPosts} from '../../actions/fetchApi'
import { DataType } from '../../types/data'

interface UseDeletePostProps {
    openDeleteModal: (bool: boolean) => void,
    id: number,
    setData: (data: DataType[]) => void
}

export function useDeletePost({id, openDeleteModal, setData}: UseDeletePostProps) {
    const handleDelete = async () => {
        await deletePost(id)
        
        //refetching data
        try {
            await getPosts({setData})
        } finally {
            openDeleteModal(false)
        }

        
    }

    return handleDelete
}