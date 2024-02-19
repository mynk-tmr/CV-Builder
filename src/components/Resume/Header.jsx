import {
  HomeIcon as Home,
  EnvelopeIcon as Mail,
  PhoneIcon as Phone,
} from "@heroicons/react/16/solid";

const Header = ({ bg, data }) => {
  const { fullname, email, phone, address } = data ?? {};
  return (
    <header
      style={{
        background: bg ?? "lightblue",
      }}
      className="grid text-center gap-y-4 py-3">
      <h1 className="text-4xl font-bold">{fullname}</h1>
      <section className="flex justify-evenly flex-wrap font-semibold">
        <a href={`mailto:${email}`}>
          <Mail className="w-4 mr-1" />
          {email}
        </a>
        <a href={`tel:${phone}`}>
          <Phone className="w-4 mr-1" /> {phone}
        </a>
        <a href="">
          <Home className="w-4 mr-1" /> {address}
        </a>
      </section>
    </header>
  );
};

export default Header;
