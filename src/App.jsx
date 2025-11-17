import UserProfile from './UserProfile';
import AddressForm from './AddressForm';
import Preferences from './Preferences';

export default function App() {
  const handleSubmit = () => {
    alert('Данните са запазени!');
  };

  return (
    <div className="app">
      <h1>Регистрация на потребител</h1>
      <UserProfile />
      <AddressForm />
      <Preferences />
      <button onClick={handleSubmit}>Запази</button>
    </div>
  );
}
