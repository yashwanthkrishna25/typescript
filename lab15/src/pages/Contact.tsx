// import { useState } from "react";

// interface FormData {
//   name: string;
//   email: string;
//   message: string;
// }

// const Contact = () => {
//   const [form, setForm] = useState<FormData>({
//     name: "",
//     email: "",
//     message: ""
//   });

//   return (
//     <div className="page">
//       <h1>Contact Us</h1>

//       <input
//         type="text"
//         placeholder="Name"
//         value={form.name}
//         onChange={e => setForm({ ...form, name: e.target.value })}
//       />

//       <input
//         type="email"
//         placeholder="Email"
//         value={form.email}
//         onChange={e => setForm({ ...form, email: e.target.value })}
//       />

//       <textarea
//         placeholder="Message"
//         value={form.message}
//         onChange={e => setForm({ ...form, message: e.target.value })}
        
//       />
//       <button>Submit</button><br/>

//       <img src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?semt=ais_hybrid&w=740&q=80" alt="contact" />
//     </div>
//   );
// };

// export default Contact;

// import "./Contact.css";
// import { useState } from "react";

// interface FormData {
//   name: string;
//   email: string;
//   message: string;
// }

// const Contact: React.FC = () => {
//   const [form, setForm] = useState<FormData>({
//     name: "",
//     email: "",
//     message: ""
//   });

//   const [submitted, setSubmitted] = useState<boolean>(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!form.name || !form.email || !form.message) {
//       alert("Please fill all fields");
//       return;
//     }

//     setSubmitted(true);
//     setForm({ name: "", email: "", message: "" });
//   };

//   return (
//     <div className="page contact">
//       <h1>Contact Us</h1>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={form.name}
//           onChange={handleChange}
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//         />

//         <textarea
//           name="message"
//           placeholder="Message"
//           value={form.message}
//           onChange={handleChange}
//         />

//         <button type="submit">Submit</button>
//       </form>

//       {submitted && <p className="success">Message sent successfully!</p>}

//       <img
//         src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?semt=ais_hybrid&w=740&q=80"
//         alt="contact"
//         className="contact-img"
//       />
//     </div>
//   );
// };

// export default Contact;



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
        src="https://example.com/your-contact-image.jpg"
        alt="contact"
        className="contact-img"
      />
    </div>
  );
};

export default Contact;
