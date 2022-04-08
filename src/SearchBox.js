import { useSearchBox } from 'react-instantsearch-hooks';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import { useStateValue } from "./StateProvider";
import { useState, useEffect, useRef} from 'react';
import './SearchBox.css'
import './Hits.css'
import { useHits } from 'react-instantsearch-hooks';
import { useNavigate } from 'react-router-dom';


export function SearchBox(props) {
    const navigate = useNavigate();

    const [{},dispatch] = useStateValue();
    const [content] = useStateValue();

  const { query, refine, isSearchStalled } = useSearchBox(props);
  const [inputValue, setInputValue] = useState(query);
//   console.log(query);
  const inputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
        // Add item to basket...
        dispatch({
          type: "SET_PARAM",
          param: inputValue
        });

    if (inputRef.current) {
      inputRef.current.blur();
    }
    navigate("/profile")
    }

  function handleReset(event) {
    event.preventDefault();
    event.stopPropagation();

    setInputValue('');

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  // Track when the value coming from the React state changes to synchronize
  // it with InstantSearch.
  useEffect(() => {
    if (query !== inputValue) {
      refine(inputValue);
    }
    dispatch({
        type: "SET_INPUT_VAL",
        input_val: inputValue
      });

  }, [inputValue, refine]);

  // Track when the InstantSearch query changes to synchronize it with
  // the React state.
  useEffect(() => {
    // Bypass the state update if the input is focused to avoid concurrent
    // updates when typing.
    if (document.activeElement !== inputRef.current && query !== inputValue) {
      setInputValue(query);
    }
  }, [query]);

  useEffect (()=>{
    setInputValue(content["input"]);
  },[content["input"]])

  function handleClick(){
    dispatch({
      type: "SET_PARAM",
      param: content["input_val"]
    });

    navigate("/profile")
  }

//   useEffect (()=>{
//     async function fetchData() {

//         const request = await axios.get(content["param"]);
//           dispatch({
//             type: "SET_DATA",
//             content: request.data
//           });
//         console.log(request)
//         return request;
//       }
    
//       fetchData().then(navigate("/profile")).catch(navigate("*"));
//     },[content["param"]])

  return (
    <div className="ais-SearchBox" style={{display: "inline-flex"}}>
      <form
        style={{flex:'1'}}
        action=""
        className="ais-SearchBox-form"
        noValidate
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <input
          ref={inputRef}
          className="ais-SearchBox-input"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          placeholder={props.placeholder}
          spellCheck={false}
          maxLength={512}
          type="search"
          value={inputValue}
          onChange={(event) => setInputValue(event.currentTarget.value)}
        />

      </form>
      <SearchIcon onClick={handleClick} style={{cursor:'pointer',color:"black", fontSize:'40px',paddingRight:'20px', paddingLeft:'10px'}} />
    </div>
  );
}

export function Hits({ hitComponent: Hit }) {
    let navigate = useNavigate();
    const [vis , setVis ] = useState();
    const[{},dispatch] = useStateValue();
    const[content]= useStateValue();
  const { hits } = useHits();

  function handleClick (e){
        dispatch({
          type: "SET_INPUT",
          input: e.target.id
        });
        // setInputValue(content["param"])
        // navigate('/profile');
  } 

  useEffect(() => {
    setVis(content["input_val"])
  },[content["input_val"]])
 
  return <>
    <div className="ais-Hits" style={vis ? {visibility:'visible'} : {visibility:'hidden'}}>
      <ul className="ais-Hits-list">
        {hits.map((hit) => (
          <li key={hit.objectID} className="ais-Hits-item" onClick={handleClick}>
            <Hit hit={hit} />
          </li>
        ))}
      </ul>
    </div>
  </>
}