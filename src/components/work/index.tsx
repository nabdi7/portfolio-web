import { Work } from '../types/work';

const workData: Work[] = [
    {
        id: 1,
        title: "Software Engineer",
        date: "Dec 2022 - ",
        location: "Seattle, WA",
        description: [
            "Achieved a 90% increase in website traffic and user engagement through dynamic and interactive designs.",
            "Led the development of websites and apps that significantly improved client lead generation and brand visibility.",
            "Implemented UX designs resulting in a 50% improvement in website responsiveness and user retention."
        ],
        company: "QD Web Designs",
        companyLogo: "https://res.cloudinary.com/dlehxkdtn/image/upload/qd_pxjo7z.png", 
    },
    {
        id: 2,
        title: "Software Engineering Intern",
        date: "Jun 2022 - Sep 2022",
        location: "Seattle, WA",
        description: [
            "Developed advanced simulations and visualizations of AutoCAD 3D models using PyTorch and Plotly libraries.",
            "Built an object detection algorithm using convolutional neural networks to detect, recognize, and identify entities in the image.",
            "Improved accuracy of identifying entities in the image significantly by 30%."
        ],
        company: "Tesla, Inc ",
        companyLogo: "https://res.cloudinary.com/dlehxkdtn/image/upload/tesla2_gfbss2.png", 
    },
    {
        id: 3,
        title: "Software Developer Intern",
        date: "Jan 2022 - April 2022",
        location: "Remote (Seattle, WA)",
        description: [
            "Optimized and updated the company’s Gateway Software Design.",
            "Created test cases and simplified the overall design.",
            "Created python script to organize and list all the interns/workers in the company based on what department they work in sub-team and date they joined the company."
        ],
        company: "GaoTek, Inc",
        companyLogo: "https://res.cloudinary.com/dlehxkdtn/image/upload/gaotek_cqglxl.png", 
    },
];

export default workData;
