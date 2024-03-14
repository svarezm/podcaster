import "../styles/components/SearchBar.scss"
const SearchBar: React.FC<{ onSearch: (term: string) => void }> = ({ onSearch }) => {
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = event.target.value.toLowerCase();
        onSearch(searchTerm);
    };

    return (
        <input className="search-bar" type="text" placeholder="Search..." onChange={handleSearchChange} />
    );
};

export default SearchBar;