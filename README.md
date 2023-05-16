
# Hydro-Québec Data Visualization

This web application allows you to visualize public data from Hydro-Québec, specifically the total demand and production information. 
It provides both a grid view and charts for an intuitive representation of the data.

## Features

- Fetches data from the public Hydro-Québec REST API to visualize total demand and production.
- Displays data in a grid view, providing a comprehensive overview of the information.
- Generates a bar chart to visualize the total demand data divided into three shifts: night, morning, and evening.
- Utilizes the Chart.js library to create interactive and visually appealing charts.
- Implements moment.js for convenient date and time manipulation.
- Incorporates Tailwind CSS and Material UI for responsive and modern user interface design.
- Hosted on Vercel for easy accessibility and deployment.

The data structure fetching from the API has been modified to enhance the chart representation. Specifically, the total demand data has been divided into three shifts: night, morning, and evening, resulting in a more meaningful and intuitive visualization.


## Screenshots
![Screenshot 2023-05-16 at 10 17 16 AM](https://github.com/Ali-VB/hydro-quebecAPI_project/assets/62252507/ccf24a11-9c72-4a90-b046-2d7c161be58a)
![Screenshot 2023-05-16 at 10 17 45 AM](https://github.com/Ali-VB/hydro-quebecAPI_project/assets/62252507/39c3601a-0939-4dde-b21e-1e7ad1b99875)
![Screenshot 2023-05-16 at 10 17 52 AM](https://github.com/Ali-VB/hydro-quebecAPI_project/assets/62252507/48ef25c8-de80-4e15-960c-18d493b61488)
![Screenshot 2023-05-16 at 10 18 05 AM](https://github.com/Ali-VB/hydro-quebecAPI_project/assets/62252507/0e3f15b3-fa2f-4625-99b2-8332ddc0be2c)
![Screenshot 2023-05-16 at 10 18 10 AM](https://github.com/Ali-VB/hydro-quebecAPI_project/assets/62252507/74419851-73b3-4c3c-af81-4fc00ab565a5)


## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/hydro-quebecAPI_project.git
   ```

2. Navigate to the project directory:

   ```shell
   cd hydro-quebecAPI_project
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

4. Start the development server:

   ```shell
   npm start
   ```

5. Open your browser and visit `http://localhost:3000` to view the application.

## Deployment

This project is deployed using Vercel. You can access the live version of the application at (https://hydro-quebec-api-project.vercel.app/).

## Mockup Design

For a detailed visual representation of the application's design, please refer to the [Figma mockup](https://www.figma.com/file/Xzlfu2Q0sJBSqn1JGDiREq/Hydro-Qubec_demand-production?type=design&node-id=0%3A1&t=73TwicLKEXEzXgZA-1) prepared for this project.

## Contribution

Contributions to this project are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License
## License

The project is licensed under the [MIT License](LICENSE), and the author of the project is Ali Vakili.

For any inquiries or questions regarding the project, please feel free to contact Ali Vakili at alivakili.tech@gmail.com.

