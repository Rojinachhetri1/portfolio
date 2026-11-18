export function validateContactFields({ name, email, message }) {
  const errors = {};
  const normalizedName = name.trim();
  const normalizedEmail = email.trim();
  const normalizedMessage = message.trim();

  if (!normalizedName) errors.name = "Enter your name.";
  if (!normalizedEmail) {
    errors.email = "Enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
    errors.email = "Enter a valid email address.";
  }
  if (!normalizedMessage) errors.message = "Enter a message.";

  return errors;
}
