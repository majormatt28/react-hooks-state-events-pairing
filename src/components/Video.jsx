
function Video(props) {
    return (
        <>
        <iframe 
        width="919"
        height="525" 
        frameBorder="0"
        allowFullScreen 
        src={props.src}
        title={props.title}
         />
         <h1>
            {props.title}
         </h1>
        </>
    );
}

export default Video;