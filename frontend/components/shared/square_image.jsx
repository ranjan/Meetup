import React from 'react';
import { Link } from 'react-router';

export default ({item, className, path, size, name=false}) => {
  // have mode = bare, groupname, groupdetail
  let label;
  let isGroup = Boolean(item.name);
  let imgStyle = 'imgholder noline fontblack';
  if (isGroup) {
    label = (
      <ul className='imglabel'>
        <li><h2>{item.name}</h2></li>
        <li>{item.memberCount} members</li>
      </ul>
    );
  } else if (name) {
    label = item.username;
    imgStyle = 'imgholder';
  }
  let imgPath = imagePrefix + item.imageUrl;
  let img = (<img src={imgPath} width="128" height="128"></img>);
  if (size) {
    imgPath = imagePrefix + item.imageUrl;
    img = (<img src={imgPath} width={size[0]} height={size[1]} ></img>);
  }
  if (!name) {
    // group mode
    return (
      <div className={className}>
        <Link to={path} className={imgStyle}>
          {img}
          {label}
        </Link>
      </div>
    );
  } else {
    return (
      <div className={className}>
        <Link to={path} className={imgStyle}>
          {img}
        </Link>
        <Link to={path} className='lmargin'>{label}</Link>
      </div>
    );
  }
};
