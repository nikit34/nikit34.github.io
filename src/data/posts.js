const posts = [
    {
        title: "Overview of the Application of Markov Chains",
        link: "https://www.linkedin.com/pulse/overview-application-markov-chains-%25D0%25BD%25D0%25B8%25D0%25BA%25D0%25B8%25D1%2582%25D0%25B0-%25D0%25BF%25D0%25B5%25D1%2580%25D0%25BC%25D1%258F%25D0%25BA%25D0%25BE%25D0%25B2-ikrbf/?trackingId=YWxX3tn1Q2GsBgS0MwtU7g%3D%3D",
        img: "1700051650911.png"
    },
    {
        title: "Multithreaded FTP client",
        link: "https://www.linkedin.com/pulse/multithreaded-ftp-client-%25D0%25BD%25D0%25B8%25D0%25BA%25D0%25B8%25D1%2582%25D0%25B0-%25D0%25BF%25D0%25B5%25D1%2580%25D0%25BC%25D1%258F%25D0%25BA%25D0%25BE%25D0%25B2/?trackingId=YWxX3tn1Q2GsBgS0MwtU7g%3D%3D",
        img: "1650794418650.jpeg"
    },
    {
        title: "Library for debug traffic between mobile applications and server in real time CI",
        link: "https://www.linkedin.com/pulse/library-debug-traffic-between-mobile-applications-server-%25D0%25BF%25D0%25B5%25D1%2580%25D0%25BC%25D1%258F%25D0%25BA%25D0%25BE%25D0%25B2/?trackingId=YHh9F8G8TtuuGcEt13iTjA%3D%3D",
        img: "1626040750599.png"
    },
    {
        title: "Carburetor and Injection engine, as I remember and what want",
        link: "https://www.linkedin.com/pulse/carburetor-injection-engine-i-remember-what-want-%25D0%25BD%25D0%25B8%25D0%25BA%25D0%25B8%25D1%2582%25D0%25B0-%25D0%25BF%25D0%25B5%25D1%2580%25D0%25BC%25D1%258F%25D0%25BA%25D0%25BE%25D0%25B2/?trackingId=YHh9F8G8TtuuGcEt13iTjA%3D%3D",
        img: "1615719903896.jpeg"
    },
    {
        title: "Game C++ / Client-Server / SFML",
        link: "https://www.linkedin.com/pulse/game-c-client-server-sfml-%25D0%25BD%25D0%25B8%25D0%25BA%25D0%25B8%25D1%2582%25D0%25B0-%25D0%25BF%25D0%25B5%25D1%2580%25D0%25BC%25D1%258F%25D0%25BA%25D0%25BE%25D0%25B2/?trackingId=YHh9F8G8TtuuGcEt13iTjA%3D%3D",
        img: "1608232667944.jpeg"
    },
    {
        title: "Parallel Merge Sort",
        link: "https://www.linkedin.com/pulse/parallel-merge-sort-%25D0%25BD%25D0%25B8%25D0%25BA%25D0%25B8%25D1%2582%25D0%25B0-%25D0%25BF%25D0%25B5%25D1%2580%25D0%25BC%25D1%258F%25D0%25BA%25D0%25BE%25D0%25B2/?trackingId=YHh9F8G8TtuuGcEt13iTjA%3D%3D",
        img: "1602056158035.jpeg"
    },
    {
        title: "Update site for portfolio",
        link: "https://www.linkedin.com/pulse/update-site-portfolio-%25D0%25BD%25D0%25B8%25D0%25BA%25D0%25B8%25D1%2582%25D0%25B0-%25D0%25BF%25D0%25B5%25D1%2580%25D0%25BC%25D1%258F%25D0%25BA%25D0%25BE%25D0%25B2/",
        img: "1703455216995.png"
    },
    {
        title: "Market Place",
        link: "https://www.linkedin.com/pulse/market-place-%25D0%25BD%25D0%25B8%25D0%25BA%25D0%25B8%25D1%2582%25D0%25B0-%25D0%25BF%25D0%25B5%25D1%2580%25D0%25BC%25D1%258F%25D0%25BA%25D0%25BE%25D0%25B2/?trackingId=YHh9F8G8TtuuGcEt13iTjA%3D%3D",
        img: "1598083528474.jpeg"
    },
    {
        title: "E-commerce",
        link: "https://www.linkedin.com/pulse/e-commerce-%25D0%25BD%25D0%25B8%25D0%25BA%25D0%25B8%25D1%2582%25D0%25B0-%25D0%25BF%25D0%25B5%25D1%2580%25D0%25BC%25D1%258F%25D0%25BA%25D0%25BE%25D0%25B2/?trackingId=YHh9F8G8TtuuGcEt13iTjA%3D%3D",
        img: "1595381880998.jpeg"
    },
    {
        title: "Tankette - 2D shooter (C++/SFML)",
        link: "https://www.linkedin.com/pulse/tankette-%25D0%25BD%25D0%25B8%25D0%25BA%25D0%25B8%25D1%2582%25D0%25B0-%25D0%25BF%25D0%25B5%25D1%2580%25D0%25BC%25D1%258F%25D0%25BA%25D0%25BE%25D0%25B2/?trackingId=YHh9F8G8TtuuGcEt13iTjA%3D%3D",
        img: "1590695105743.png"
    },
    {
        title: "Tool for calc graph",
        link: "https://www.linkedin.com/pulse/tool-calc-graph-%25D0%25BD%25D0%25B8%25D0%25BA%25D0%25B8%25D1%2582%25D0%25B0-%25D0%25BF%25D0%25B5%25D1%2580%25D0%25BC%25D1%258F%25D0%25BA%25D0%25BE%25D0%25B2/?trackingId=YHh9F8G8TtuuGcEt13iTjA%3D%3D",
        img: "1584992224936.png"
    },
    {
        title: "Code parsing. Creating a page with parallax from mouse position, floating cards, filling in hover elements and other features...",
        link: "https://www.linkedin.com/pulse/code-parsing-creating-page-parallax-from-mouse-cards-filling-%25D0%25BD%25D0%25B8%25D0%25BA%25D0%25B8%25D1%2582%25D0%25B0/?trackingId=YHh9F8G8TtuuGcEt13iTjA%3D%3D",
        img: "1578470885637.jpeg"
    },
    {
        title: "Digital Education",
        link: "https://www.linkedin.com/pulse/digital-education-%25D0%25BD%25D0%25B8%25D0%25BA%25D0%25B8%25D1%2582%25D0%25B0-%25D0%25BF%25D0%25B5%25D1%2580%25D0%25BC%25D1%258F%25D0%25BA%25D0%25BE%25D0%25B2-1e/?trackingId=YHh9F8G8TtuuGcEt13iTjA%3D%3D",
        img: "1572171239047.jpeg"
    },
    {
        title: "Turing Machine in native implementation in C++",
        link: "https://www.linkedin.com/pulse/turing-machine-native-implementation-c-%25D0%25BD%25D0%25B8%25D0%25BA%25D0%25B8%25D1%2582%25D0%25B0-%25D0%25BF%25D0%25B5%25D1%2580%25D0%25BC%25D1%258F%25D0%25BA%25D0%25BE%25D0%25B2/?trackingId=YHh9F8G8TtuuGcEt13iTjA%3D%3D",
        img: "1569819716690.jpeg"
    },
    {
        title: "Analysis of customer preferences based on color shades of product photos",
        link: "https://www.linkedin.com/pulse/analysis-customer-preferences-based-color-shades-product-%25D0%25BF%25D0%25B5%25D1%2580%25D0%25BC%25D1%258F%25D0%25BA%25D0%25BE%25D0%25B2/?trackingId=YHh9F8G8TtuuGcEt13iTjA%3D%3D",
        img: "1569352867347.jpeg"
    },
    {
        title: "Что происходит, когда вбиваешь символы в адресную строку браузера?",
        link: "https://www.linkedin.com/pulse/%25D1%2587%25D1%2582%25D0%25BE-%25D0%25BF%25D1%2580%25D0%25BE%25D0%25B8%25D1%2581%25D1%2585%25D0%25BE%25D0%25B4%25D0%25B8%25D1%2582-%25D0%25BA%25D0%25BE%25D0%25B3%25D0%25B4%25D0%25B0-%25D0%25B2%25D0%25B1%25D0%25B8%25D0%25B2%25D0%25B0%25D0%25B5%25D1%2588%25D1%258C-%25D1%2581%25D0%25B8%25D0%25BC%25D0%25B2%25D0%25BE%25D0%25BB%25D1%258B-%25D0%25B2-%25D0%25B0%25D0%25B4%25D1%2580%25D0%25B5%25D1%2581%25D0%25BD%25D1%2583%25D1%258E-%25D1%2581%25D1%2582%25D1%2580%25D0%25BE%25D0%25BA%25D1%2583-%25D0%25BF%25D0%25B5%25D1%2580%25D0%25BC%25D1%258F%25D0%25BA%25D0%25BE%25D0%25B2/?trackingId=YHh9F8G8TtuuGcEt13iTjA%3D%3D",
        img: "1568127049217.jpeg"
    },
    {
        title: "Analysis of the human condition by typing word intensity",
        link: "https://www.linkedin.com/pulse/analysis-human-condition-typing-word-intensity-%25D0%25BD%25D0%25B8%25D0%25BA%25D0%25B8%25D1%2582%25D0%25B0-%25D0%25BF%25D0%25B5%25D1%2580%25D0%25BC%25D1%258F%25D0%25BA%25D0%25BE%25D0%25B2/?trackingId=YHh9F8G8TtuuGcEt13iTjA%3D%3D",
        img: "1561869412855.jpeg"
    },
    {
        title: "Accounting of traffic flow from surveillance cameras",
        link: "https://www.linkedin.com/pulse/accounting-traffic-flow-from-surveillance-cameras-%25D0%25BD%25D0%25B8%25D0%25BA%25D0%25B8%25D1%2582%25D0%25B0-%25D0%25BF%25D0%25B5%25D1%2580%25D0%25BC%25D1%258F%25D0%25BA%25D0%25BE%25D0%25B2/?trackingId=YHh9F8G8TtuuGcEt13iTjA%3D%3D",
        img: "1559505004384.jpeg"
    },
    {
        title: "Analysis of the effectiveness of grocery stores on the example",
        link: "https://www.linkedin.com/pulse/analysis-effectiveness-grocery-stores-example-%25D0%25BD%25D0%25B8%25D0%25BA%25D0%25B8%25D1%2582%25D0%25B0-%25D0%25BF%25D0%25B5%25D1%2580%25D0%25BC%25D1%258F%25D0%25BA%25D0%25BE%25D0%25B2/?trackingId=YHh9F8G8TtuuGcEt13iTjA%3D%3D",
        img: "1555407549201.jpeg"
    },
    {
        title: "Detection of a felled forest based on aerial photography",
        link: "https://www.linkedin.com/pulse/detection-felled-forest-based-aerial-photography-%25D0%25BD%25D0%25B8%25D0%25BA%25D0%25B8%25D1%2582%25D0%25B0-%25D0%25BF%25D0%25B5%25D1%2580%25D0%25BC%25D1%258F%25D0%25BA%25D0%25BE%25D0%25B2/?trackingId=YHh9F8G8TtuuGcEt13iTjA%3D%3D",
        img: "1554677210458.png"
    },
    {
        title: "Руководство по созданию первого коммита в свой репозиторий на Github",
        link: "https://www.linkedin.com/pulse/%25D1%2580%25D1%2583%25D0%25BA%25D0%25BE%25D0%25B2%25D0%25BE%25D0%25B4%25D1%2581%25D1%2582%25D0%25B2%25D0%25BE-%25D0%25BF%25D0%25BE-%25D1%2581%25D0%25BE%25D0%25B7%25D0%25B4%25D0%25B0%25D0%25BD%25D0%25B8%25D1%258E-%25D0%25BF%25D0%25B5%25D1%2580%25D0%25B2%25D0%25BE%25D0%25B3%25D0%25BE-%25D0%25BA%25D0%25BE%25D0%25BC%25D0%25BC%25D0%25B8%25D1%2582%25D0%25B0-%25D0%25B2-%25D1%2581%25D0%25B2%25D0%25BE%25D0%25B9-%25D0%25BD%25D0%25B0-github-%25D0%25BF%25D0%25B5%25D1%2580%25D0%25BC%25D1%258F%25D0%25BA%25D0%25BE%25D0%25B2/?trackingId=%2F46UCX%2FpTBSTFSUUDfV1sg%3D%3D",
        img: "1552396610527.jpeg"
    }
];

export { posts };
