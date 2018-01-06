import React, { Component } from 'react';
import TagEditorListItem from './TagEditorListItem';

class TagEditorList extends Component {

    constructor( props ){
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState ) {
        return nextProps.tagList !== this.props.tagList;
    }

    render() {
        console.log('[TagEditorList]');
        return (
            <div className="TagEditorList">
                {
                    this.props.tagList.map( (tag, index) => {
                        return (
                            <TagEditorListItem
                                key={index}
                                index={index}
                                tagName={tag}
                                removed={this.props.removed}
                            />
                        )
                    })

                }
            </div>
        )
    }
}

export default TagEditorList;