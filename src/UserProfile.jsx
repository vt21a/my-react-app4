export default function UserProfile() {
  return (
    <div className="form-section">
      <h2>Лична информация</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Име:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Имейл:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Телефон:</label>
          <input type="tel" id="phone" name="phone" />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Дата на раждане:</label>
          <input type="date" id="dob" name="dob" />
        </div>
      </form>
    </div>
  );
}
