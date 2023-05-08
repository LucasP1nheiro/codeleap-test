import { FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { setName } from "../../redux/username/username-slice"
import { useNavigate } from "react-router-dom"

export function useSignupModal() {
    const [userName, setUserName] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        
        dispatch(setName(userName))

        localStorage.setItem('username', userName);

        navigate('/posts')
    }

    return {
        handleSubmit,
        setUserName,
        userName
    }
}