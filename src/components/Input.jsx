export default function Input({ type, value, ...rest }) {
  return type !== "textarea" ? (
    <input type={type} value={value} {...rest} />
  ) : (
    <textarea {...rest}>{value}</textarea>
  );
}
