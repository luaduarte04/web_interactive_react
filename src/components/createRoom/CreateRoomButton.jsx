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
        const link = res.url;
        console.log("Link:", link)
        history.push(`/teacher/room/${link}`)
        // return (
        //   // <Switch>
        //     <Redirect to="/teacher/room/masjdbaj" />
        //   // </Switch> 
        // )
      })
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