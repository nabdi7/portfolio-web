import { Work } from '../types/work';

const workData: Work[] = [
    {
        id: 1,
        title: "Software Engineer",
        date: "Dec 2022 - ",
        location: "Seattle, WA",
        description: [
            "Founder of Quality Designs small company specializing in building websites for all types of businesses focused on lead generation and building brand.",
            "Developed dynamic and interactive websites that ensured high traffic, page views, and user experience.",
            "Designed a UX that improved web functionality and responsiveness for a local small business."
        ],
        company: "QD Web Designs",
        companyLogo: "qd.png", 
    },
    {
        id: 2,
        title: "Software Engineering Intern",
        date: "Jun 2022 - Sep 2022",
        location: "Seattle, WA",
        description: [
            "Rendered Auto-CAD 3D objects using Pytorch and Plotly libraries.",
            "Built an object detection algorithm using convolutional neural networks to detect, recognize, and identify entities in the image.",
            "Improved accuracy of identifying entities in the image significantly by 30%."
        ],
        company: "Tesla, Inc ",
        companyLogo: "tesla2.png", 
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
        companyLogo: "gaotek.png", 
    },
];

export default workData;
