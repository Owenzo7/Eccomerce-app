import "./App.css";
import { useState } from "react";
import Itemlists from "./Components/Itemlists/Itemlists.component";
import Searchbox from "./Components/SearchBox/Searchbox.component";

const App = () => {
  const [searchField, setsearchField] = useState("");
  const [items, setitems] = useState([]);

  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((users) => setitems(users));

  console.log({ searchField });

  const onSearchChange = (event) => {
    console.log(event.target.value);

    const searchFieldString = event.target.value.toLocaleLowerCase();

    setsearchField(searchFieldString);
  };

  const filteredItems = items.filter((item) => {
    return item.title.toLocaleLowerCase().includes(searchField);
  });

  return (
    <div className="App">
      <h1 className="app-title">Rogers Eccomerce Store</h1>

      <Searchbox
        onChangeHandler={onSearchChange}
        placeholder="search Items"
        className="items-search-box"
      />

      <Itemlists Items={filteredItems} />
    </div>
  );
};

// export default class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       items: [],
//       searchField: "",
//     };
//   }

//   onSearchChange = (event) => {
//     console.log(event.target.value);

//     const searchField = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { items, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredItems = items.filter((item) => {
//       return item.title.toLocaleLowerCase().includes(searchField);
//     });
//     return (

//     );
//   }
// }

export default App;
