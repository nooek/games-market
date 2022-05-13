import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUserData } from "../store/userContext";

const GetUserInfo = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const { setUserData } = useUserData();
  const token = localStorage.getItem("jwt");

  useEffect(() => {
    axios
      .get("http://localhost:3333/api/userr/auth", {
        headers: {
          "access-token": token,
        },
      })
      .then((res) => {
        console.log(res);
        setLoading(false);
        if (res.data) {
          if (res.data.user) {
            setUserData(res.data.user);
          }
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [setUserData, token]);

  if (!loading || !token) {
    return children;
  }

  return <></>;
};

export default GetUserInfo;
