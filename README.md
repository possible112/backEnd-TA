Endpoints

**Users**

  _Register_
  
  URL : (/auth/register)

  Method : POST

  Request body : 
  name as string
  username as string
  email as string
  password as string


  Response : 
  
  ![Alt Text](img/Register.png)


  _Login_

  URL : (/auth/login)

  Method : POST

  Request body : 
  name as string
  username as string
  email as string
  password as string

  Response :

  ![Alt Text](img/Login.png)


  _See All Users_

  URL : (/users)

  Method : GET

  Response :

  ![Alt Text](img/getAllUser.png)

  _See User by Id_

  URL : (/users/:id)

  Method : GET

  Response :

  ![Alt Text](img/getAllUser.png)
  
  _Delete User by Id_

  URL : (/users/:id)

  Method : DELETE

  Response :

  ![Alt Text](img/deleteUser.png)

  _Update User by Id_

  URL : (/users/:id)

  Method : PUT

  Request body : 
  name as string
  username as string
  email as string
  password as string

  Response :

  ![Alt Text](img/updateUser.png)

**Todos**

  _createTodo_

  URL : (/todos)

  Method : POST

  Headers : Authorization Bearer <token>

  Request body : 
  value as string
  status as boolean
  user_id as integer

  Response : 

  ![Alt Text](img/createTodo.png)

  _See All Todos_

  URL : (/todos)

  Method : GET

  Headers : Authorization Bearer <token>

  Response :  

  ![Alt Text](img/getAllTodos.png)

  _See Todo by Id_

  URL : (/todos/:id)

  Method : GET

  Headers : Authorization Bearer <token>

  Response :  

  ![Alt Text](img/getTodoById.png)

  _Delete All Todos_

  URL : (/todos)

  Method : DELETE

  Headers : Authorization Bearer <token>

  Response :  

  ![Alt Text](img/deleteAllTodos.png)

  _Delete Todo by Id_

  URL : (/todos/:id)

  Method : DELETE

  Headers : Authorization Bearer <token>

  Response :  

  ![Alt Text](img/deleteTodoById.png)

  _Update Todo by Id_

  URL : (/todos/:id)

  Method : PUT

  Headers : Authorization Bearer <token>

  Response : 

  ![Alt Text](img/updateTodo.png)
  










  
