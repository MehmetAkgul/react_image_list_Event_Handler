import React from "react";

class SearchInput extends React.Component {


    render() {
        return (
            <div className='ui segment'>
                <form action="" className='ui form'>
                    <div className="field">
                        <div className="ui massive icon input">
                            <input type="text"
                                   placeholder='search...'
                                   onChange={(event)=>console.log(event.target.value)} //
                            />
                            <i className="search icon"></i>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchInput