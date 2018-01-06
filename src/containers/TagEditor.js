import React, { Component } from 'react';
import TagEditorForm from '../components/TagEditorForm';
import TagEditorList from '../components/TagEditorList';


class TagEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tagInput : '',
            tagList : []
        }
    }


    handleChangeInput = ( event ) => {
        this.setState({
            tagInput : event.target.value
        });
        console.log(this.state.tagInput)
    }

    handleKeyPress = ( event ) => {
        if ( event.charCode === 13 ){
            this.setState({
                tagInput : '',
                tagList : [ ...this.state.tagList].concat(event.target.value)
            })
        }
    }

    handleRemove = ( event, index ) => {
        const tagList = [ ...this.state.tagList ];
        tagList.splice(index, 1);

        this.setState({
            tagList
        });
    }

    render() {
        console.log('[TagEditor]');
        return (
            <div className="TagEditor">
                <TagEditorForm
                    tagInput={this.state.tagInput}
                    changed={this.handleChangeInput}
                    pressed={this.handleKeyPress}
                />
                <TagEditorList
                    tagList={this.state.tagList}
                    removed={this.handleRemove}
                />
            </div>
        )
    }
}

export default TagEditor;