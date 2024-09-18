export default function Resume() {
    return (
      <main className="flex flex-col gap-8 items-center">
        <span className="page-title bg-gradient-to-r from-transparent via-sky-300 to-transparent">Below is my Resume!</span>
        <div className="home-intro">
            <div className="resume-section">
                <div className="paragraph">
                    Detail&ndash;oriented Software Engineer proficient in Test Automation and Full Stack Development, adept at
                    creating scalable web applications using Python, React, and Kubernetes on AWS EC2. Experienced in leading 
                    QA automation efforts and collaborating closely with cross&ndash;functional teams to ensure seamless software
                    deployment and reliability. Seeking to leverage strong technical acumen and Agile methodologies to drive 
                    innovation and efficiency in a challenging software development role. 
                </div>
            </div>
            <div className="resume-section">
                <span className="resume-title">AREA OF EXPERTISE </span>
                <div className="paragraph">
                    Analytical Skills | Test Automation | .Net | NodeJS | React | Angular | Python | Wireshark | Linux | Amazon Web 
                    Services | AWS EC2 | AWS IAM | Java | Microsoft Azure | Kubernetes Deployment | Troubleshooting | 
                    Debugging | Git | C Programming Language | Docker | CSS | HTML | TypeScript | JavaScript | Strong Technical 
                    Knowledge | Agile and Safe Agile | Time Management | Communication | Collaboration | proxmox | port 
                    forwarding | Server Management 
                </div>
            </div>
            <div className="resume-section">
                <span className="resume-title">PROFESSIONAL EXPERIENCE</span>
                <div className="paragraph">
                    <span className="company text-green-500">Fiverr</span>
                    <span className="position">Freelance Software Engineer</span>
                    <span className="date">January &ndash; Present </span>
                    <span className="general-res">General Responsibilities: </span> 
                    <ul>
                    <li>Communicate with stakeholders on desired application parameters and features</li>
                    <li>Create content map for web application, design database, and plan backend</li>
                    <li>Determine timeline for application and relay information to stakeholder</li>
                    <li>Develop web applications for clients using Python, React, and PostgreSQL</li>
                    <li>Deploy web applications for clients using Kubernetes and Docker, typically on Amazon Web Services EC2</li>
                    </ul>
                </div>
                <div className="paragraph">
                    <span className="company text-blue-700">General Motors</span>
                    <span className="date text-blue-700">Aug 2021 &ndash; November 2023</span>
                    <span className="position">QE Automation Engineer Lead</span>
                    <span className="date">April 2023 &ndash; November 2023</span>
                    <span className="general-res">General Responsibilities:</span>
                    <ul>
                        <li>Create efficient test automation scripts using Java and Python on IntelliJ IDEA.</li>
                        <li>Collaborated with developers for release readiness.</li>
                        <li>Supported repo deployments and tested live environment on deployment days.</li>
                        <li>Proactively resolved test failures and communicated with stakeholders.</li>
                        <li>Document and train junior members in front&ndash;end and back&ndash;end testing.</li>
                        <li>Integrate test automation into CI/CD pipeline via Azure DevOps in collaboration with developers and DevOps teams.</li>
                        <span className="notable-accomplishment">Notable Accomplishment:</span>
                        <li>I was the Lead and sole QE Automation engineer for one team while supporting another.</li>
                    </ul>
                </div>
                <div className="paragraph">
                    <span className="position">Software Developer</span>
                    <span className="date">August 2021 &ndash; May 2023</span>
                    <span className="general-res">General Responsibilities:</span>
                    <ul>
                        <li>Led frontend and backend development within Agile timelines for diverse client sites.</li>
                        <li>Collaborated with Product Owners and teams, tailoring solutions to precise client specs.</li>
                        <li>Implemented code using best software practices, ensuring reliability and standardization using Java, 
                        Angular, ReactJS, Spring, SQL, and HTML5 on IDEs such as Visual Studio 2023 and VScode</li>
                        <li>Supported DevOps for reliable Java based applications.</li>
                        <li>Guided junior developers, mentoring and conducting thorough reviews.</li>
                        <li>Leveraged technical writing for comprehensive system designs and user docs.</li>
                        <span className="notable-accomplishment">Notable Accomplishment:</span>
                        <li>Developed markets in Mexico, South America, Canada and US in the Shop Click Drive program.</li>
                    </ul>
                </div>
            </div>
            <div className="resume-section">
                <span className="resume-title">EDUCATION</span>
                    <div className="paragraph">  
                        Indiana University Bloomington    
                        <span>August 2016 &ndash; July 2021</span> 
                        Bachelor of Science in Informatics
                    </div>
            </div>
        </div>
      </main>
    );
  }