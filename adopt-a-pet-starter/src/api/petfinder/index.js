export const getPets = async (type = '', query = '') => {
  // localhost:3000/animals => api lấy tất cả các pet 
  // localhost:3000/animals?type=dog => api lấy tất cả các pet là dog
  // localhost:3000/animals?type=cat => api lấy tất cả các pet là cat
  // localhost:3000/animals?type=bird => api lấy tất cả các pet là bird
  // ...

  // type = 'dog' => localhost:3000/animals?type=dog
  // type = 'cat' => localhost:3000/animals?type=catch
  // type = undefined => localhost:3000/animals
  const searchParams = new URLSearchParams({ type, query });
  const requestUrl = `/animals?${searchParams.toString()}`;

  const response = await fetch(requestUrl, {
    method: 'GET'
  });

  const json = await response.json();

  return json;
};

export const getPetDetails = async (id) => {
  // locahost:3000/animals/51322447
  const requestUrl = `/animals/${id}`;
  const response = await fetch(requestUrl, {
    method: 'GET'
  });

  const json = await response.json();

  return json;
};

export const getPetTypes = async () => {
  const requestUrl = `/types`;
  const response = await fetch(requestUrl, {
    method: 'GET'
  });

  const json = await response.json();

  return json;
};
