import React, { Component } from 'react';

class TagEditorForm extends Component {

    constructor( props ){
        super(props);

    }

    render() {
        console.log('[TagEditorForm]');
        return (
            <div className="TagEditorForm">
                <input
                    className="TagInput"
                    type='text'
                    placeholder='Insert Tag Here...'
                    onKeyPress={this.props.pressed}
                    onChange={this.props.changed}
                    value={this.props.tagInput}
                />
            </div>
        )
    }
}

export default TagEditorForm;