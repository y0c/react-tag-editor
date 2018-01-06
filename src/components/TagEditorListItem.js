import React , { Component } from 'react';

class TagEditorListItem extends Component {

    constructor( props ){
        super(props);
    }

    render() {

        console.log('[TagEditorListItem]');
        return (
            <span className="TagEditorListItem">
                {this.props.tagName}
                <i
                    className="fa fa-close"
                    onClick={this.props.removed}
                ></i>
            </span>
        )
    }
}

export default TagEditorListItem;