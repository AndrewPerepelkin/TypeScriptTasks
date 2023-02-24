const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments/';

const getData = async<T>(url: string): Promise<T> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

getData<[]>(COMMENTS_URL)
  .then((data) => {
    data.forEach((item: {id: number, email: string}) => {
      console.log("ID: ", item.id, 'Email: ', item.email);
    });
  });