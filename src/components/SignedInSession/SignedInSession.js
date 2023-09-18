import React, { useState } from "react";
import { useEffect } from "react";
import SignedInSessionStyled from "../../styled/SignedInSessionStyled";
import axios from "axios";
import HeadingMenu from "../HeadingMenu/HeadingMenu";

const SignedInSession = () => {
    const [ sessionData, setSessionData ] = useState([]);
    const [ isCommenting, setIsCommenting ] = useState(false);
    const [ currentSessionData, setCurrentSessionData ] = useState({});

    const handleClickComment = (data) => {
        setIsCommenting(true);
        setCurrentSessionData(data);
    }

    const handleClickSubmitComment = () => {
        axios.post('http://localhost:8080/api/v1/sessions/comment', {
            access_token_id: currentSessionData.uuid,
            comment: currentSessionData.comment
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem('Authorization-Token')
            }
        }).then(() => {
            setIsCommenting(false);
            setCurrentSessionData({});
        })
    }

    const handleClickCancelComment = () => {
        setIsCommenting(false);
        setCurrentSessionData({});
    }

    const handleChangeComment = (e) => {
        const { name, value } = e.target;

        setCurrentSessionData({
            ...currentSessionData,
            [name]: value
        })
    }

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/sessions', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem('Authorization-Token')
            }
        }).then((response) => {
            const sessionRows = [];

            for (let i = 0; i < response.data.data.length; i++) {
                let sessionDuration = null;
                if (response.data.data[i].revoked_at != "") {
                    const loggedInAt = new Date(response.data.data[i].created_at);
                    const loggedOutAt = new Date(response.data.data[i].revoked_at);

                    const timeDifferenceMs = loggedOutAt - loggedInAt;

                    const seconds = Math.abs(Math.floor(timeDifferenceMs / 1000));
                    const minutes = Math.abs(Math.floor(seconds / 60));
                    const hours = Math.abs(Math.floor(minutes / 60));

                    sessionDuration = `${hours} hours, ${minutes % 60} minutes, ${seconds % 60} seconds`;
                }

                sessionRows.push(
                    <>
                        <tr>
                            <td>{i + 1}</td>
                            <td>{response.data.data[i].uuid}</td>
                            <td>{response.data.data[i].source}</td>
                            <td>{response.data.data[i].created_at}</td>
                            <td>{response.data.data[i].revoked_at == "" ? 'Current Session' : response.data.data[i].revoked_at}</td>
                            <td>{sessionDuration === null ? 'Ongoing' : sessionDuration}</td>
                            <td>{response.data.data[i].comment == "" ? <a onClick={() => handleClickComment(response.data.data[i])}>Leave a comment</a> : response.data.data[i].comment}</td>
                        </tr>
                    </>
                );
            }

            setSessionData(sessionRows);
        })
    }, [isCommenting]);

    return (
        <SignedInSessionStyled>
            <HeadingMenu titleText={"My Session"} subtitleText={"/  My Session"} />
            <div className="tableContainer">
                {
                    isCommenting ? (
                        <>
                            <div className="form__field">
                                <label>Leave comment for session {currentSessionData.uuid}.</label><a onClick={handleClickCancelComment}> Cancel here.</a>
                                <input id="comment" value={currentSessionData.comment} type="text" name="comment" onChange={handleChangeComment}/>
                                <button onClick={handleClickSubmitComment}>Comment</button>
                            </div>
                        </>
                    ) : null
                }
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Session ID</th>
                            <th>Source</th>
                            <th>Logged In At</th>
                            <th>Logged Out At</th>
                            <th>Duration</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sessionData}
                    </tbody>
                </table>
            </div>
        </SignedInSessionStyled>
    )
}

export default SignedInSession;
