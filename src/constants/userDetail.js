const userDetail = [
    {
        id: 1, // Unique identifier for the user
        name: 'Jodshua Edwards',
        age: 29,
        profile_completion: 45,
        photos: [
            {
                url: require('../assets/image/user/Jodshua_Edwards.jpg'),
                main: true,
            },
            {
                url: require('../assets/image/user/Jodshua_Edwards.jpg'),
                main: false,
            },
            {
                url: require('../assets/image/user/Jodshua_Edwards.jpg'),
                main: false,
            },
        ],
        about_me:
            'It would be wonderful to meet someone who appreciates the arts and enjoys exploring the vibrant culture of the city. I value open-mindedness, good communication, and a shared passion for classical music and fine arts. Also, mother of 2 cats ;)',
        details: {
            occupation: 'Business Analyst at Tech',
            gender_pronouns: {
                identity: 'Male',
                pronouns: 'he/ him/ his',
            },
            education: 'Master degree',
            location: 'NV 89104',
            height: '5\'6"',
            smoking: 'Non-smoker',
            drinking: 'Occasionally',
            pets: 'Cat lover',
            children: 'Want two',
            zodiac_sign: 'Virgo',
            religion: 'No religious affiliation',
            salary: '$75,000',
            marital_status: 'Single',
            favorite_color: 'Blue',
        },
        interests: ['Sci-fi movies', 'Coffee brewing', 'Trekking'],
        languages: ['English', 'Finnish'],
        linked_accounts: {
            instagram: null,
            facebook: null,
            twitter: null,
        },
    },
    {
        id: 2, // Unique identifier for the user
        name: 'Daniel Williams',
        age: 20,
        profile_completion: 45,
        photos: [
            {
                url: require('../assets/image/user/Daniel_Williams.jpg'),
                main: true,
            },
            {
                url: require('../assets/image/user/Daniel_Williams.jpg'),
                main: false,
            },
            {
                url: require('../assets/image/user/Daniel_Williams.jpg'),
                main: false,
            },
        ],
        about_me:
            'It would be wonderful to meet someone who appreciates the arts and enjoys exploring the vibrant culture of the city. I value open-mindedness, good communication, and a shared passion for classical music and fine arts. Also, mother of 2 cats ;)',
        details: {
            occupation: 'Tester at Tech',
            gender_pronouns: {
                identity: 'Female',
                pronouns: 'she/ her/ hers',
            },
            education: null,
            location: 'NV 89104',
            height: '5\'4"',
            smoking: 'Non-smoker',
            drinking: 'Occasionally',
            pets: 'Dog lover',
            children: 'None',
            zodiac_sign: 'Aries',
            religion: 'Christian',
            salary: '$50,000',
            marital_status: 'Single',
            favorite_color: 'Green',
        },
        interests: ['Sci-fi movies', 'Coffee brewing', 'Trekking'],
        languages: ['English', 'Finnish'],
        linked_accounts: {
            instagram: null,
            facebook: null,
            twitter: null,
        },
    },
    {
        id: 3, // Unique identifier for the user
        name: 'Andrew Smith',
        age: 31,
        profile_completion: 45,
        photos: [
            {
                url: require('../assets/image/user/Andrew_Smith.jpg'),
                main: true,
            },
            {
                url: require('../assets/image/user/Andrew_Smith.jpg'),
                main: false,
            },
            {
                url: require('../assets/image/user/Andrew_Smith.jpg'),
                main: false,
            },
        ],
        about_me:
            'It would be wonderful to meet someone who appreciates the arts and enjoys exploring the vibrant culture of the city. I value open-mindedness, good communication, and a shared passion for classical music and fine arts. Also, mother of 2 cats ;)',
        details: {
            occupation: 'Data Analyst at Tech',
            gender_pronouns: {
                identity: 'Female',
                pronouns: 'she/ her/ hers',
            },
            education: null,
            location: 'NV 89104',
            height: '5\'8"',
            smoking: 'Non-smoker',
            drinking: 'Socially',
            pets: 'Cat lover',
            children: 'None',
            zodiac_sign: 'Taurus',
            religion: 'Atheist',
            salary: '$80,000',
            marital_status: 'Married',
            favorite_color: 'Red',
        },
        interests: ['Sci-fi movies', 'Coffee brewing', 'Trekking'],
        languages: ['English', 'Finnish'],
        linked_accounts: {
            instagram: null,
            facebook: null,
            twitter: null,
        },
    },
    {
        id: 4, // Unique identifier for the user
        name: 'Benjamin Harris',
        age: 45,
        profile_completion: 45,
        photos: [
            {
                url: require('../assets/image/user/Benjamin_Harris.jpg'),
                main: true,
            },
            {
                url: require('../assets/image/user/Benjamin_Harris.jpg'),
                main: false,
            },
            {
                url: require('../assets/image/user/Benjamin_Harris.jpg'),
                main: false,
            },
        ],
        about_me:
            'It would be wonderful to meet someone who appreciates the arts and enjoys exploring the vibrant culture of the city. I value open-mindedness, good communication, and a shared passion for classical music and fine arts. Also, mother of 2 cats ;)',
        details: {
            occupation: 'Software Engineer at Tech',
            gender_pronouns: {
                identity: 'Male',
                pronouns: 'he/ him/ his',
            },
            education: 'PhD in Computer Science',
            location: 'NV 89104',
            height: '6\'0"',
            smoking: 'Non-smoker',
            drinking: 'Rarely',
            pets: 'Dog lover',
            children: 'One child',
            zodiac_sign: 'Capricorn',
            religion: 'Christian',
            salary: '$120,000',
            marital_status: 'Divorced',
            favorite_color: 'Black',
        },
        interests: ['Sci-fi movies', 'Coffee brewing', 'Trekking'],
        languages: ['English', 'Finnish'],
        linked_accounts: {
            instagram: null,
            facebook: null,
            twitter: null,
        },
    },
];

export default userDetail;
