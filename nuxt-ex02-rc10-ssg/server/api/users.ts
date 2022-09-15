export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}
interface Geo {
  lat: string;
  lng: string;
}
interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export default defineEventHandler((event): Promise<User[] | User> => {
  const query = useQuery(event);
  if (query.error === "true") {
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
    });
  }
  if (query.id) {
    return $fetch<User>(
      `https://jsonplaceholder.typicode.com/users/${query.id}`
    );
  }
  return $fetch<User[]>("https://jsonplaceholder.typicode.com/users");
});
