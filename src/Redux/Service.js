export function fetchAddUser(api, body) {
  let myHeader = new Headers();
  myHeader.append("Content-Type", "application/json");
  return fetch(api, {
    method: "POST",
    body: JSON.stringify(body),
    headers: myHeader,
  });
}

export function fetchValidateUser(api, body) {
  let myHeader = new Headers();
  myHeader.append("Content-Type", "application/json");
  return fetch(api, {
    method: "POST",
    body: JSON.stringify(body),
    headers: myHeader,
  });
}
