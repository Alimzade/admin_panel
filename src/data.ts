export const menu = [
    {
        id: 1,
        title: "main",
        listItems: [
            {
                id: 1,
                title: "Homepage",
                url: "/",
                icon: "home.svg",
            },
            {
                id: 2,
                title: "Profile",
                url: "/users/1",
                icon: "user.svg",
            },
        ],
    },
    {
        id: 2,
        title: "lists",
        listItems: [
            {
                id: 1,
                title: "Users",
                url: "/users",
                icon: "user.svg",
            },
            {
                id: 2,
                title: "Products",
                url: "/products",
                icon: "product.svg",
            },
            {
                id: 3,
                title: "Orders",
                url: "/orders",
                icon: "order.svg",
            },
            {
                id: 4,
                title: "Posts",
                url: "/posts",
                icon: "post2.svg",
            },
        ],
    },
    {
        id: 3,
        title: "general",
        listItems: [
            {
                id: 1,
                title: "Elements",
                url: "/",
                icon: "element.svg",
            },
            {
                id: 2,
                title: "notes",
                url: "/",
                icon: "note.svg",
            },
        ],
    },
    {
        id: 4,
        title: "lists",
        listItems: [
            {
                id: 1,
                title: "Settings",
                url: "/",
                icon: "setting.svg",
            },
            {
                id: 2,
                title: "Backups",
                url: "/",
                icon: "backup.svg",
            },
        ],
    },
    {
        id: 5,
        title: "analytics",
        listItems: [
            {
                id: 1,
                title: "Charts",
                url: "/",
                icon: "chart.svg",
            },
            {
                id: 2,
                title: "Logs",
                url: "/",
                icon: "log.svg",
            },
        ],
    },
];

export const topDealUsers = [
    {
        id: 1,
        img: "https://randomuser.me/api/portraits/men/75.jpg",
        username: "Tony Montana",
        email: "tony.montana@example.com",
        amount: "7100",
    },
    {
        id: 2,
        img: "https://randomuser.me/api/portraits/women/75.jpg",
        username: "Jane Doe",
        email: "jane.doe@example.com",
        amount: "6280",
    },
    {
        id: 3,
        img: "https://randomuser.me/api/portraits/men/76.jpg",
        username: "Peter Parker",
        email: "peter.parker@example.com",
        amount: "5300",
    },
    {
        id: 4,
        img: "https://randomuser.me/api/portraits/women/76.jpg",
        username: "Mary Jane",
        email: "mary.jane@example.com",
        amount: "4600",
    },
    {
        id: 5,
        img: "https://randomuser.me/api/portraits/men/77.jpg",
        username: "Bruce Wayne",
        email: "bruce.wayne@example.com",
        amount: "4510",
    },
    {
        id: 6,
        img: "https://randomuser.me/api/portraits/women/77.jpg",
        username: "Selina Kyle",
        email: "selina.kyle@example.com",
        amount: "3602",
    },
    {
        id: 7,
        img: "https://randomuser.me/api/portraits/men/78.jpg",
        username: "Clark Kent",
        email: "clark.kent@example.com",
        amount: "2700",
    },

];

export const chartBoxUser = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Total Users",
    number: "11.238",
    url: "/users",
    dataKey: "users",
    percentage: 45,
    chartData: [
        { name: "Sun", users: 400 },
        { name: "Mon", users: 600 },
        { name: "Tue", users: 500 },
        { name: "Wed", users: 700 },
        { name: "Thu", users: 400 },
        { name: "Fri", users: 500 },
        { name: "Sat", users: 450 },
    ],

};

export const chartBoxProduct = {
    color: "skyblue",
    icon: "/productIcon.svg",
    title: "Total Products",
    number: "238",
    url: "/products",
    dataKey: "products",
    percentage: 21,
    chartData: [
        { name: "Sun", products: 400 },
        { name: "Mon", products: 300 },
        { name: "Tue", products: 250 },
        { name: "Wed", products: 100 },
        { name: "Thu", products: 800 },
        { name: "Fri", products: 500 },
        { name: "Sat", products: 900 },
    ],

};

export const chartBoxRevenue = {
    color: "teal",
    icon: "/revenueIcon.svg",
    title: "Total Revenue",
    number: "$56.432",
    url: "/",
    dataKey: "revenue",
    percentage: -12,
    chartData: [
        { name: "Sun", revenue: 400 },
        { name: "Mon", revenue: 300 },
        { name: "Tue", revenue: 280 },
        { name: "Wed", revenue: 300 },
        { name: "Thu", revenue: 400 },
        { name: "Fri", revenue: 450 },
        { name: "Sat", revenue: 600 },
    ],

};

export const chartBoxConversion = {
    color: "gold",
    icon: "/conversionIcon.svg",
    title: "Total Ratio",
    number: "2.6",
    url: "/",
    dataKey: "ration",
    percentage: 12,
    chartData: [
        { name: "Sun", ration: 400 },
        { name: "Mon", ration: 310 },
        { name: "Tue", ration: 370 },
        { name: "Wed", ration: 410 },
        { name: "Thu", ration: 425 },
        { name: "Fri", ration: 350 },
        { name: "Sat", ration: 370 },
    ],

};

export const barChartBoxRevenue = {
    title: "Profit Earned",
    color: "#8884d8",
    dataKey: "profit",
    chartData: [
        {
            name: "Sun",
            profit: "1000",
        },
        {
            name: "Mon",
            profit: "1400",
        },
        {
            name: "Tue",
            profit: "1800",
        },
        {
            name: "Wed",
            profit: "2200",
        },
        {
            name: "Thu",
            profit: "2000",
        },
        {
            name: "Fri",
            profit: "3500",
        },
        {
            name: "Sat",
            profit: "4000",
        },
    ],
};

export const barChartBoxVisit = {
    title: "Total Visit",
    color: "#FF8042",
    dataKey: "visit",
    chartData: [
        {
            name: "Sun",
            visit: "2200",
        },
        {
            name: "Mon",
            visit: "3000",
        },
        {
            name: "Tue",
            visit: "2700",
        },
        {
            name: "Wed",
            visit: "2200",
        },
        {
            name: "Thu",
            visit: "2000",
        },
        {
            name: "Fri",
            visit: "3200",
        },
        {
            name: "Sat",
            visit: "1000",
        },
    ],
};

export const userRows = [
    {
        id: 1,
        img: "https://randomuser.me/api/portraits/men/1.jpg",
        lastName: "Griffin",
        firstName: "Eric",
        email: "ubiir@gmail.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true,
    },
    {
        id: 2,
        img: "https://randomuser.me/api/portraits/men/2.jpg",
        lastName: "Smith",
        firstName: "John",
        email: "john@example.com",
        phone: "987 654 321",
        createdAt: "02.02.2023",
        verified: true,
    },
    {
        id: 3,
        img: "https://randomuser.me/api/portraits/women/3.jpg",
        lastName: "Johnson",
        firstName: "Alice",
        email: "alice@example.com",
        phone: "555 123 456",
        createdAt: "03.02.2023",
        verified: false,
    },
    {
        id: 4,
        img: "https://randomuser.me/api/portraits/women/4.jpg",
        lastName: "Williams",
        firstName: "Emma",
        email: "emma@example.com",
        phone: "444 789 123",
        createdAt: "04.02.2023",
        verified: true,
    },
    {
        id: 5,
        img: "https://randomuser.me/api/portraits/men/5.jpg",
        lastName: "Brown",
        firstName: "Michael",
        email: "michael@example.com",
        phone: "111 222 333",
        createdAt: "05.02.2023",
        verified: false,
    },
    {
        id: 6,
        img: "https://randomuser.me/api/portraits/women/6.jpg",
        lastName: "Davis",
        firstName: "Olivia",
        email: "olivia@example.com",
        phone: "666 777 888",
        createdAt: "06.02.2023",
        verified: true,
    },
    {
        id: 7,
        img: "https://randomuser.me/api/portraits/men/7.jpg",
        lastName: "Miller",
        firstName: "Sophia",
        email: "sophia@example.com",
        phone: "777 888 999",
        createdAt: "07.02.2023",
        verified: true,
    },
    {
        id: 8,
        img: "https://randomuser.me/api/portraits/women/8.jpg",
        lastName: "Wilson",
        firstName: "James",
        email: "james@example.com",
        phone: "222 333 444",
        createdAt: "08.02.2023",
        verified: false,
    },
    {
        id: 9,
        img: "https://randomuser.me/api/portraits/men/9.jpg",
        lastName: "Taylor",
        firstName: "Ava",
        email: "ava@example.com",
        phone: "999 666 333",
        createdAt: "09.02.2023",
        verified: true,
    },
    {
        id: 10,
        img: "https://randomuser.me/api/portraits/women/10.jpg",
        lastName: "Anderson",
        firstName: "William",
        email: "william@example.com",
        phone: "555 555 555",
        createdAt: "10.02.2023",
        verified: true,
    },
    {
        id: 11,
        img: "https://randomuser.me/api/portraits/men/11.jpg",
        lastName: "Moore",
        firstName: "Emily",
        email: "emily@example.com",
        phone: "777 111 555",
        createdAt: "11.02.2023",
        verified: false,
    },
    {
        id: 12,
        img: "https://randomuser.me/api/portraits/men/12.jpg",
        lastName: "Jackson",
        firstName: "Ethan",
        email: "ethan@example.com",
        phone: "333 222 111",
        createdAt: "12.02.2023",
        verified: false,
    },
    {
        id: 13,
        img: "https://randomuser.me/api/portraits/women/13.jpg",
        lastName: "White",
        firstName: "Charlotte",
        email: "charlotte@example.com",
        phone: "111 999 777",
        createdAt: "13.02.2023",
        verified: true,
    },
    {
        id: 14,
        img: "https://randomuser.me/api/portraits/men/14.jpg",
        lastName: "Harris",
        firstName: "Daniel",
        email: "daniel@example.com",
        phone: "777 333 999",
        createdAt: "14.02.2023",
        verified: false,
    },
    {
        id: 15,
        img: "https://randomuser.me/api/portraits/men/15.jpg",
        lastName: "Brown",
        firstName: "David",
        email: "david@example.com",
        phone: "789 123 456",
        createdAt: "15.02.2023",
        verified: true,
    },
];


export const products = [
    {
        id: 1,
        img: "",
        brand: "TOGG",
        model: "T10X",
        version: "V1 RWD",
        power: 218,
        battery: 52.4,
        speed: 185,
        acceleration: 7.4,
    },
    {
        id: 2,
        img: "",
        brand: "TOGG",
        model: "T10X",
        version: "V2 RWD",
        power: 218,
        battery: 52.4,
        speed: 185,
        acceleration: 7.4,
    },
    {
        id: 3,
        img: "",
        brand: "XEV",
        model: "YOYO",
        version: "iEV7s",
        power: 20,
        battery: 10.3,
        speed: 90,
        acceleration: null,
    },
    {
        id: 4,
        img: "",
        brand: "TOGG",
        model: "T10X",
        version: "V2 RWD (UZUN MENZİL)",
        power: 218,
        battery: 88.5,
        speed: 185,
        acceleration: 7.4,
    },
    {
        id: 5,
        img: "",
        brand: "Volkswagen",
        model: "ID.3",
        version: "Pro",
        power: 204,
        battery: 62,
        speed: 160,
        acceleration: 7.3,
    },
    {
        id: 6,
        img: "",
        brand: "Volkswagen",
        model: "ID.3",
        version: "Pro S - 4 Seats",
        power: 204,
        battery: 82,
        speed: 160,
        acceleration: 7.9,
    },
    {
        id: 7,
        img: "",
        brand: "Kia",
        model: "EV9",
        version: "99.8 kWh RWD",
        power: 204,
        battery: 105,
        speed: 180,
        acceleration: 9.4,
    },
    {
        id: 8,
        img: "",
        brand: "Skywell",
        model: "ET5",
        version: "Long Range Exclusive",
        power: 204,
        battery: 85.96,
        speed: 150,
        acceleration: 9.6,
    },
    {
        id: 9,
        img: "",
        brand: "Skywell",
        model: "ET5",
        version: "Premium Plus",
        power: 204,
        battery: 71.98,
        speed: 150,
        acceleration: 9.6,
    },
    {
        id: 10,
        img: "",
        brand: "Skywell",
        model: "ET5",
        version: "Premium Line",
        power: 204,
        battery: 71.98,
        speed: 150,
        acceleration: 9.6,
    },
    {
        id: 11,
        img: "",
        brand: "Skywell",
        model: "ET5",
        version: "Long Range Legend",
        power: 204,
        battery: 85.96,
        speed: 150,
        acceleration: 9.6,
    },
    {
        id: 12,
        img: "",
        brand: "Renault",
        model: "Twizy",
        version: "Life",
        power: 17,
        battery: 6,
        speed: 80,
        acceleration: null,
    },
    {
        id: 13,
        img: "",
        brand: "XPENG",
        model: "G9",
        version: "AWD Long Range",
        power: 551,
        battery: 98,
        speed: 200,
        acceleration: 3.9,
    },
    {
        id: 14,
        img: "",
        brand: "GOUPIL",
        model: "G5 benne",
        version: null,
        power: 21,
        battery: 8,
        speed: 50,
        acceleration: null,
    },
    {
        id: 15,
        img: "",
        brand: "Volkswagen",
        model: "ID.4",
        version: "GTX",
        power: 299,
        battery: 82,
        speed: 180,
        acceleration: 6.3,
    },
];


export const singleUser = {
    id: 1,
    title: "Eric Griffin",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    info: {
        username: "Eric92",
        fullname: "Eric Griffin",
        email: "ubiir@gmail.com",
        phone: "123 456 789",
        status: "verified",
    },
    chart: {
        dataKeys: [
            { name: "purchases", color: "#82ca9d" },
            { name: "special", color: "#8884d8" },

        ],
        data: [
            {
                name: "Sun",
                purchases: 4000,
                special: 2400,
            },
            {
                name: "Mon",
                purchases: 4200,
                special: 3300,
            },
            {
                name: "Tue",
                purchases: 3800,
                special: 3700,
            },
            {
                name: "Wed",
                purchases: 3300,
                special: 3200,
            },
            {
                name: "Thu",
                purchases: 4300,
                special: 3000,
            },
            {
                name: "Fri",
                purchases: 3700,
                special: 3000,
            },
            {
                name: "Sat",
                purchases: 3100,
                special: 3500,
            },
            {
                name: "Sun",
                purchases: 3900,
                special: 3200,
            },
            {
                name: "Mon",
                purchases: 4100,
                special: 3100,
            },
            {
                name: "Tue",
                purchases: 3750,
                special: 2250,
            },
            {
                name: "Wed",
                purchases: 4050,
                special: 2800,
            },
            {
                name: "Thu",
                purchases: 4250,
                special: 2600,
            },
            {
                name: "Fri",
                purchases: 4350,
                special: 2650,
            },
            {
                name: "Sat",
                purchases: 4150,
                special: 2500,
            },
        ]
    },

    activities: [
        {
            text: "Automated charging session initiated: 10 kW/h for 3 hours, cost: 450 TL",
            time: "10 minutes ago"
        },
        {
            text: "Efficient charging process: 8 kW/h for 4 hours, expenses: 320 TL",
            time: "1 hour ago"
        },
        {
            text: "Optimal energy replenishment: 12 kW/h for 2 hours, 500 TL well spent!",
            time: "3 hours ago"
        },
        {
            text: "High-speed boost: 15 kW/h for 1.5 hours, 337.5 TL, worth it!",
            time: "6 hours ago"
        },
        {
            text: "Extended charging session: 9 kW/h for 6 hours, 540 TL",
            time: "10 hours ago"
        },
        {
            text: "Swift energy top-up: 11 kW/h for 1.5 hours, 247.5 TL, can't beat that!",
            time: "1 day ago"
        },
        {
            text: "Steady replenishment process: 7 kW/h for 8 hours, cost: 560 TL, saved money!",
            time: "2 days ago"
        }
    ],
};


export const singleProduct = {
    id: 1,
    title: "TOGG",
    img: "https://image5.sahibinden.com/staticContent/vehicleStockImagesV2/0001/c00f00/x_1600_900_11600000001-cb9dcd33e7cd80b89a8205b158b1abe4.jpg",
    info: {
        Model: "T10X",
        Version: "V1 RWD",
        Power: "218 hp",
        Battery: "52.4 kW",
        Speed: "185 km/h",
        Acceleration: "7.4 sec",
        Price: "1.207.000 TL",
    },
};
