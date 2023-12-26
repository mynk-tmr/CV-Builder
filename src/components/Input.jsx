export default function Input({ type, ...rest }) {
  return type !== "textarea" ? (
    <input type={type} {...rest} />
  ) : (
    <textarea {...rest} />
  );
}
