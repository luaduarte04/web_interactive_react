import React from "react";
import {
  useParams,
  useHistory
} from "react-router-dom";
import {Redirect} from "react-router"

export default function CreateRoomButton({getURL}){
  const history = useHistory();
    let id = useParams();
    console.log(id)
    function generateRandomLink() {
      getURL()
      .then(res => {
        if(res) {
          const link = res.url;
          console.log("Link:", link)
          history.push(`/classroom/${link}`)
        } else {
          history.push("/login")
        }
      })
      .catch(err => console.log(err))
    }
    return (
      <button
        className={""}
        onClick={() => generateRandomLink()}
      >
        {"Create Room"}
      </button>
    );
}
// export default withRouter(CreateRoomButton)