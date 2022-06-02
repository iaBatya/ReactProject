import React, {Component} from "react";

export default class PostListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            added: false,
            like: false
        };
        this.onAdded = this.onAdded.bind(this);
        this.onLike = this.onLike.bind(this);
    }

    onAdded() {
        this.setState(({added}) => ({
            added: !added
        }))
    }

    
    onLike() {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render() {
        const {label} = this.props;
        const {added, like} = this.state;
        let classNames = 'app-list-item d-flex justify-content-between';
        if  (added) {
            classNames += ' added';
        }

        if  (like) {
            classNames += ' like';
        }
        

        return (
            <div className={classNames}>
                <span className="app-list-item-label"
                onClick={this.onLike}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button 
                    type="button" 
                    className="btn-star btn-sm"
                    onClick={this.onAdded}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button 
                    type="button" 
                    className="btn-trash btn-sm">
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}
