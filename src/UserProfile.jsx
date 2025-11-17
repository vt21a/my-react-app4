// src/UserProfile.jsx
export default function UserProfile({ data, setData }) {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-section">
      <h2>Лична информация</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Име:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={data.name || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Имейл:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={data.email || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Телефон:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={data.phone || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Дата на раждане:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={data.dob || ""}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}
