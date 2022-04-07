import { Record, Role, Reaction, Rating  } from './types';
import { prop, getModelForClass } from "@typegoose/typegoose";
export class User  {
    @prop()
    fullName: string;
    @prop()
    photoURL: string;
    @prop()
    email: string;
    @prop()
    role: Role;
    @prop()
    record: Record;
}
export class Like {
    @prop()
    reaction: Reaction;
    @prop()
    record: Record;
    @prop()
    user: User;
}
export class Message  {
    @prop()
    message: string;
    @prop()
    record: Record;
    @prop()
    user: User;
}
export class Comment  {
    @prop()
    message: Message;
    @prop()
    responses: Message[];
    @prop()
    reactions: Reaction[];
}
export class Post  {
    @prop()
    title: string;
    @prop()
    description: string;
    @prop()
    author: User;
    @prop()
    media: string[];
    @prop()
    category: string;
    @prop()
    summary: string;
    @prop()
    body: string;
    @prop()
    record: Record;
    @prop()
    comments: Comment[];
    @prop()
    reactions: Reaction[];
}
export class Product  {
    @prop()
    post: Post;
    @prop()
    price: number;
    @prop()
    stock: number;
}
export class Cart  {
    @prop()
    product : Product;
    @prop()
    quantity: number;
    @prop()
    record: Record;
}
export class Order  {
    @prop()
    carts: Cart[];
    @prop()
    record: Record;
    @prop()
    user: User;
    @prop()
    total: number;
    @prop()
    status: string;
}
export class Review  {
    @prop()
    post: Post;
    @prop()
    rating: Rating;
    @prop()
    product: Product;
}
  
    

