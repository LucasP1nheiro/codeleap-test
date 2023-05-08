import { useDispatch } from "react-redux";
import { setName } from "../../redux/username/username-slice";
import { useNavigate } from "react-router-dom";


const Logout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(setName(''))

        localStorage.setItem('username', '')

        navigate('/')
    }

  return (
      <>
          <p
              onClick={() => handleLogout()}
              className="text-lg text-white font-medium cursor-pointer"
          >
              Logout
          </p>
      </>
  )
}

export default Logout