import { useDispatch, useSelector } from "react-redux"

import { StateType } from "../store/root-reducer"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { getUserThunk } from "../store/users/thunk"
import { useAppDispatch, useAppSelector } from "../hooks"

export const Profile:React.FC = () => {
  const {data, isLoading} = useAppSelector((state: StateType) => state.users.user)
  const {id} = useParams()
  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(getUserThunk())
  }, [id])

  return (
    <div>
      {
        isLoading? <span>Loading...</span>:
        data?<div>Hi, I am {data.name}, id: {data.id}</div>:<span>No user found</span>
      }
    </div>
  )
}