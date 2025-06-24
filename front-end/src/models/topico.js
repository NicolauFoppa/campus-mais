// src/models/Topic.js
import { User } from './user';
import { Forum } from './forum';

export class Topic {
    constructor(apiData) {
        this.id = apiData._id;
        this.titulo = apiData.titulo;
        this.forum = apiData.forum ? new Forum(apiData.forum) : null;
        this.criador = apiData.criador ? new User(apiData.criador) : null;
        this.createdAt = new Date(apiData.createdAt);
    }
}