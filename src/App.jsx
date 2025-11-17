import { useState } from "react";
import UserProfile from "./UserProfile";
import AddressForm from "./AddressForm";
import Preferences from "./Preferences";
import SaveButton from "./SaveButton";

export default function App() {
  const [formData, setFormData] = useState(() => {
    // Load the latest saved data from localStorage
    const saved = JSON.parse(localStorage.getItem("latestUser") || "{}");
    return saved;
  });

  const handleSubmit = () => {
    // Save in localStorage array
    const saved = JSON.parse(localStorage.getItem("users") || "[]");
    saved.push(formData);
    localStorage.setItem("users", JSON.stringify(saved));

    // Also save latest data separately to prefill form
    localStorage.setItem("latestUser", JSON.stringify(formData));

    alert("Данните са запазени!");
    setFormData({}); // Clear form
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
