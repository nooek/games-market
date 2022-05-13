import React from "react"
import "./styles.css"
import { useParams } from "react-router-dom"
import GeneralPage from "../../components/changeInfo/generalPage/generalPage"
import ChangeUsername from "../../components/changeInfo/username/username"
import ChangeEmail from "../../components/changeInfo/email/email"
import ChangePassword from "../../components/changeInfo/password/password"

const ChangeInfo = () => {
  const { change } = useParams()

  if (change === "choose") return <GeneralPage />
  if (change === "username") return <ChangeUsername />
  if (change === "email") return <ChangeEmail />
  if (change === "password") return <ChangePassword />
}

export default ChangeInfo
