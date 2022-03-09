import React from 'react';
import video from '../data/video';
import {useState} from 'react';

function Video({title, uri, views, createdAt, upvotes, downvotes, comments}) {

  const [like, setlike] = useState(upvotes);
  const [dislike, setdislike] = useState(downvotes);
  const [show, setShow] = useState(true);

  return (
    <div>
      <iframe
          width="919"
          height="525"
          src={uri}
          frameBorder="0"
          allowFullScreen
          title="Thinking in React"
      />
      <h1 className='title'>{title}</h1>
      <div>
        <span>{views} Views |</span>
        <span> Uploaded {createdAt}</span>
      </div>
      <div>
        <button onClick={()=>setlike(like+1)}>{like}👍</button>
        <button onClick={()=>setdislike(dislike+1)}>{dislike}👎 </button>
      </div>

      <hr></hr>
      
      <button onClick={()=> setShow(!show)}>
          {show ? "Hide" : "Show"} Comments
      </button>

      {
        show ? (
          <div>
            <h4>{comments.length} Comments</h4>
            {comments.map(comment => {
              return (
                <div key={comment.id}>
                  <h5>{comment.user}</h5>
                  <h5>{comment.comment}</h5>
                </div>
              )
            })}
          </div>
        ) : null
      }

    </div>
  )
}

export default Video;