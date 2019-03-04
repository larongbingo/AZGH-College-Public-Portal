import { generate } from "randomstring";

/**
 * Holds all of the session tokens
 */
let tokens: ITokenPair[] = [];

function getTokenIndex(token: string) {
  let index = -1;
  tokens.forEach((tokenPair, i) => 
    tokenPair.token === token ? 
    index = i : undefined);
  return index;
}

/**
 * Creates a session token
 * @param userId The id of the user that requested to create a token
 * @returns The session token of the user
 */
export function createSession(userId: string): string | null {
  if(!userId) { return null; }
  let token = "";
  do {
    token = generate({length: 11, charset: "alphanumeric"});
  } while(getTokenIndex(token) !== -1);
  tokens.push({token, userId});
  return token;
}

/**
 * Checks if the given token is valid or not
 * The token is valid if it is found the tokens array
 * @param token The token that needs to be checked
 * @returns True if the given token is valid; false otherwise
 */
export function checkSessionValidity(token: string) {
  return getTokenIndex(token) !== -1;
}

/**
 * Destroys the given token
 * @param token The token that needs to be destroyed
 * @returns True if the given token is successfully destroyed, false if the token
 * is already destroyed or does not exist
 */
export function destroySession(token: string) {
  let index = getTokenIndex(token);
  if(index === -1) { return false; }

  try { tokens = tokens.splice(getTokenIndex(token), 1); }
  catch(err) {
    console.error(err);
    throw err;
  }
  return true;
}

/**
 * Holds the session token and its userID to indicate to whom it
 * belongs
 */
export interface ITokenPair {
  token: string;
  userId: string;
}
