import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
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

    @Patch(':id')
    update(@Param('id') id: string, @Body() todo: CreateTodoDto) {
        const todoId = parseInt(id, 10);
        this.todosService.update(todoId, todo);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        const todoId = parseInt(id, 10);
        return this.todosService.delete(todoId);
    }

}
