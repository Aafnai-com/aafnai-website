const rawnavLinks = [
    {
        'id': 'Services',
        'link': '/services',
        'dropdownType': 'cards',
        title : 'Aafnai Services',
        'description': 'Explore our wide range of services designed to boost your online presence and drive business growth.',
        'children': [
            {
                name: "Web Development",
                link: "/services/webdevelopment",
                description: "Build a website that sets the foundation of your online activity.",
                children: [
                    { name: "Design", link: "/services/webdevelopment/design" },
                    { name: "Development", link: "/services/webdevelopment/development" },

                ]
            },
            {
                name: "Brand awareness via Social Media",
                link: "/services/socialmedia",
                description: "Grow your brand's presence, engage and attract your audience on social media platforms.",
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
                description: "Creating and managing effective ad campaigns across various platforms to reach your target audience.",
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
                name: "Customer Management",
                link: "/services/customermanagement",
                description: "Effectively manage all your leads in one place and convert them into loyal customers.",
            }

        ]
    },
    {
        'id': 'Resources',
        'link': '/resources',
        'dropdownType': 'cards',
        'children': [
            { name: "Blog", link: "/blog" },
            { name: "Guides", link: "/guides" },
            { name: "Features", link: "/features" },
            { name: "Products", link: "/products" },
            { name: "Support", link: "/support" },
        ]
    },
    {
        'id': 'Aafnai for',
        'link': '/aafnaifor',
        'dropdownType': 'cards',
        'children': [
            {
                name: "Individuals",
                link: "/aafnaifor/individuals",
                description: "Personalized solutions for individuals",
                'children': [
                    { name: "Digital Marketer", link: "/aafnaifor/individuals/digitalmarketers" },
                    { name: "Student", link: "/aafnaifor/individuals/student" },
                ]
            },
            {
                name: "Businesses",
                link: "/aafnaifor/businesses",
                description: "Tailored services for businesses",
                'children': [
                    { name: "Small Businesses", link: "/aafnaifor/businesses/smallbusinesses" },
                    { name: "Enterprises", link: "/aafnaifor/businesses/enterprises" },
                ]
            },
        ]
    },
    {
        'id': 'Company',
        'link': '/company',
        'dropdownType': 'cards',
        'children': [
            { name: "About Us", link: "/aboutus" },
            { name: "Team", link: "/team" },
            { name: "Partners", link: "/partners" },
            { name: "Well Wishers", link: "/wellwishers" }, //supposed to include 'Investors', contributors etc.
            { name: "Careers", link: "/careers" },
            { name: "Platforms", link: "/platforms" },
        ]
    },
    {
        'id': 'Assets',
        'link': '/assets',
        'dropdownType': 'cards',
        'children': [
            { name: "Influncers", link: "/assets/influencers" },
        ]
    },
    {
        'id': 'Blogs',
        'link': '/blogs',
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
        rawnavLinks.find(link => link.id === 'Assets'),
        rawnavLinks.find(link => link.id === 'Company'),
        rawnavLinks.find(link => link.id === 'Blogs'),
    ];
