// src/Preferences.jsx
export default function Preferences({ data, setData }) {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData({ ...data, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <div className="form-section">
      <h2>Предпочитания</h2>
      <form>
        <div className="form-group">
          <label htmlFor="language">Език:</label>
          <input type="text" id="language" name="language" value={data.language || ""} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="theme">Тема:</label>
          <select id="theme" name="theme" value={data.theme || ""} onChange={handleChange}>
            <option value="">Избери</option>
            <option value="light">Светла</option>
            <option value="dark">Тъмна</option>
          </select>
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox" name="notifications" checked={data.notifications || false} onChange={handleChange} />
            Нотификации
          </label>
        </div>
      </form>
    </div>
  );
}
