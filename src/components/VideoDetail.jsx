import {useState} from "react";
import CommentsList from "./CommentsList";


function VideoDetail({ views, createdAt, upvotes, downvotes }) {

    const [upVote, setUpVote] = useState(upvotes)
    const [downVote, setDownVote] = useState(downvotes)
    const [isShowComment, setIsShowComment] = useState(true)

    function handleUpvoteClick() {
        setUpVote((upVote) => upVote + 1)
    }

    function handleDownVoteClick() {
        setDownVote((downVote) => downVote + 1)
    }

    function handleShowComments() {
        setIsShowComment((isShowComment) => !isShowComment)
        // console.log(isShowComment)
    }


    return (
        <div>
            <p>{views} Views | Uploaded {createdAt}</p>
            <button onClick={handleUpvoteClick}>{upVote}👍</button>
            <button onClick={handleDownVoteClick}>{downVote}👎</button>
            <br/>
            <br/>

            <button onClick={handleShowComments}>{isShowComment ? "Hide Comments" : "Show Comments"}</button>
            <hr/>
            <CommentsList showComment={isShowComment}/>
        </div>
    );
}


export default VideoDetail;


