import React, { Component } from 'react';
import {Button, InputGroup, Input} from 'reactstrap';

class SearchBar extends Component{

    onValueChange = (e) => {
        const text = e.target.value;
        this.props.onTermUpdate(text)
    }


    render() {
        return (
            <div className="search-bar">
                <InputGroup>
                    <Input
                        value={this.props.term} 
                        onChange={this.onValueChange}
                        placeholder="search..." 
                    />
                    <Button
                        onClick={() => this.props.onSearch()} 
                        color="primary"
                    >Search</Button>
                </InputGroup>
            </div>
        );
    }
}

export default SearchBar;