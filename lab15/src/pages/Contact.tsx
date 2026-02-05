



import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="page contact">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      {submitted && <p className="success">Message sent successfully!</p>}
      <img
        src="https://media.licdn.com/dms/image/v2/C5612AQFEziQ77lFnNg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1638959906116?e=2147483647&v=beta&t=OA6sQ-OeVk17iwGGw4odqqdHRKSR2ToctjVEKdbVnQU"
        alt="contact"
        className="contact-img"
      />
    </div>
  );
};

export default Contact;
