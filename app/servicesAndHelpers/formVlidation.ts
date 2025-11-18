export function isValidEmail(email: string): boolean {
  if (!email) return false;

  const value = email.trim().toLowerCase();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(value);
}

export function isValidPassword(password: string): boolean {
  if (!password) return false;

  const minLength = 8;
  if (password.length < minLength) return false;
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);

  return hasLowercase && hasUppercase && hasNumber && hasSpecial;
}
