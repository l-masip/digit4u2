# Digit4U

## Description

This is an Web App that offers services of digitalisation to companies who want to improve their virtual awareness and update their tecnologies.

## User Stories

- **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault.
- **Signup:** As an anon I can sign up so that I can buy products.
- **Login:** As a user I can login so I can buy products and check the products I've already bought.
- **Logout:** As a user I can logout from the platform so no one else can use it.
- **Edit profile:** As a user I can edit my own profile.
- **Buy item:** As a user I can buy products so they are available for me all the time.

## Backlog

Product CRUD

# Client / Frontend

## React Router Routes

| **Path**       | **Component** | **Permissions**            | **Behavior**                                                  |
| -------------- | ------------- | -------------------------- | ------------------------------------------------------------- |
| `/`            | SplashPage    | public `<Route>`           | Home page                                                     |
| `/signup`      | Sign Up Page  | anon only `<AnonRoute>`    | Signup form, link to login, navigate to homepage after signup |
| `/login`       | Login Page    | anon only `<AnonRoute>`    | Login form, link to signup, navigate to homepage after login  |
| `/products`    | Shop Page     | public `<Route>`           | Shows all products in a list                                  |
| `/payment`     | Payment Page  | user only `<PrivateRoute>` | Payment Form, navigate to userpage after buying               |
| `/blog`        | Blog          | public `<Route>`           | Show all blog articles                                        |
| `/contact`     | Contact Page  | public `<Route>`           | Contact Form                                                  |
| `/user/:id`    | User Page     | user only `<PrivateRoute>` | View user and bought products                                 |
| `/product/:id` | Product Page  | user only `<PrivateRoute>` | View the bought course details                                |
| `/blog/add`    | Add Blog Page | admin only `<AdminRoute>`  | Form create new blog entry                                    |

## Components

- Navbar
- Footer
- Userpage
- Product page
- Product Box
- Blog entry

## Services

#### Auth Service

- auth.login(user)
- auth.signup(user)
- auth.logout()
- auth.me()
- auth.getUser() // synchronous

#### Product Service

- product.list()
- product.detail()

#### User Service

- user.create(id)
- user.update(id)
- user.delete(id)

#### Article Service

- article.create(id)
- article.update(id)
- article.delete(id)

# Server/Backend

## Models

### User model

```javascript
{
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  name: {type: String, required: true},
  surname: {type: String, required: true},
  Phone: {type: Number, required: true},
  position: {type: String},
  products: {type:Schema.Typers.ObjectId, ref:'Product'},
  role: {type: String, enum:['admin', 'user']}
}
```

### Product model

```javascript
{
  name: {type: String, required: true, unique: true},
  description: {type: String, required: true},
  price: {type: Number, required: true}
  category: {type: String, enum:['Web Design', 'Digital Marketing', 'Staff Training', 'Consulting']}
  video_demo: {type: string, required: true}
  expert: [type:objectId, ref:'expert']}
}
```

### Article model

```javascript
{
  name: {type: String, required: true, unique: true},
  description: {type: String, required: true},
  link: {type: string, required: true}
}
```

### Expert model

```javascript
{
  Name: {type: String, required: true},
  Surname: {type: String, required: true},
  description: {type: String, required: true},
  img: {type:string, required: true}
}
```

## API Endpoints (backend routes)

| **HTTP Method** | **URL** | **Request Body** | **Success status** | **Error Status** | **Description** |
| --- | --- | --- | --- | --- | --- |
| GET | `/auth/profile` | Saved session | 200 | 404 | Check if user is logged in and return profile page |
| POST | `/auth/signup` | {name, surname, email, password} | 201 | 404 | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST | `/auth/login`  | {email, password} | 200 | 401 | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session              |
| POST | `/auth/logout` | (empty) | 204 | 400 | Logs out the user |
| GET | `/api/products` |    |     | 400 | Show all products |
| GET | `/api/products/:id` | {id} |     |    | Show specific product |
| GET | `/api/articles` |     |    | 400 | show articles |
| POST | `/api/articles` | {name, description, img, link} | 200 | 404 | add article |
| PUT | `/api/articles/:id` | {name,img} | 201 | 400 | edit article |
| DELETE | `/api/articles/:id` | {id} | 200 | 400 | delete article |
| GET | `/api/experts` | {} | 201 | 400 | show expert |

## Links

### Trello/Kanban

[Trello](https://trello.com/b/LA1OwpCf/ironhack-project-3)
or picture of your physical board

### Git

[Client repository Link](https://github.com/l-masip/digit4u)
