

<div id="top"></div>
<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h1 align="center">NUWE BASIC PROFILE</h1>

  <p align="left">
    Web application developed for the challenge of <a href="https://nuwe.io">nuwe.io</a>
    <br />
    <br />
    <a href="https://nuweprofile.davidfdzmorilla.dev">Ver Demo</a>
  </p>
</div>


<!-- ABOUT THE PROJECT -->
## Sobre el proyecto

Nuwe Basic Profile has been developed with a REST API, developed with Express/Node.js and MySQL, and an App developed with React.


## API RES

## User endpoints

* [Register a user](#create-user) : `POST /users/register`
* [Login](#login) : `POST /users/login`
* [Get user](#get-user) : `GET /users/profile`
* [Update user](#edit-user) : `PATCH /users/`
* [Create a project](#create-proyect) : `POST /users/create-project`
* [Get projects](#create-proyect) : `POST /users/projects`
* [Update project](#edit-project) : `PATCH /users/project/:id`
* [Delete project](#delete-project) : `PATCH /users/project/delete/:id`

&nbsp;

### Register a user :


- **URL** : `/users/register`

- **Method** : `POST`

- **Auth required** : No

- **Permissions required** : None

- **Query params** : None

- **Body** :
    - headerPic (required  | string | min : 2 | max : 500)
    - avatar (required  | string | min : 2 | max : 500)
    - name (required  | string |  min : 2 | max : 50)
    - email (required  | email )
    - password (required  | string | min : 6 | max : 20)
    - tel (required | integer )
    - profesionType (required  | string | min : 2 | max : 50)
    - professionLevel (required  | string | min : 2 | max : 50)
    - bio (required  | string | min : 2 | max : 800)
    - country (required  | string | min : 2 | max : 50)
    - city (required  | string | min : 2 | max : 50)
    - linkedin (required  | string | min : 2 | max : 50)
    - gitHub (required  | string | min : 2 | max : 50)
    - gitLab (required  | string | min : 2 | max : 50)
    - behance (required  | string | min : 2 | max : 50)
    - ubication (required  | string | min : 2 | max : 50)
    - typeCompany (required  | string | min : 2 | max : 50)
    - minSalary (required  | integer)
    - likeSalary (required  | integer)
    - availabilityToTravel (required  | boolean)
    - remoteWork (required  | boolean)
    - inmediateIncorporation (required  | boolean)

- **Body example** :

```json
{
    "headerPic": "https://images.unsplash.com/photo-1564865878688-...",
    "avatar": "https://gravatar.com/avatar/4393a3fdbb71...",
    "name": "Sr Robot",
    "email": "damo@demo.de",
    "password": "demo123456",
    "tel": "765432112",
    "professionType": "Robot de montaje",
    "professionLevel": "Senior",
    "bio": "Al ser un androide de protocolo, fui diseñado para interactuar...",
    "country": "España",
    "city": "Pontevedra",
    "linkedin": "https://linkedin.com/",
    "gitHub": "https://github.com/",
    "gitLab": "https://gitlab.com/",
    "behance": "https://www.behance.net/",
    "ubication": "Barcelona",
    "typeCompany": "Startup",
    "minSalary": 40000,
    "likeSalary": 45000,
    "availabilityToTravel": true,
    "remoteWork": true,
    "inmediateIncorporation": true
  }
```

#### _Success Responses_


- **Condition** : Registered user successfully.

- **Code** : `201 Created`

- **Content example** :

```json
{
    "message": "User registered",
    "data": {
        "userId": 5
    }
}
```

#### _Error Responses_


- **Condition** : Error accessing database.

- **Code** : `500 Internal Server Error`

- **Content example** : `{"error": "Error message"}`

#### OR

- **Condition** : User already registered.

- **Code** : `409 Conflict`

- **Content** : `{"error": "User already exists"}`


#### OR

- **Condition** : Invalid data.

- **Code** : `400 Bad Request`

- **Content example** :

```json
{
    "error": "\"name\" must be a string"
}
```

&nbsp;

### Login :


- **URL** : `/users/login`

- **Method** : `POST`

- **Auth required** : No

- **Permissions required** : None

- **Query params** : None

- **Body** :
    - email (required  | email )
    - password (required  | string | min : 6 | max : 20)

- **Body example** :

```json
{
    "email": "damo@demo.de",
    "password": "demo123456"
}
```


#### _Success Responses_


- **Condition** : Login Ok.

- **Code** : `200 Ok`

- **Content** : `{"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9", "name": "Sr Robot"}`.


#### _Error Responses_


- **Condition** : Error accessing database.

- **Code** : `500 Internal Server Error`

- **Content example** : `{"error": "Error message"}`


#### OR

- **Condition** : Invalid data.

- **Code** : `400 Bad Request`

- **Content example** :

```json
{
    "error": "\"name\" must be a string"
}
```


#### OR

- **Condition** : Unregistered user.

- **Code** : `404 Bad Request`

- **Content example** :

```json
{
    "error": "User not found"
}
```


#### OR

- **Condition** : Invalid credentials.

- **Code** : `401 Bad Request`

- **Content example** :

```json
{
    "error": "Invalid credentials"
}
```

&nbsp;
### Get user :


- **URL** : `/users/profile`

- **Method** : `GET`

- **Auth required** : Si

- **Permissions required** : None

- **Query params** : None

- **Body** : None


#### _Success Responses_


- **Condition** : The user exists and is accessible.

- **Code** : `200 Ok`

- **Content example** :

```json
{
    "id":1,
"hederPic":"https://images.unsplash.com/photo-...",
"avatar":"https://gravatar.com/avatar/4393a3fdbb71f970b17de...",
"name":"Sr Robot",
"email":"correo@davidfdzmorilla.dev",
"tel":765432112,
"professionType":"Robot de montaje",
"professionLevel":"Senior",
"bio":"Al ser un androide de protocolo, fui diseñado para interactuar con seres vivos pensantes...",
"country":"España",
"city":"Pontevedra",
"linkedin":"https://linkedin.com/",
"github":"https://github.com/",
"gitlab":"https://gitlab.com/"
,"behance":"https://www.behance.net/",
"stack":"css3,javascript,html5",
"ubication":"Barcelona",
"typeCompany":"Startup",
"minSalary":40000,
"likeSalary":45000,
"availabilityToTravel":1,
"remoteWork":1,
"inmediateIncorporation":1
}
```

#### _Error Responses_


- **Condition** : Error accessing database.

- **Code** : `500 Internal Server Error`

- **Content example** : `{"error": "Error message"}`

#### OR

- **Condition** : User not found.

- **Code** : `404 Not found`

- **Content** : `{"error": "User not found"}`


&nbsp;
### Edit user :


- **URL** : `/users/`

- **Method** : `PATCH`

- **Auth required** : Si

- **Permissions required** : None

- **Query params** : None

- **Body** :
    - headerPic ( string | min : 2 | max : 500)
    - avatar ( string | min : 2 | max : 500)
    - name ( string |  min : 2 | max : 50)
    - email ( email )
    - password ( string | min : 6 | max : 20)
    - profesionType ( string | min : 2 | max : 50)
    - professionLevel ( string | min : 2 | max : 50)
    - bio ( string | min : 2 | max : 800)
    - country ( string | min : 2 | max : 50)
    - city ( string | min : 2 | max : 50)
    - linkedin ( string | min : 2 | max : 50)
    - gitHub ( string | min : 2 | max : 50)
    - gitLab ( string | min : 2 | max : 50)
    - behance ( string | min : 2 | max : 50)
    - ubication ( string | min : 2 | max : 50)
    - typeCompany ( string | min : 2 | max : 50)
    - minSalary ( integer)
    - likeSalary ( integer)
    - availabilityToTravel ( boolean)
    - remoteWork ( boolean)
    - inmediateIncorporation ( boolean)

- **Body example** :

```json
{
    "headerPic": "https://images.unsplash.com/photo-1564865878688-...",
    "avatar": "https://gravatar.com/avatar/4393a3fdbb71f970b17ded...",
    "name": "Sr Robot",
    "email": "damo@demo.de",
    "password": "demo123456",
    "tel": "765432112",
    "professionType": "Robot de montaje",
    "professionLevel": "Senior",
    "bio": "Al ser un androide de protocolo, fui diseñado para interactuar con seres vivos pensantes...",
    "country": "España",
    "city": "Pontevedra",
    "linkedin": "https://linkedin.com/",
    "gitHub": "https://github.com/",
    "gitLab": "https://gitlab.com/",
    "behance": "https://www.behance.net/",
    "ubication": "Barcelona",
    "typeCompany": "Startup",
    "minSalary": 40000,
    "likeSalary": 45000,
    "availabilityToTravel": true,
    "remoteWork": true,
    "inmediateIncorporation": true
}
```

#### _Success Responses_


- **Condition** : User successfully edited.

- **Code** : `202 Ok`

- **Content example** :

```json
{
    "message": "User data updated",
    "user": {
        "id": 1,
        "hederPic": "https://images.unsplash.com/photo-1488229297570-58520851e&...",
        "avatar": "https://gravatar.com/avatar/4393a3fdbb71f970b17ded7...",
        "name": "Sr Robot",
        "email": "correo@davidfdzmorilla.dev",
        "tel": 765432112,
        "professionType": "Robot de montaje"
        ,"professionLevel": "junior",
        "bio": "Al ser un androide de protocolo, fui diseñado para interactuar con seres vivos pensantess...",
        "country": "España",
        "city": "Pontevedra",
        "linkedin": "https://linkedin.com/",
        "github": "https://github.com/",
        "gitlab": "https://gitlab.com/",
        "behance": "https://www.behance.net/"
        ,"stack": "css3,javascript,html5",
        "ubication": "Barcelona",
        "typeCompany": "Startup",
        "minSalary": 40000,
        "likeSalary": 45000,
        "availabilityToTravel": 1,
        "remoteWork": 1,
        "inmediateIncorporation": 1
    }
}
```

#### _Error Responses_


- **Condition** : Error accessing database.

- **Code** : `500 Internal Server Error`

- **Content example** : `{"error": "Error message"}`


#### OR

- **Condition** : Invalid data.

- **Code** : `400 Bad Request`

- **Content example** :

```json
{
    "error": "\"name\" must be a string"
}
```

### Add project :


- **URL** : `/users/create-project`

- **Method** : `POST`

- **Auth required** : Si

- **Permissions required** : None

- **Query params** : None

- **Body** :
    - title (required  | string | min : 5 | max : 50)
    - link (string | min : 10 | max : 255)
    - description (required  | string |  min : 20 | max : 255)

- **Body example** :

```json
{
    "title": "Proyecto 1",
    "description": "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico o de moda...",
    "link": "https://webg.com/project/4393a3fdbb71f970b17ded7b8e9..."
}
```

#### _Success Responses_


- **Condition** : Successfully registered project.

- **Code** : `201 Created`

- **Content example** :

```json
{
    "message": "Project registered",
    "data": {
        "projectId": 5
    }
}
```

#### _Error Responses_


- **Condition** : Error accessing database.

- **Code** : `500 Internal Server Error`

- **Content example** : `{"error": "Error message"}`


#### OR

- **Condition** : Invalid data.

- **Code** : `400 Bad Request`

- **Content example** :

```json
{
    "error": "\"title\" must be a string"
}
```


&nbsp;
### Get user projects:


- **URL** : `/users/projects`

- **Method** : `GET`

- **Auth required** : Si

- **Permissions required** : None

- **Query params** : None

- **Body** : None


#### _Success Responses_


- **Condition** : User projects exist and are accessible.

- **Code** : `200 Ok`

- **Content example** :

```json
[
    {
        "id":1,
        "title":  "Projecto 1",
        "link": null,
        "description":  "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico o de moda..."
    }
    ,{
        "id":  2,
        "title":  "Projecto 2",
        "link":  "https://demo.dev",
        "description":  "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico o de moda..."
    },
    {
        "id":  3
        ,"title":  "Proyecto 3",
        "link":  null,
        "description":  "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico o de moda..."
    }
]
```

#### _Error Responses_


- **Condition** : Error accessing database.

- **Code** : `500 Internal Server Error`

- **Content example** : `{"error": "Error message"}`


&nbsp;
### Update project :


- **URL** : `/users/project/:id`

- **Method** : `PATCH`

- **Auth required** : Si

- **Permissions required** : None

- **Query params** : None

- **Body** :
    - title ( string | min : 5 | max : 50)
    - link (string | min : 10 | max : 255)
    - description ( string |  min : 20 | max : 255)

- **Body example** :

```json
{
    "title": "Proyecto 1",
    "description": "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico o de moda...",
    "link": "https://webg.com/project/4393a3fdbb71f970b17ded7b8e9..."
}
```

#### _Success Responses_


- **Condition** : Successfully edited project.

- **Code** : `202 Ok`

- **Content example** :

```json
{
        "message": "Project data upadate",
        "data": {
            "id":3,
            "title": "proyecto test",
            "link": null,
            "description": "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico o de moda..."
        }
}
```

#### _Error Responses_


- **Condition** : Error accessing database.

- **Code** : `500 Internal Server Error`

- **Content example** : `{"error": "Error message"}`


#### OR

- **Condition** : DInvalid data.

- **Code** : `400 Bad Request`

- **Content example** :

```json
{
    "error": "\"title\" must be a string"
}
```

&nbsp;
### Delete project :


- **URL** : `/users/projects/:id`

- **Method** : `DELETE`

- **Auth required** : Si

- **Permissions required** : None

- **Query params** : id

- **Body** : None


#### _Success Responses_


- **Condition** : The project exists and is accessible.

- **Code** : `200 Ok`

- **Content** : `{ "message": "Project has been deleted" }`

#### _Error Responses_


- **Condition** : Error accessing database.

- **Code** : `500 Internal Server Error`

- **Content example** : `{"error": "Error message"}`

#### OR

- **Condition** : The project with the given id does not exist.

- **Code** : `404 Not found`

- **Content** : `{"error": "Project not found"}`


### Build with:

* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)
* [React.js](https://react.js.org/)
* [MySQL](https://mysql.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

## Installation


```shell
    # Clone or install commands
    npm i [project] o npm/yarn i 
```

```shell
    # test o run commands
    npm start
    npm run dev ...
```

## License 

[ GNU GPLv3 license.](https://www.gnu.org/licenses/gpl-3.0.en.html)

