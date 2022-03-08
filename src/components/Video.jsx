import React from 'react';
import video from '../data/video';
import {useState} from 'react';

function Video({id, title, embedUrl, views, createdAt, upvotes, downvotes, comments}) {

  const [likes, setLikes] = useState(upvotes);
  const [dislikes, setdisLikes] = useState(downvotes);

  return (
    <div>
      <h1 className='title'>{video.title}</h1>
      <div>
        <span>{views} | </span>
        <span>{createdAt}</span>
      </div>
      <div>
        <button>{upvotes}</button>
        <button>{downvotes}</button>
      </div>
      <button>Hide Comments</button>
      <p>{comments.id}</p>
      <p>{comments.user}</p>
      <h2>{comments.comment}</h2>
    </div>
  )
}

export default Video;