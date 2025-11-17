import { useState, useEffect } from "react";
import "./App.css";
import UserProfile from "./UserProfile";
import AddressForm from "./AddressForm";
import Preferences from "./Preferences";
import SaveButton from "./SaveButton";

export default function App() {
  const [formData, setFormData] = useState({});

  // Load from localStorage on mount
  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    if (savedUsers.length > 0) {
      setFormData(savedUsers[savedUsers.length - 1]); // load last saved
    }
  }, []);

  const handleSubmit = () => {
    const saved = JSON.parse(localStorage.getItem("users") || "[]");
    saved.push(formData);
    localStorage.setItem("users", JSON.stringify(saved));
    alert("Данните са запазени!");
    setFormData({}); // clear form
  };

  return (
    <div className="app">
      <h1>Регистрация на потребител</h1>
      <UserProfile data={formData} setData={setFormData} />
      <AddressForm data={formData} setData={setFormData} />
      <Preferences data={formData} setData={setFormData} />
      <SaveButton onClick={handleSubmit} />
    </div>
  );
}
