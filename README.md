# Personal Portfolio Website

Welcome to my personal portfolio website project! This project is built using **FastAPI** for the backend and simple **HTML**, **CSS**, and **JavaScript** for the frontend. It serves as a showcase of my skills, projects, and experiences.

## Features

- **Responsive Design**: The website is designed to be fully responsive and works seamlessly on all devices.
- **Project Showcase**: A dedicated section to display my projects with descriptions, technologies used, and links.
- **About Me**: A section to introduce myself, my skills, and my interests.
- **Contact Form**: A simple contact form to allow visitors to get in touch with me.
- **FastAPI Backend**: The backend is built using FastAPI, ensuring fast and efficient performance.

## Technologies Used

- **Backend**: FastAPI (Python)
- **Frontend**: HTML, CSS, JavaScript
- **Templating**: Jinja2 (for dynamic content rendering)
- **Deployment**: Docker, Jenkins, EC2 & S3

## Project Structure

portfolio-website/
├── backend/                  # FastAPI backend code
│   ├── main.py               # FastAPI application entry point
│   ├── models/               # Database models (if any)
│   ├── routes/               # API routes
│   └── templates/            # Jinja2 templates for rendering HTML
├── frontend/                 # Frontend assets
│   ├── css/                  # CSS files
│   ├── js/                   # JavaScript files
│   └── images/               # Images and icons
├── tests/                    # Unit and integration tests
│   ├── __init__.py
│   ├── test_routes.py        # Tests for API routes
│   └── test_models.py        # Tests for database models (if any)
├── Dockerfile                # Docker configuration
├── requirements.txt          # Python dependencies
├── .gitignore                # Files and directories to ignore in Git
├── README.md                 # Project documentation
└── pyproject.toml            # (Optional) Poetry or PDM configuration