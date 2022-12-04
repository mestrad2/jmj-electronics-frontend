function SearchBar(props) {
    return(
        <form>
            <input type="text" placeholder="Search"
                onChange={
                    (e) => props.startSearch(e,e.target.value)
                } />
        </form>
    )
}

export default SearchBar