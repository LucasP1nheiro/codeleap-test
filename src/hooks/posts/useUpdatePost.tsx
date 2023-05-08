import { FormEvent, useState } from "react";
import { ChangePostType } from "../../types/changePost";
import { DataType } from "../../types/data";
import { changePost, getPosts } from "../../actions/fetchApi";

interface UseUpdatePostProps {
    openChangeModal: (bool: boolean) => void,
    setData: (data: DataType[]) => void,
    id: number
}

export function useUpdatePost({setData, id, openChangeModal} : UseUpdatePostProps) {
    const [post, setPost] = useState<ChangePostType>({
        title: '',
        content: ''
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        await changePost(post, id)

        //refetching data
        try {
            getPosts({setData})
        } finally {
            openChangeModal(false)
        }
    }

    return {
        post, 
        setPost,
        handleSubmit
    }
}