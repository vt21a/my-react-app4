export default function AddressForm() {
  return (
    <div className="form-section">
      <h2>Адрес</h2>
      <form>
        <div className="form-group">
          <label htmlFor="city">Град:</label>
          <input type="text" id="city" name="city" />
        </div>
        <div className="form-group">
          <label htmlFor="street">Улица:</label>
          <input type="text" id="street" name="street" />
        </div>
        <div className="form-group">
          <label htmlFor="zip">Пощенски код:</label>
          <input type="text" id="zip" name="zip" />
        </div>
        <div className="form-group">
          <label htmlFor="country">Държава:</label>
          <input type="text" id="country" name="country" />
        </div>
      </form>
    </div>
  );
}
