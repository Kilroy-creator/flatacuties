# Flatacuties – Vote the Cutest!

Flatacuties is a simple web app where users can view a list of animals, see their details, and vote for the cutest one!
The app uses a local JSON server as the backend and vanilla HTML, CSS, and JavaScript on the frontend.

📌 Features

View a list of animal names.

Click on an animal’s name to view its image and current votes.

Vote for your favorite animal (votes update live on the page).

Reset votes for an animal back to 0.

Add a new animal with a name and image URL.

🛠️ Setup Instructions
1. Clone the repo
git clone <your-repo-url>
cd flatacuties

2. Install JSON Server

If you don’t already have it:

npm install -g json-server

3. Start the backend

Run:

json-server --watch db.json


This will start the server at:

http://localhost:3000/characters

4. Open the frontend

Open index.html in your browser.

📂 Project Structure
flatacuties/
│── index.html        # Main UI
│── style.css         # Styling
│── app.js            # Frontend logic
│── db.json           # Mock backend (animal data)
│── README.md         # Project documentation

🔗 API Endpoints
Get all characters
GET /characters

Get one character
GET /characters/:id

Add new character
POST /characters

🐶 Example Animal Data (db.json)
{
  "id": 1,
  "name": "Mr. Cute",
  "image": "https://media.tenor.com/Ug6cbVA1ZsYAAAAM/cat-cute.gif",
  "votes": 0
}

🚀 Future Improvements

Add persistence for votes (update db.json instead of resetting on refresh).

Add validation to avoid duplicate animal names.

Show a placeholder image if the image link is broken.

👨‍💻 Author

Built with ❤️ using vanilla JS, HTML, CSS, and JSON Server.
