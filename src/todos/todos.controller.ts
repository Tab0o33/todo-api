import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todos')
export class TodosController {

    constructor(private readonly todosService: TodosService) { }

    @Get()
    findAll(): Todo[] {
        return this.todosService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Todo {
        const todoId = parseInt(id, 10);
        return this.todosService.findOne(todoId);
    }

    @Post()
    createTodo(@Body() newTodo: CreateTodoDto) {
        this.todosService.create(newTodo);
    }
}
