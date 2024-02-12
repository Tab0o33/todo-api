import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';

@Injectable()
export class TodosService {

    private todos: Todo[] = [
        {
            id: 1,
            title: "Faire les courses",
            description: "Aller au marché pour l'alimentaire et en grande surface pour l'L'hygiène.",
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

}
