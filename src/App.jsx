




import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  //const [contactDatas, setContactDatas] = useState(() => {
   // const savedContacts = window.localStorage.getItem("saved-contacts");
   // if (savedContacts) {
   //   return JSON.parse(savedContacts);
   // }
  //  return [];
 // });
 // const [filter, setFilter] = useState("");

 // const addContact = (newContact) => {
    //setContactDatas((prevContacts) => {
  //    return [...prevContacts, newContact];
  //  });
//  };

  //const deleteContact = (contactId) => {
  //  setContactDatas((prevContacts) => {
  //    return prevContacts.filter((contactData) => contactData.id !== contactId);
  //  });
 // };

  //const visibleContacts = contactDatas.filter((contactData) =>
  //  contactData.name.toLowerCase().includes(filter.toLowerCase())
 // );

 // useEffect(() => {
 //   window.localStorage.setItem("saved-contacts", JSON.stringify(contactDatas));
 // }, [contactDatas]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox  />
      <ContactList  />
    </div>
  );
}

export default App;