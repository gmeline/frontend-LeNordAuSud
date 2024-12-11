import React, { useState } from "react";

function EventForm() {
  const [form, setForm] = useState({ name: "", email: "", details: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données envoyées :", form);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px", backgroundColor: "#F5F5DC" }}>
      <h2>Demande d'événement</h2>
      <label>
        Nom :
        <input type="text" name="name" value={form.name} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Email :
        <input type="email" name="email" value={form.email} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Détails :
        <textarea name="details" value={form.details} onChange={handleChange} required />
      </label>
      <br />
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default EventForm;
