
function Comment(props) {
    return (
        <div>
            <p><strong>{props.user}</strong></p>
            <p>{props.comment}</p>

        </div>
    );
}

export default Comment;