import React from "react"
import Icon from "@/components/Icon"

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <Icon
        type="iconbtn_share"
        className="test-icon"
        onClick={() => {
          alert("clicked")
        }}
      ></Icon>
    </div>
  )
}
