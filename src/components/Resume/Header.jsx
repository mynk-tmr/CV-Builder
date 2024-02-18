import {
  HomeModernIcon as Home,
  EnvelopeIcon as Mail,
  PhoneIcon as Phone,
} from "@heroicons/react/16/solid";

export default function Header({ details, style }) {
  const [username, email, phone, address] = details;
  return (
    <section className="header" style={style}>
      <h1>{username}</h1>
      <section className="contact-info">
        <a href={`mailto:${email}`}>
          <Mail />
          {email}
        </a>
        <a href={`tel:${phone}`}>
          <Phone /> {phone}
        </a>
        <a href="">
          <Home /> {address}
        </a>
      </section>
    </section>
  );
}
