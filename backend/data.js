const engineeringDiscipline = [
  {
    discipline: " EEE",
    details: [
      {
        companyName: "General Electric",
        companyDescription:
          "GE is a multinational conglomerate that specializes in aviation, power, and renewable energy. It operates through several segments, including aviation, power, renewable energy, healthcare, and more. GE is known for its innovation and technological advancements, having been awarded numerous patents throughout its history.",
        products: [
          {
            productName: "Wind Turbines",
            descriptionHowThisProductMade:
              "Wind turbines are made up of several components including blades, a rotor, a gearbox, and a generator. The blades capture the wind energy and rotate the rotor which in turn spins the generator to produce electricity.",
          },
          {
            productName: "Solar Panels",
            descriptionHowThisProductMade:
              "Solar panels are made up of photovoltaic cells which convert sunlight into electricity. The cells are made of semiconductor materials such as silicon, and are arranged in a grid-like pattern on the panel to maximize the amount of sunlight that can be absorbed.",
          },
          {
            productName: "Smart Grids",
            descriptionHowThisProductMade:
              "Smart grids are a modernized version of traditional power grids. They use advanced communication and control technologies to manage the flow of electricity more efficiently, and enable the integration of renewable energy sources such as wind and solar power.",
          },
        ],
        peopleSoftSkills: [
          "Collaboration",
          "Innovation",
          "Attention to Detail",
        ],
        workCulture: [
          {
            culture: "Fast-paced",
            importance:
              "GE is known for its fast-paced work culture, where employees are expected to be highly productive and agile in responding to market demands.",
          },
          {
            culture: "Team-oriented",
            importance:
              "GE values teamwork and collaboration, and encourages employees to work together to achieve common goals.",
          },
        ],
        skillSets: ["Power Systems", "Control Systems", "Electromagnetics"],
      },
      {
        companyName: "Siemens",
        companyDescription:
          "Siemens is a multinational conglomerate that operates in several industries, including energy, healthcare, and industrial automation. It is known for its innovation and technological advancements in fields such as renewable energy, smart infrastructure, and digitalization. Siemens' mission is to improve the quality of life for people around the world through its products and services.",
        products: [
          {
            productName: "Electric Motors",
            descriptionHowThisProductMade:
              "Electric motors are made up of several components including a stator, a rotor, and bearings. The stator contains the coils of wire that generate a magnetic field when electric current passes through them. The rotor is a rotating component that interacts with the magnetic field to produce torque.",
          },
          {
            productName: "Gas Turbines",
            descriptionHowThisProductMade:
              "Gas turbines are made up of several components including a compressor, a combustion chamber, and a turbine. The compressor takes in air and compresses it, which is then mixed with fuel in the combustion chamber and ignited to produce hot, high-pressure gas. This gas flows through the turbine, which uses the energy to produce electricity or mechanical power.",
          },
          {
            productName: "Renewable Energy Solutions",
            descriptionHowThisProductMade:
              "Siemens offers a range of renewable energy solutions such as wind turbines, solar inverters, and energy storage systems. These products are designed to help customers transition to a low-carbon energy future.",
          },
        ],
        peopleSoftSkills: ["Adaptability", "Problem Solving", "Communication"],
        workCulture: [
          {
            culture: "Innovative",
            importance:
              "Siemens encourages innovation and creativity, and values employees who can come up with new ideas and solutions.",
          },
          {
            culture: "Collaborative",
            importance:
              "Siemens values teamwork and collaboration, and encourages employees to work together to solve complex problems.",
          },
        ],
        skillSets: ["Electrical Machines", "Power Electronics", "Smart Grids"],
      },
      {
        companyName: "ABB",
        companyDescription:
          "ABB is a global technology company that specializes in robotics, automation, and electrical equipment. It operates through several segments, including electrification, industrial automation, motion, and robotics & discrete automation. ABB's mission is to improve energy efficiency and productivity for its customers across a wide range of industries.",
        products: [
          {
            productName: "Transformers",
            descriptionHowThisProductMade:
              "Transformers are made by winding copper or aluminum wire around a core made of iron or steel laminations. The winding is then insulated and coated with varnish or resin to protect it from moisture and other environmental factors.",
          },
          {
            productName: "Switchgears",
            descriptionHowThisProductMade:
              "Switchgears are made by assembling various components such as circuit breakers, isolators, relays, and control panels. These components are then wired together and tested to ensure they function properly.",
          },
          {
            productName: "Drives",
            descriptionHowThisProductMade:
              "Drives are made by assembling power electronics components such as rectifiers, inverters, and DC-DC converters. These components are then programmed with software to control the speed and torque of electric motors.",
          },
        ],
        peopleSoftSkills: ["Customer Focus", "Innovation", "Teamwork"],
        workCulture: [
          {
            culture: "Dynamic",
            importance:
              "ABB values a dynamic work culture that encourages employees to be proactive, take risks, and pursue new ideas and opportunities. This helps to keep the company innovative and competitive in a rapidly changing industry.",
          },
          {
            culture: "Inclusive",
            importance:
              "ABB believes in creating a diverse and inclusive workplace where all employees feel valued and respected. This helps to foster a collaborative and supportive work environment that encourages teamwork and creativity.",
          },
        ],
        skillSets: ["Power Systems", "Control Systems", "Electrical Machines"],
      },
    ],
  },

  {
    discipline: "EC",
    details: [
      {
        companyName: "Intel",
        companyDescription:
          "ntel is an American multinational corporation that designs and manufactures microprocessors and other semiconductor components. The company also provides software and other related services. Intel is one of the world's largest and highest valued semiconductor chip makers, based on revenue.",
        products: [
          {
            productName: "Processors",
            descriptionHowThisProductMade:
              "Processors are made using a complex process that involves lithography, etching, and doping to create transistors on a silicon wafer. These transistors are then connected using metal wires to form the logic gates and other components that make up a processor.",
          },
          {
            productName: "Chips",
            descriptionHowThisProductMade:
              "Chips are made using a similar process to processors, but are generally simpler and have fewer transistors. Chips can be used for a variety of applications, including memory, I/O interfaces, and control systems.",
          },
          {
            productName: "Memory",
            descriptionHowThisProductMade:
              "Memory chips are made using a similar process to processors, but are optimized for storing data instead of performing calculations. Different types of memory, such as DRAM and SRAM, have different characteristics and are used for different purposes.",
          },
        ],
        peopleSoftSkills: [
          "Critical Thinking",
          "Problem Solving",
          "Collaboration",
        ],
        workCulture: [
          {
            culture: "Innovative",
            importance:
              "Intel is known for being at the forefront of technology innovation, so employees are expected to be creative and forward-thinking.",
          },
          {
            culture: "Fast-paced",
            importance:
              "The semiconductor industry is highly competitive and constantly evolving, so employees must be able to work quickly and adapt to change.",
          },
        ],
        skillSets: [
          "Digital Design",
          "Computer Architecture",
          "Semiconductor Physics",
        ],
      },
      {
        companyName: "Qualcomm",
        companyDescription:
          "Qualcomm is an American multinational corporation that designs and manufactures wireless telecommunications products and services. The company's products and services are used in mobile devices, wireless networks, and other related applications. Qualcomm is known for its Snapdragon line of processors, which are used in many popular smartphones and tablets.",
        products: [
          {
            productName: "Snapdragon Processors",
            descriptionHowThisProductMade:
              "Snapdragon processors are made using a process similar to other processors, but are optimized for mobile devices and other low-power applications. They include a variety of components, such as CPUs, GPUs, and wireless modems.",
          },
          {
            productName: "5G Modems",
            descriptionHowThisProductMade:
              "5G modems are specialized chips that enable wireless communication using the latest cellular network technology. They are designed to be low-power and high-speed, and can be used in a variety of devices.",
          },
          {
            productName: "Wi-Fi Chips",
            descriptionHowThisProductMade:
              "Wi-Fi chips are used to enable wireless communication using the Wi-Fi protocol. They are designed to be low-power and high-speed, and can be used in a variety of devices.",
          },
        ],
        peopleSoftSkills: ["Adaptability", "Communication", "Innovation"],
        workCulture: [
          {
            culture: "Inclusive",
            importance:
              "Qualcomm values diversity and inclusion, and strives to create a welcoming and supportive work environment for all employees.",
          },
          {
            culture: "Dynamic",
            importance:
              "The semiconductor industry is constantly changing, so employees must be able to adapt quickly and stay up-to-date with the latest technologies and trends.",
          },
        ],
        skillSets: [
          "Digital Signal Processing",
          "Wireless Communication",
          "Analog Circuit Design",
        ],
      },

      {
        companyName: "Texas Instruments",
        companyDescription:
          "Texas Instruments is an American technology company that designs and manufactures semiconductors and other electronics components. The company's products are used in a wide range of applications, including industrial automation, automotive systems, and personal electronics. Texas Instruments is known for its calculators, microcontrollers, and digital signal processors.",
        products: [
          {
            productName: "Semiconductors",
            descriptionHowThisProductMade:
              "Semiconductors are made using a process called 'wafer fabrication' where layers of different materials are deposited on a silicon wafer and then etched to form the desired circuit pattern.",
          },
          {
            productName: "Sensors",
            descriptionHowThisProductMade:
              "Sensors are made using a variety of manufacturing processes depending on the type of sensor, but they all involve depositing layers of materials onto a substrate to form the sensing element.",
          },
          {
            productName: "Embedded Systems",
            descriptionHowThisProductMade:
              "Embedded systems are made by designing and programming integrated circuits that can perform specific tasks, such as controlling a device or gathering data from sensors.",
          },
        ],
        peopleSoftSkills: [
          "Attention to Detail",
          "Problem Solving",
          "Teamwork",
        ],
        workCulture: [
          {
            culture: "Collaborative",
            Importance:
              "At Texas Instruments, collaboration is key to success as engineers work in teams to design and develop complex products.",
          },
          {
            culture: "Innovative",
            Importance:
              "Innovation is a core value at Texas Instruments, and the company encourages engineers to come up with new ideas and solutions to problems.",
          },
        ],
        skillSets: [
          "Analog Circuit Design",
          "Digital Signal Processing",
          "Microcontroller Programming",
        ],
      },
    ],
  },

  {
    discipline: "CSE",
    details: [
      {
        companyName: "Google",
        companyDescription:
          "Google is a multinational technology company that specializes in Internet-related services and products. The company was founded in 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University. Google's primary product is its search engine, which is widely considered to be the best in the world. In addition to its search engine, Google also offers a variety of other products and services, including Android, Gmail, Google Maps, Google Drive, Google Docs, and Google Cloud Platform.",
        products: [
          {
            productName: "Search Engine",
            descriptionHowThisProductMade:
              "Google's search engine uses a complex algorithm to analyze and rank web pages based on various factors like relevance, popularity, and quality. It crawls the web to discover new pages, indexes them, and serves the most relevant results to the users.",
          },
          {
            productName: "Android",
            descriptionHowThisProductMade:
              "Android is an open-source operating system for mobile devices. It is based on the Linux kernel and is designed to be customizable and flexible. It is developed by the Android Open Source Project (AOSP), which is led by Google.",
          },
          {
            productName: "Gmail",
            descriptionHowThisProductMade:
              "Gmail is a free email service provided by Google. It uses a web-based interface and offers features like spam filtering, conversation threading, and integration with other Google services. It is developed using various programming languages like Java, JavaScript, and C++.",
          },
        ],
        peopleSoftSkills: ["Creativity", "Collaboration", "Problem Solving"],
        workCulture: [
          {
            culture: "Innovative",
            importance:
              "Google encourages its employees to think out of the box and come up with creative solutions to complex problems. It values new ideas and innovation.",
          },
          {
            culture: "Fast-paced",
            importance:
              "Google operates in a highly competitive and dynamic environment. It values speed and agility in decision-making and execution.",
          },
        ],
        skillSets: ["Algorithms", "Data Structures", "Machine Learning"],
      },
      {
        companyName: "Microsoft",
        companyDescription:
          "Microsoft is a multinational technology company that develops, licenses, and sells computer software, consumer electronics, and personal computers. The company was founded in 1975 by Bill Gates and Paul Allen and is headquartered in Redmond, Washington. Microsoft is best known for its Windows operating system, Microsoft Office suite of productivity software, and Xbox gaming console.",

        products: [
          {
            productName: "Windows",
            descriptionHowThisProductMade:
              "Windows is a series of operating systems developed by Microsoft. It is the most widely used desktop operating system in the world. It is developed using various programming languages like C, C++, and C#.",
          },
          {
            productName: "Office",
            descriptionHowThisProductMade:
              "Microsoft Office is a suite of productivity applications that includes Word, Excel, PowerPoint, and Outlook. It is used by millions of people around the world. It is developed using various programming languages like C++, C#, and JavaScript.",
          },
          {
            productName: "Azure",
            descriptionHowThisProductMade:
              "Azure is a cloud computing platform developed by Microsoft. It offers a wide range of services like virtual machines, databases, storage, and networking. It is developed using various programming languages like C++, C#, and Java.",
          },
        ],
        peopleSoftSkills: ["Communication", "Teamwork", "Adaptability"],
        workCulture: [
          {
            culture: "Collaborative",
            importance:
              "Microsoft values collaboration among its employees. It encourages them to work together to solve problems and achieve goals.",
          },
          {
            culture: "Inclusive",
            importance:
              "Microsoft is committed to creating a diverse and inclusive workplace where everyone feels valued and respected. It values different perspectives and ideas.",
          },
        ],
        skillSets: [
          "Software Engineering",
          "Database Management",
          "Cloud Computing",
        ],
      },
      {
        companyName: "Amazon",
        companyDescription:
          "Amazon is a multinational technology company that focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence. The company was founded in 1994 by Jeff Bezos and is headquartered in Seattle, Washington. Amazon is the largest e-commerce marketplace in the world and also offers a variety of other services and products, including Amazon Web Services, Kindle e-readers, Fire tablets, and Echo smart speakers.",

        products: [
          {
            productName: "Amazon Web Services",
            descriptionHowThisProductMade:
              "Amazon Web Services (AWS) is a cloud platform that offers over 200 fully-featured services from data centers globally. These services include computing, storage, databases, analytics, networking, mobile, developer tools, management tools, IoT, security, and enterprise applications.",
          },
          {
            productName: "Kindle",
            descriptionHowThisProductMade:
              "Kindle is a series of e-readers designed and marketed by Amazon. These devices enable users to browse, buy, download, and read e-books, newspapers, magazines, and other digital media via wireless networking.",
          },
          {
            productName: "Prime",
            descriptionHowThisProductMade:
              "Amazon Prime is a paid subscription service offered by Amazon that provides users with access to streaming of movies, TV shows, and music, unlimited photo storage, free shipping, and other benefits.",
          },
        ],
        peopleSoftSkills: ["Problem Solving", "Customer Focus", "Innovation"],
        workCulture: [
          {
            culture: "Dynamic",
            Importance:
              "Amazon's work culture is known for being dynamic, fast-paced, and constantly evolving to meet the needs of its customers.",
          },
          {
            culture: "Fast-paced",
            Importance:
              "Working at Amazon requires the ability to work quickly and efficiently while still delivering high-quality work.",
          },
        ],
        skillSets: [
          "Distributed Systems",
          "Database Management",
          "Cloud Computing",
        ],
      },
    ],
  },

  {
    discipline: "ME",
    details: [
      {
        companyName: "Tesla",
        companyDescription:
          "Tesla is an American electric vehicle and clean energy company founded in 2003 by Elon Musk, JB Straubel, Martin Eberhard, Marc Tarpenning, and Ian Wright. The company's mission is to accelerate the world's transition to sustainable energy. Tesla's product line includes electric cars, solar roofs, energy storage solutions, and other related products. The company's main focus is on developing electric vehicles with long-range capabilities, fast charging times, and innovative designs. Tesla is also known for its cutting-edge technology, such as Autopilot, which enables self-driving capabilities, and its Supercharger network, which allows for fast and convenient charging.",
        products: [
          {
            productName: "Electric Cars",
            descriptionHowThisProductMade:
              "Tesla's electric cars are powered by lithium-ion battery packs that are produced at the Gigafactory. The battery packs are assembled with thousands of individual battery cells and advanced cooling and safety systems.",
          },
          {
            productName: "Solar Roofs",
            descriptionHowThisProductMade:
              "Tesla's Solar Roofs are made of tempered glass tiles with integrated solar cells. These tiles are designed to look like traditional roofing materials and are installed with a new roofing system to ensure maximum energy generation and durability.",
          },
          {
            productName: "Powerwalls",
            descriptionHowThisProductMade:
              "Tesla's Powerwalls are rechargeable lithium-ion battery energy storage systems that are designed to store excess solar energy during the day and power homes at night or during grid outages. The Powerwalls are produced at the Gigafactory.",
          },
        ],
        peopleSoftSkills: [
          "Innovation",
          "Collaboration",
          "Attention to Detail",
        ],
        workCulture: [
          {
            culture: "Fast-paced",
            importance:
              "Tesla's fast-paced work culture is driven by the company's mission to accelerate the world's transition to sustainable energy. Employees are expected to work quickly and efficiently to achieve this goal.",
          },
          {
            culture: "Innovative",
            importance:
              "Innovation is at the core of Tesla's work culture. The company encourages employees to think outside the box and come up with new and creative ideas to solve complex problems.",
          },
        ],
        skillSets: [
          "Automotive Engineering",
          "Battery Technology",
          "Renewable Energy",
        ],
      },
      {
        companyName: "General Motors",
        companyDescription:
          "General Motors (GM) is an American multinational corporation that designs, manufactures, and sells vehicles and vehicle parts. The company was founded in 1908 and is headquartered in Detroit, Michigan. GM's product line includes cars, trucks, SUVs, and other vehicles under various brands, including Chevrolet, Buick, GMC, and Cadillac. The company is also involved in autonomous vehicle technology and is developing self-driving cars. GM's commitment to innovation and sustainability has led to the development of new technologies, such as the Chevrolet Bolt electric vehicle, and initiatives to reduce the company's environmental impact.",

        products: [
          {
            productName: "Cars",
            descriptionHowThisProductMade:
              "General Motors produces a wide range of cars, including sedans, SUVs, and pickup trucks. The cars are manufactured using advanced materials and production processes to ensure quality and safety.",
          },
          {
            productName: "Trucks",
            descriptionHowThisProductMade:
              "General Motors produces a range of trucks, including light-duty and heavy-duty pickups, cargo vans, and chassis cabs. These trucks are designed for commercial and personal use and are manufactured with durability and reliability in mind.",
          },
          {
            productName: "Crossovers",
            descriptionHowThisProductMade:
              "General Motors produces a range of crossovers, which are vehicles that combine the features of an SUV and a car. These vehicles are designed to be versatile and practical, with ample cargo space and room for passengers.",
          },
        ],
        peopleSoftSkills: [
          "Customer Focus",
          "Collaboration",
          "Problem Solving",
        ],
        workCulture: [
          {
            culture: "Team-oriented",
            importance:
              "General Motors values teamwork and collaboration. The company encourages employees to work together to achieve shared goals and objectives.",
          },
          {
            culture: "Innovative",
            importance:
              "Innovation is an important part of General Motors' work culture. The company encourages employees to think creatively and come up with new and innovative ideas to improve its products and processes.",
          },
        ],
        skillSets: [
          "Mechanical Design",
          "Materials Science",
          "Manufacturing Processes",
        ],
      },
      {
        companyName: "Boeing",
        companyDescription:
          "Boeing is an American multinational corporation that designs, manufactures, and sells airplanes, rotorcraft, rockets, satellites, and missiles. The company was founded in 1916 and is headquartered in Chicago, Illinois. Boeing is one of the world's largest aerospace and defense contractors and is known for its iconic 747 jumbo jet and other commercial airplanes, such as the 737, 777, and 787. The company also produces military aircraft, including the AH-64 Apache, F-15 Eagle, and F/A-18 Hornet. Boeing's focus on innovation and cutting-edge technology has made it a leader in the aerospace industry.",

        products: [
          {
            productName: "Commercial Aircraft",
            descriptionHowThisProductMade:
              "Boeing designs, manufactures, and sells commercial airplanes to airlines worldwide. Its product line-up includes the 737, 747, 767, 777, and 787 families of airplanes, as well as the 747-8 and the 777X.",
          },
          {
            productName: "Defense, Space, and Security",
            descriptionHowThisProductMade:
              "Boeing's defense, space, and security division provides a broad range of products and services to military and government customers worldwide, including aircraft, satellites, and weapons systems.",
          },
        ],
        peopleSoftSkills: [
          "Attention to Detail",
          "Problem Solving",
          "Collaboration",
        ],
        workCulture: [
          {
            culture: "Innovative",
            Importance:
              "Boeing fosters a culture of innovation, encouraging its employees to think outside the box and pursue creative solutions to complex challenges.",
          },
          {
            culture: "Team-oriented",
            Importance:
              "Boeing emphasizes teamwork and collaboration, recognizing that success often requires the contributions of many individuals working together.",
          },
        ],
        skillSets: ["Aerodynamics", "Structural Design", "Systems Engineering"],
      },
    ],
  },
  {
    discipline: "CE",
    details: [
      {
        companyName: "Bechtel",
        companyDescription:
          "Bechtel is an American engineering, construction, and project management company that has been in business for over 120 years. The company provides services to a variety of industries, including infrastructure, mining, and oil and gas. They have completed projects all over the world, including the Hoover Dam in the United States and the Channel Tunnel between the United Kingdom and France.",
        products: [
          {
            productName: "Infrastructure",
            descriptionHowThisProductMade:
              "Bechtel provides engineering, construction, and project management services for infrastructure projects such as highways, bridges, tunnels, airports, and ports. Their work has helped to build critical infrastructure around the world, improving transportation and facilitating economic growth.",
          },
          {
            productName: "Mining",
            descriptionHowThisProductMade:
              "Bechtel provides engineering, construction, and project management services for mining operations, helping mining companies to design, build, and operate mines more efficiently and safely. Bechtel's work has helped to increase productivity and reduce costs in the mining industry.",
          },
          {
            productName: "Oil & Gas",
            descriptionHowThisProductMade:
              "Bechtel provides engineering, construction, and project management services for oil and gas production and processing facilities. Their work has helped to improve the efficiency and safety of oil and gas operations around the world.",
          },
        ],
        peopleSoftSkills: ["Communication", "Leadership", "Collaboration"],
        workCulture: [
          {
            culture: "Dynamic",
            importance:
              "Bechtel's dynamic work culture encourages employees to be innovative and adaptable, allowing them to respond quickly to changing project needs and deliver high-quality results.",
          },
          {
            culture: "Inclusive",
            importance:
              "Bechtel values diversity and inclusivity, recognizing that employees from diverse backgrounds bring unique perspectives and ideas that help drive innovation and improve project outcomes.",
          },
        ],
        skillSets: [
          "Project Management",
          "Structural Design",
          "Geotechnical Engineering",
        ],
      },
      {
        companyName: "Jacobs",
        companyDescription:
          "Jacobs is an American engineering company that provides services in a variety of industries, including transportation, water, and buildings. The company offers services such as design, engineering, construction, and maintenance. Jacobs has worked on a number of high-profile projects, including the construction of a new terminal at Heathrow Airport in the United Kingdom.",

        products: [
          {
            productName: "Transportation",
            descriptionHowThisProductMade:
              "Jacobs provides engineering, design, and project management services for transportation infrastructure such as highways, railways, airports, and seaports. Their work has helped to improve mobility and connectivity around the world.",
          },
          {
            productName: "Water",
            descriptionHowThisProductMade:
              "Jacobs provides engineering and design services for water infrastructure such as dams, pipelines, and treatment plants. Their work has helped to improve access to clean water and reduce water scarcity in many regions.",
          },
          {
            productName: "Buildings",
            descriptionHowThisProductMade:
              "Jacobs provides engineering and design services for buildings such as offices, hospitals, and schools. Their work has helped to create safe, efficient, and sustainable buildings that improve people's quality of life.",
          },
        ],
        peopleSoftSkills: [
          "Problem Solving",
          "Collaboration",
          "Customer Focus",
        ],
        workCulture: [
          {
            culture: "Innovative",
            importance:
              "Jacobs fosters a culture of innovation, encouraging employees to think creatively and explore new ideas to solve complex problems and deliver better outcomes for clients.",
          },
          {
            culture: "Team-oriented",
            importance:
              "Jacobs values teamwork and collaboration, recognizing that bringing together diverse perspectives and skills leads to better project outcomes and more satisfied clients.",
          },
        ],
        skillSets: [
          "Structural Engineering",
          "Geotechnical Engineering",
          "Construction Management",
        ],
      },
      {
        companyName: "AECOM",
        companyDescription:
          "AECOM is an American engineering firm that provides services in a variety of industries, including infrastructure, environment, and buildings. The company offers services such as design, engineering, construction, and management. AECOM has completed a number of notable projects, including the design and construction of the London Olympics' Aquatics Centre.",

        products: [
          {
            productName: "Infrastructure",
            descriptionHowThisProductMade:
              "AECOM provides engineering, consulting, and construction services for infrastructure projects such as highways, bridges, airports, and rail systems. Their projects include the expansion of Los Angeles International Airport and the renovation of the New York City subway system.",
          },
          {
            productName: "Environment",
            descriptionHowThisProductMade:
              "AECOM offers services in environmental remediation, water resource management, and sustainability. They work on projects like cleaning up hazardous waste sites, creating sustainable infrastructure, and designing wildlife conservation plans.",
          },
          {
            productName: "Buildings",
            descriptionHowThisProductMade:
              "AECOM provides architecture, engineering, and construction services for buildings such as office buildings, hospitals, and sports arenas. Their projects include the design of the Mercedes-Benz Stadium in Atlanta and the construction of the headquarters for the U.S. Department of Homeland Security.",
          },
        ],
        peopleSoftSkills: [
          "Collaboration",
          "Innovation",
          "Attention to Detail",
        ],
        workCulture: [
          {
            culture: "Fast-paced",
            importance:
              "AECOM operates in a fast-paced environment where deadlines are often tight and projects are complex. It's important for employees to be able to work efficiently and manage their time effectively to meet project goals and deliverables.",
          },
          {
            culture: "Team-oriented",
            importance:
              "Collaboration and teamwork are crucial to AECOM's success. Projects often involve multiple departments and stakeholders, and it's important for employees to be able to work effectively with others to meet project goals.",
          },
        ],
        skillSets: [
          "Structural Engineering",
          "Environmental Engineering",
          "Project Management",
        ],
      },
    ],
  },
];
