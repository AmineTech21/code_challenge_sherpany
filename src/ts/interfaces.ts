interface UserInterface {
    name: { first: string; last: string };
    picture: { thumbnail: string };
    login: { username: string };
    email: string;
    location: { city: string; state: string; postcode: string | number; street: { number: number; name: string } };
    phone: string;
    cell: string;
    nat: string;
};

interface ModalInterface {
    street: (number | string)[];
    city: string;
    state: string;
    postcode: number | string;
    phone: string;
    cell: string;
    nat: string;
}

interface FilterContextInterface {
    filter: string;
    setFilter: (active: string) => void;
}

export { UserInterface, ModalInterface, FilterContextInterface };
