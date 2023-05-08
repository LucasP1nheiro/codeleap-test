import {deletePost, getPosts} from '../../actions/fetchApi'
import { DataType } from '../../types/data'

interface UseDeletePostProps {
    openDeleteModal: (bool: boolean) => void,
    id: number,
    setData: (data: DataType[]) => void,
    page: number
}

export function useDeletePost({ id, openDeleteModal, setData, page }: UseDeletePostProps) {
    console.log(page)

    const handleDelete = async () => {
        await deletePost(id)
        
        //refetching data
        try {
            await getPosts({setData, page})
        } finally {
            openDeleteModal(false)
        }

        
    }

    return handleDelete
}