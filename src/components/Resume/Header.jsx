import { MdHome, MdMail, MdPhone } from "react-icons/md";

export default function Header({ details, style }) {
  const [username, email, phone, address] = details;
  return (
    <section className="header" style={style}>
      <h1>{username}</h1>
      <section className="contact-info">
        <a href={`mailto:${email}`}>
          <MdMail />
          {email}
        </a>
        <a href={`tel:${phone}`}>
          <MdPhone /> {phone}
        </a>
        <a href="">
          <MdHome /> {address}
        </a>
      </section>
    </section>
  );
}
