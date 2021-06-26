import React, { Component } from 'react';
import { InputGroup, Input} from 'reactstrap';

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
                        onKeyPress={(e) => this.props.onSearch(e)}
                    />
                </InputGroup>
            </div>
        );
    }
}

export default SearchBar;