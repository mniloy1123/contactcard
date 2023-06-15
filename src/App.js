import ContactCard from "./components/contactcard";
import "./App.css";

function App() {
  console.log("this is a test");
  return (
    <div> 
      
      <ContactCard
        name="John Doe"
        mobileNumber="1234567890"
        workPhone="9876543210"
        email="john.doe@example.com"
      />

      <ContactCard
        name="Jane Doe"
        mobileNumber="1234567890"
        workPhone="9876543210"
        email="john.doe@example.com"
      />

      <ContactCard
        name="Jared Doe"
        mobileNumber="1234567890"
        workPhone="9876543210"
        email="john.doe@example.com"
      />
    </div>
  );
}

export default App;
