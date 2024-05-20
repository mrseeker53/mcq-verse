# MCQ-Verse

MCQ-Verse is a web application for managing multiple-choice questions (MCQs). It allows users to create, read, update, and delete (CRUD) MCQs through a user-friendly interface. The application is built using React for the frontend and Node.js with Express for the backend, and it uses MySQL for data storage.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Create**: Add new MCQs to the database.
- **Read**: View all existing MCQs.
- **Update**: Edit existing MCQs.
- **Delete**: Remove MCQs from the database.

## Installation

### Prerequisites

- Node.js and npm installed on your machine
- MySQL installed and running

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mrseeker53/mcq-verse.git
   cd mcq-verse

2. **Install server dependencies:**
   ```bash
   cd server
   npm install

3. **Set up the MySQL database:**
    - Create a database named `crud`.
    - Run the SQL script provided in the repository to create the `mcq` table.

4. **Configure the database connection:**
    - Update the database configuration in `server/index.js` with your MySQL credentials.

5. **Start the server:**
   ```bash
   npm start

6. **Install client dependencies:**
   ```bash
   cd ../client
   npm install

7. **Start the client:**
   ```bash
   npm run dev

8. **Access the application:**
   Open your browser and navigate to `http://localhost:3000`.

## Usage

1. **Adding a new question:**

    - Navigate to the "Add Question" section.
    - Fill out the form with the question and options.
    - Click "Submit" to add the question.

2. **Viewing questions:**

    - Go to the "Questions" section to see all the existing questions.

3. **Editing a question:**

    - Click on the "Edit" button next to the question you want to modify.
    - Update the question and options in the form.
    - Click "Save" to update the question.

4. **Deleting a question:**

    - Click on the "Delete" button next to the question you want to remove.

## API Endpoints

### GET /

- **Description:** Fetch all MCQs.
- **Response:** JSON array of MCQ objects.

### POST /addquestion

- **Description:** Add a new MCQ.
- **Body:** JSON object with `question`, `option1`, `option2`, `option3`, `option4`, and `ans`.
- **Response:** JSON object with success message and inserted data.

### PUT /update/:id

- **Description:** Update an existing MCQ.
- **Params:** `id` of the MCQ to update.
- **Body:** JSON object with updated `question`, `option1`, `option2`, `option3`, `option4`, and `ans`.
- **Response:** JSON object with success message and updated data.

### DELETE /delete/:id

- **Description:** Delete an existing MCQ.
- **Params:** `id` of the MCQ to delete.
- **Response:** JSON object with success message.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-branch-name`.
5. Open a pull request.


## License
   This project is licensed under the MIT License - see the [LICENSE] file for details.

