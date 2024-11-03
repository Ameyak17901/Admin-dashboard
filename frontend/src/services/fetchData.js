export async function getData() {
  const URL = import.meta.env.VITE_API_URL;
  const response = await fetch(`${URL}users`);
  if (!response.ok) {
    return null;
  }
  const data = await response.json();
  return data.data;
}

export async function getUser(email) {
  const URL = import.meta.env.VITE_API_URL;
  const response = await fetch(`${URL}getuser`, {
    body: JSON.stringify({'email': email}),
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    return null;
  }
  console.log(response);
  const data = await response.json();
  return data;
}

export async function getUserById(id) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}user/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    return null;
  }
  const data = await response.json();
  return data.data;
}

export async function updateUser(id, user) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}user/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-access-methods": "PUT",
    },
    body: JSON.stringify(user),
  },);
  if (!response.ok) {
    return null
  }
  const data = await response.json();
  return data;
}


export async function deleteUser(id){
  const response = await fetch(`${import.meta.env.VITE_API_URL}user/${id}`, {method: 'DELETE'})
  if (!response.ok){
    throw new Error(response.message)
  }
  const data = await response.json()

  return data
}

export async function addUser(user){
  console.log(user)
  const response = await fetch(`${import.meta.env.VITE_API_URL}user`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(user)
  })

  if(!response.ok){
    return null
  }
  const data = await response.json()
  console.log(response)

  return data
}
