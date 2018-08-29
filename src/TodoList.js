
import React from 'react';
import { Todo } from './Todo';

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {
    
        const toDOList= this.props.toDOList.map((todoNode)=> {
            return(
                <Todo text={todoNode.text} priority={todoNode.priority} dueDate= {todoNode.dueDate.toString()} />
                );
        });
        
        return (
            <table>
                <tbody>
                {toDOList}
                </tbody>    
            </table>
        );
    }
}
