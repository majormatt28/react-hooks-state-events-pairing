import video from "../data/video.js";
import Comment from "./Comment";

function CommentsList(props) {
    const commentComponents = video.comments.map(comment => {
        return <Comment key={comment.id} user={comment.user} comment={comment.comment} />
    })

    return (
        <div style={{display: props.showComment ? "block":"none"}}>
            <h2>
                {video.comments.length} Comments
            </h2>
            {commentComponents}
        </div>
    );
}

export default CommentsList;