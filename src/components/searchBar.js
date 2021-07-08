import React, { Component } from 'react';
import { FormGroup, Input, FormText} from 'reactstrap';

class SearchBar extends Component{
    onValueChange = (e) => {
        const text = e.target.value;
        this.props.onTermUpdate(text)
    }

    render() {
        return (
            <div className="search-bar">
                <FormGroup>
                    <Input
                        color="red"
                        value={this.props.term} 
                        onChange={this.onValueChange}
                        placeholder="search..." 
                        onKeyPress={(e) => this.props.onSearch(e)}
                    />
                    {this.props.error ? <FormText color="white">Incorrect input data. Try again</FormText> : null}
                </FormGroup>
                
            </div>
        );
    }
}

export default SearchBar;