package az.coin.backendapp.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardcodedService {

    private static List<Todo> todos = new ArrayList();
    private static long idCounter = 0;

    static {
        todos.add(new Todo(++idCounter, "Ciaran", "Learn React", new Date(), true));
        todos.add(new Todo(++idCounter, "Ciaran", "Learn Springboot", new Date(), true));
        todos.add(new Todo(++idCounter, "Ciaran", "Project Demo", new Date(), true));
        todos.add(new Todo(++idCounter, "Ciaran", "Finish Backend", new Date(), false));
        todos.add(new Todo(++idCounter, "Ciaran", "Finish UI", new Date(), false));
        todos.add(new Todo(++idCounter, "Ciaran", "Run on AWS", new Date(), false));
        todos.add(new Todo(++idCounter, "Ciaran", "Project Poster", new Date(), false));
        todos.add(new Todo(++idCounter, "Ciaran", "Project Report", new Date(), false));
        todos.add(new Todo(++idCounter, "Ciaran", "Project Video", new Date(), false));
        todos.add(new Todo(++idCounter, "Ciaran", "Project Demo", new Date(), false));
    }

    public List<Todo> findAll() {
        return todos;
    }

    public Todo save(Todo todo){
        if(todo.getId() == -1 || todo.getId()==0) {
            todo.setId(++idCounter);
            todos.add(todo);
        } else {
            deleteById(todo.getId());
            todos.add(todo);
        }
        return todo;
    }

    public Todo deleteById(long id){
        Todo todo = findById(id);

        if(todo==null) return null;

        if(todos.remove(todo)) return todo;

        return null;
    }

    public Todo findById(long id) {
        for(Todo todo:todos){
            if(todo.getId() == id){
                return todo;
            }
        }

        return null;
    }


}
