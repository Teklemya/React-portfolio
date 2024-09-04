import UCLIMS from '../assets/UCLIMS.png'
import UCCOM from '../assets/UC_COM.jpg'
import orangeisbetter from '../assets/Orange.png'
import portfolio from '../assets/portfolio.png'
import project5_img from '../assets/project_5.svg'
import project6_img from '../assets/project_6.svg'

const mywork_data = [
    {
        w_no:1,
        w_name:"UCLIMS",
        w_img:UCLIMS,
        w_link:"https://uclims.uc.edu/",
        w_description: "UCLIMS is a Laboratory Information Management System (LIMS) that is used to manage the workflow of a laboratory. It is a web-based application that is used to track samples, manage data, and automate laboratory processes. We main focus on Mice and Human samples. The system is designed to be user-friendly and easy to use. It is a secure system that is compliant with HIPAA and other regulations. The system is designed to be scalable and can be customized to meet the needs of any laboratory. We put out the best data analysis and visualization tools to help researchers make sense of their data.",
        w_tech: ".NET, C#, Blazor, SQL Server, Azure, R"
    },
    {
        w_no:2,
        w_name:"COM UC",
        w_img:UCCOM,
        w_link:"https://med.uc.edu/",
        w_description: "The College of Medicine (COM) at UC provides resources and information about medical education, research, and clinical care.",
        w_tech: "Sitefinity, HTML, CSS, JavaScript"
    },
    {
        w_no:3,
        w_name:"OrangeIsBetter",
        w_img:orangeisbetter,
        w_link:"https://orangeisbetter.com/"
        
    },
    {
        w_no:4,
        w_name:"Web design",
        w_img:portfolio,
        w_link:"https://isaacportfolio.tech/"
    },
    {
        w_no:5,
        w_name:"Web design",
        w_img:project5_img
    },
    {
        w_no:6,
        w_name:"Web design",
        w_img:project6_img
    },
]
 
export default mywork_data;