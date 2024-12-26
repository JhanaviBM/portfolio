const educationData = [
    "B.E in Computer Science and Engineering from SVCE - 8.25",
    "Pre University from Reva Sanjay Nagar - 89.5%",
    "Secondary School from Shanthi Nikethana High School - 86.56%"
];

const projectData = [
    { title: "AgriConnect: A digital direct marketing platform.", description: "A digital platform bridging the gap between small-scale farmers and consumers, enabling direct marketing to enhance transparency and promote fair trade in agriculture. The project includes vendor and consumer portals with full CRUD operations, a chatbot, order tracking, and educational resources for users. The interface is designed for ease of use, and the system includes features for stock updates, user profile management, and visual aids. Technologies used include HTML, CSS, PHP, JavaScript, and MySQL, with Python enhancements to support advanced dynamic functionalities." },
    { title: "Recipe Plan Generator", description: "A user-friendly website developed to showcase recipes and provide options for generating personalized recipe plans. Users can explore various recipes and download a detailed PDF of their selected recipe, making it convenient for meal planning. The site is built using Django with a streamlined PDF generation feature, implemented using ReportLab, alongside HTML and CSS for a clean and responsive layout." },
    { title: "TailWag Treasures", description: "An e-commerce platform tailored to pet owners, particularly those with cats and dogs, offering a variety of pet supplies. This project includes inventory management, customer data handling, and a streamlined sales process to ensure efficient transactions. Built with HTML, CSS, PHP, and SQL, the platform is designed to handle high transaction loads and provide a seamless shopping experience for pet owners." },
    { title: "Face Emotion Recognition", description: "This project focuses on detecting and analyzing human emotions through facial recognition technology. It uses Haarcascade for identifying facial features and OpenGL for rendering in a 3D environment. The system aims to enhance real-time emotion recognition accuracy, making it suitable for applications in interactive user experiences and AI-driven emotion-based analysis. Python serves as the primary programming language, integrating the various components for a responsive and efficient detection system." },
    { title: "Password Strength Checker", description: "The Password Strength Checker is a Java-based application designed to assess the security level of user-entered passwords. It features a clean, intuitive interface where users can input their passwords for evaluation. The system applies robust algorithms to analyze factors such as password length, the inclusion of uppercase and lowercase letters, numbers, and special characters. To provide instant feedback, it uses a color-coded system—red for weak passwords, yellow for moderate, and green for strong passwords—allowing users to easily understand the quality of their password. This tool promotes better password practices by encouraging the creation of stronger, more secure passwords."},
    ];

const activitiesData = [
    "Winner of a 3-day Web Development Workshop.",
    "Managed a food stall during a college food fest."
];

function loadData() {
    const educationList = document.getElementById('education-list');
    educationData.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;
        educationList.appendChild(li);
        
        if (index < educationData.length - 1) {
            educationList.appendChild(document.createElement('hr'));
        }
    });

    const projectList = document.getElementById('project-list');
    projectData.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item.title;
        li.style.cursor = 'pointer';
        li.onclick = () => openModal(item.title, item.description);
        projectList.appendChild(li);
        
        if (index < projectData.length - 1) {
            projectList.appendChild(document.createElement('hr'));
        }
    });

    const activitiesList = document.getElementById('activities-list');
    activitiesData.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;
        activitiesList.appendChild(li);
        
        if (index < activitiesData.length - 1) {
            activitiesList.appendChild(document.createElement('hr'));
        }
    });
}


function showSkills(tab) {
    document.querySelectorAll('.skills-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.skills-content').forEach(content => content.classList.remove('active'));
    document.querySelector(`.skills-tab[onclick*="${tab}"]`).classList.add('active');
    document.getElementById(tab).classList.add('active');
}


function openModal(title, description) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('projectModal').style.display = "block";
}


function closeModal() {
    document.getElementById('projectModal').style.display = "none";
}


document.addEventListener('DOMContentLoaded', loadData);
