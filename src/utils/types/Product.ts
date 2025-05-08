export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rate;
};

type Rate = {
    rate: number;
    count: number;
}