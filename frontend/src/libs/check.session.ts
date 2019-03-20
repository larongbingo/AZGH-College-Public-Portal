import { SESSION_KEY } from "../config";

export function checkSession() {
  return !sessionStorage.getItem(SESSION_KEY);
}
