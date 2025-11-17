// src/AddressForm.jsx
export default function AddressForm({ data, setData }) {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-section">
      <h2>Адрес</h2>
      <form>
        <div className="form-group">
          <label htmlFor="city">Град:</label>
          <input type="text" id="city" name="city" value={data.city || ""} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="street">Улица:</label>
          <input type="text" id="street" name="street" value={data.street || ""} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="zip">Пощенски код:</label>
          <input type="text" id="zip" name="zip" value={data.zip || ""} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="country">Държава:</label>
          <input type="text" id="country" name="country" value={data.country || ""} onChange={handleChange} />
        </div>
      </form>
    </div>
  );
}
