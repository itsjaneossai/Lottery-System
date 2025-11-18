const key: string = process.env.Local_Storage_Key ?? "";

export function saveToLocalStorage(value: any): void {
  try {
    const json = JSON.stringify(value);
    localStorage.setItem(key, json);
  } catch (err) {
    console.error(`Error saving "${key}" to localStorage:`, err);
  }
}

export function readFromLocalStorage(){
  try {
    const stored = localStorage.getItem(key);
    if (!stored) return null;
    return JSON.parse(stored);
  } catch (err) {
    console.error(`Error reading "${key}" from localStorage:`, err);
    return null;
  }
}

export function clearFromLocalStorage(){
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.error(`Error removing "${key}" from localStorage:`, err);
  }
}
