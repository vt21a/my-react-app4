export default function Preferences() {
  return (
    <div className="form-section">
      <h2>Предпочитания</h2>
      <form>
        <div className="form-group">
          <label htmlFor="language">Език:</label>
          <select id="language" name="language">
            <option value="bg">Български</option>
            <option value="en">Английски</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="theme">Тема:</label>
          <select id="theme" name="theme">
            <option value="light">Светла</option>
            <option value="dark">Тъмна</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="notifications">
            <input type="checkbox" id="notifications" name="notifications" />
            Нотификации
          </label>
        </div>
      </form>
    </div>
  );
}
