import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodosService {

    private todos: Todo[] = [
        {
            id: 1,
            title: "Faire les courses",
            description: "Aller au marché pour l'alimentaire et en grande surface pour l'hygiène.",
            isDone: false
        },
        {
            id: 2,
            title: "Faire le ménage",
            description: "Passer l'aspirateur puis la serpillère. Dans la salle de bain, laver la douche et le lavabo.",
            isDone: true
        },
        {
            id: 3,
            title: "Emmener la voiture au garage",
            description: "Emmener la voiture à 17h45 au garage Toto, 33 rue du Général John Doe pour changer les ampoules des feux de croisement.",
            isDone: false
        }
    ]

    findAll(): Todo[] {
        return this.todos;
    }

    findOne(id: number): Todo {
        return this.todos.find(todo => todo.id === id);
    }

    create(todo: CreateTodoDto) {
        this.todos = [...this.todos, todo];
    }

    update(id: number, todo: CreateTodoDto) {
        const todoToUpdate = this.todos.find(todo => todo.id === id);
        if (!todoToUpdate) {
            return new NotFoundException(`No todo found with the id : ${id}`);
        }
        if (todo.title) {
            todoToUpdate.title = todo.title;
        }
        if (todo.description) {
            todoToUpdate.description = todo.description;
        }
        if (todo.hasOwnProperty('isDone')) {
            todoToUpdate.isDone = todo.isDone;
        }
        this.todos = this.todos.map(el => el.id !== id ? el : todoToUpdate);
        return { updatedTodo: 1, todo: todoToUpdate };
    }

}
