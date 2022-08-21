import React from "react";
import axios, {Axios} from "axios";
import SearchInput from "./SearchInput";

class App extends React.Component {
    state = {images: []}

    onSearchSubmit = async (entry) => {
        const response = await axios.get(`https://pixabay.com/api/?key=29417782-ff3bb531e2194a82724270d90&q=${entry}&image_type=photo`)
        //   console.log(response.data.hits)
        this.setState({images: response.data.hits})
    }

    render() {
        return (
            <div className='ui container' style={{marginTop: '30px'}}>
                <SearchInput onSearchSubmit={this.onSearchSubmit}/>
                We have {this.state.images.length} images
            </div>
        )
    }
}

export default App
