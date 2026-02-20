const rawnavLinks = [
    {
        'id': 'Services',
        'link': '/services',
        'dropdownType': 'cards',
        title: 'Aafnai Services',
        'description': 'Explore how Aafnai helps you in your journey to make your business grow online',
        'children': [
            {
                name: "Web Development",
                link: "/services/webdevelopment",
                description: "Build a website that sets the foundation of your online activity",
                children: [
                    { name: "Design", link: "/services/webdevelopment/design" },
                    { name: "Development", link: "/services/webdevelopment/development" },

                ]
            },
            {
                name: "Brand awareness via Social Media",
                link: "/services/socialmedia",
                description: "Grow your brand's presence, engage and attract your audience on social media platforms",
                children: [
                    { name: "SEO", link: "/services/service1/seo" },
                    {
                        name: "Paid Ads",
                        link: "/services/service1/paidads",
                        children: [
                            { name: "Google Ads", link: "/services/service1/paidads/googleads" },
                            { name: "Facebook Ads", link: "/services/service1/paidads/facebookads" },
                        ]
                    },
                    {
                        name: "Influencer Marketing",
                        link: "/services/service1/influencermarketing",
                    }
                ]
            },
            {
                name: "Active Advertisements",
                link: "/services/activeads",
                description: "Creating and managing effective ad campaigns across various platforms to reach your target audience",
                children: [
                    {
                        name: "Google Search Ads",
                        link: "/services/activeads/googleads",
                    },
                    {
                        name: "Facebook Ads",
                        link: "/services/activeads/facebookads",

                    },
                    {
                        name: "Instagram Ads",
                        link: "/services/activeads/instagramads",
                    },
                    {
                        name: "YouTube Ads",
                        link: "/services/activeads/youtubeads",
                    },
                    {
                        name: "SEO",
                        link: "/services/activeads/seo",

                    },
                    {
                        name: "Content Marketing",
                        link: "/services/activeads/contentmarketing",
                    },
                    {
                        name: "Email Marketing",
                        link: "/services/activeads/emailmarketing",
                    }
                ]
            },
            {
                name: "Google Maps Setup & Promotions",
                link: "/services/googlemaps",
                description: "Enhance your local presence by setting up and promoting your business on Google Maps",
            }

        ]
    },
    {
        'id': 'Resources',
        'link': '/resources',
        'dropdownType': 'cards',
        'children': [
            { name: "Blogs", link: "/resources/blogs", description: "Latest updates and insights from Aafnai Ads" },
            { name: "Guides", link: "/resources/guides", description: "Comprehensive guides to help you navigate digital marketing" },
            { name: "Features", link: "/resources/features", description: "Explore the features of Aafnai Ads platform" },
            { name: "Products", link: "/resources/products", description: "Discover our range of products designed for your marketing needs" },
            { name: "Support", link: "/resources/support", description: "Get help and support for using Aafnai Ads" },
            { name: "FAQ", link: "/resources/faq", description: "Frequently Asked Questions about Aafnai" },
        ]
    },
    {
        'id': 'Aafnai for',
        'link': '/aafnaifor',
        'dropdownType': 'cards',
        'children': [
            {
                name: "Businesses",
                link: "/aafnaifor/businesses",
                description: "Tailored solutions for different businesses",
                'children': [
                    { name: "Hospitality", link: "/aafnaifor/businesses/hospitality" },
                    { name: "SMEs", link: "/aafnaifor/businesses/smes" },
                    { name: "Service Businesses", link: "/aafnaifor/businesses/servicebusinesses" },
                    { name: "E-commerce", link: "/aafnaifor/businesses/ecommerce" },
                ]
            },
            {
                name: "Individuals",
                link: "/aafnaifor/individuals",
                description: "Solutions for individuals",
                'children': [
                    { name: "Digital Marketer", link: "/aafnaifor/individuals/digitalmarketers" },
                    { name: "Student", link: "/aafnaifor/individuals/student" },
                ]
            },

        ]
    },
    {
        'id': 'Company',
        'link': '/company',
        'dropdownType': 'cards',
        'children': [
            { name: "About Us", link: "/company/aboutus", description: "The story of Aafnai from the start" },
            { name: "Team", link: "/company/team", description: "Meet our team, Learn what they do" },
            { name: "Well Wishers", link: "/company/wellwishers", description: "Our well wishers, Investors and supporters" }, //supposed to include 'Investors', contributors etc.
            { name: "Careers", link: "/company/careers", description: "Join our team, maybe you will like it" },
            { name: "Platforms", link: "/company/platforms", description: "Explore the platforms our team lives in" },
            { name: "Contact Us", link: "/company/contact", description: "Get in touch with us" },
        ]
    },
    {
        id: 'Blogs',
        link: '/resources/blogs',
        'dropdownType': null,
    }

];

//sorting as per the requirement before it reaches the navbar component
//this is the order of appearance of links  in the navbar
export const navLinks =
    [
        rawnavLinks.find(link => link.id === 'Aafnai for'),
        rawnavLinks.find(link => link.id === 'Services'),
        rawnavLinks.find(link => link.id === 'Resources'),
        rawnavLinks.find(link => link.id === 'Blogs'),
        rawnavLinks.find(link => link.id === 'Company'),
    ];
