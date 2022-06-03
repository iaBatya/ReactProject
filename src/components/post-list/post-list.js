import React from "react";

import PostListItem from '../post-list-item';
import { ListGroup, ListGroupItem } from "reactstrap";
import './post-list.css';

const PostList = ({posts, onDelete, onToggleAdded, onToggleLiked}) => {
    
    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="list-group-item">
                <PostListItem 
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleAdded={() => onToggleAdded(id)}
                    onToggleLiked={() => onToggleLiked(id)}/>
            </li>
        )
    });
    
    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;