# Volcano-map is the responsive app for my TFG 

# Installation Manual

## Web Application Installation Manual

Before you begin, ensure you have the following tools installed on your system:
- **Git**: to clone the repository. [Official page](https://git-scm.com/downloads).
- **Python 3.x**: the required programming language. [Official page](https://www.python.org/downloads/).
- **pip**: the Python package installer.
- **Node.js and npm**: required for frontend installation. [Official page](https://nodejs.org/en/download/package-manager/current).

After reviewing the prerequisites, proceed with the installation:

1. Run the following command to clone the repository from GitHub into your desired directory:

    ```bash
    git clone https://github.com/AitorRD/Volcano-map.git
    ```

2. **Backend Installation**
    1. Navigate to the backend directory:

        ```bash
        cd Volcano-map/backend
        ```

    2. Create a virtual environment using `venv`:

        ```bash
        python -m venv venv
        ```

    3. Activate the virtual environment:
        - On Windows:

            ```bash
            .\venv\Scripts\activate
            ```
        - On macOS and Linux:

            ```bash
            source venv/bin/activate
            ```

    4. Install the backend dependencies listed in the `requirements.txt` file:

        ```bash
        pip install -r requirements.txt
        ```

    5. Apply the database migrations:

        ```bash
        python manage.py makemigrations
        python manage.py migrate
        ```

    6. Create a superuser to access the Django admin panel:

        ```bash
        python manage.py createsuperuser
        ```

    7. Start the Django development server:

        ```bash
        python manage.py runserver
        ```

3. **Frontend Installation**
    1. Navigate to the frontend directory:

        ```bash
        cd Volcano-map/frontend
        ```

    2. Install the frontend dependencies using npm:

        ```bash
        npm install
        ```

    3. Start the frontend development server:

        ```bash
        npm run serve
        ```
