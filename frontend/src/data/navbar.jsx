const rawnavLinks = [
    {
        'id': 'Services',
        'link': '/services',
        'dropdownType': 'cards',
        'children': [
            {
                name: "Marketing",
                link: "/services/merketing",
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
                        name: "Inflluencer Marketing",
                        link: "/services/service1/influencermarketing",
                    }
                ]
            },
            {
                name: "Web Development",
                link: "/services/webdevelopment",
                children: [
                    { name: "Design", link: "/services/webdevelopment/design" },
                    { name: "Development", link: "/services/webdevelopment/development" },

                ]
            },
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
                'children': [
                    { name: "Digital Marketer", link: "/aafnaifor/individuals/digitalmarketers" },
                    { name: "Student", link: "/aafnaifor/individuals/student" },
                ]
            },
            {
                name: "Businesses",
                link: "/aafnaifor/businesses",
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
export const navLinks =
    [
        rawnavLinks.find(link => link.id === 'Aafnai for'),
        rawnavLinks.find(link => link.id === 'Services'),
        rawnavLinks.find(link => link.id === 'Resources'),
        rawnavLinks.find(link => link.id === 'Assets'),
        rawnavLinks.find(link => link.id === 'Company'),
        rawnavLinks.find(link => link.id === 'Blogs'),
    ];
