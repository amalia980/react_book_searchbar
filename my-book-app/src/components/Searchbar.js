import './Searchbar.css'
import SearchIcon from '@material-ui/icons/Search';
import {useContext, useState} from 'react';
import { BookContext } from '../context/bookContext';
import CloseIcon from '@material-ui/icons/Close'
 


const Searchbar = ({placeholder}) => {

    const [filteredData, setFilteredData] = useState([]);
    const [clear, setClear] = useState("");
    const book = useContext(BookContext)

    book.sort((a, b) => 
    a.title > b.title ? 1 : -1
  );

    const handleFilter = (e) => {
        const searchWord = e.target.value;
        setClear(searchWord);
        const newFilter = book.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter)
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setClear("");
    }

    return (
        <>
        <div className='searchInputs'>
            <input type="text" value={clear} placeholder={placeholder} onChange={handleFilter} />
            <div className='icon'>
                {filteredData.length === 0 ? <SearchIcon /> : <CloseIcon id="clear-btn" onClick={clearInput} />}         
            </div>
        </div>

        {filteredData.length !== 0 && (
            <div className='output-wrapper'>
            {filteredData.map((item) => (
                    <a className='links'href={item.link}>
                        <p>
                            <b>{item.title}</b> | {item.author}
                        </p>
                    </a>
            ))}
            </div>
        )}
        </>
    );
};

export default Searchbar;