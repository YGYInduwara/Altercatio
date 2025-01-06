import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import Alogo from './Alogo.svg'
import Dlogo from './CDL2024Logo.svg'
import abcd from './abcd.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    Alogo,
    Dlogo,
    abcd,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'Financial Support',
        image: General_physician
    },
    {
        speciality: 'Support as a Judger',
        image: Gynecologist
    },
    {
        speciality: 'Organizing Supports',
        image: Dermatologist
    },
    {
        speciality: 'Broadcasting Sponsorships',
        image: Pediatricians
    },
    {
        speciality: 'Food & Bev. Sponsorships',
        image: Neurologist
    },
    {
        speciality: 'Venues Sponsorship',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'The Noble Knights',
        image: doc1,
        speciality: 'Gaveen Dayaratna (c)',
        degree: 'Team Leader',
        experience: 'new',
        about: 'The Noble Knights is a premier debate franchise committed to fostering critical thinking, persuasive communication, and collaborative strategy. The team excels in high-pressure environments, emphasizing meticulous research, innovative arguments, and impactful delivery.',
        fees: 1000,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc2',
        name: 'United',
        image: doc2,
        speciality: 'Nilushana Jayaratne (c)',
        degree: 'Team Leader',
        experience: 'new',
        about: 'Team United thrives on creative arguments and innovative solutions. The team believes in harnessing intellectual synergy to craft compelling narratives, winning debates through a balance of research and eloquence',
        fees: 1000,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc3',
        name: 'The Zens',
        image: doc3,
        speciality: 'Vishwa Udan (c)',
        degree: 'Team Leader',
        experience: 'new',
        about: 'The Zens combines logic, passion, and precision to outshine competitors. The team specializes in powerful rebuttals and persuasive storytelling, leaving a lasting impression in every tournament they compete in.',
        fees: 1000,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc4',
        name: 'Opinionators',
        image: doc4,
        speciality: 'Avishka Perera (c)',
        degree: 'Team Leader',
        experience: 'new',
        about: 'Opinionators are renowned for their exceptional speaking skills and unmatched poise. Their approach combines thorough research, impactful delivery, and persuasive logic to dominate the debate floor.',
        fees: 1000,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        members: [
            {
                name: 'John Doe',
                image: './vanguard_member1.png',
                role: 'Research Analyst'
            },
            {
                name: 'Jane Smith',
                image: './vanguard_member2.png',
                role: 'Speaker'
            },
            {
                name: 'Alice Brown',
                image: './vanguard_member3.png',
                role: 'Strategist'
            },
            {
                name: 'Bob White',
                image: './vanguard_member4.png',
                role: 'Rebuttal Specialist'
            },
            {
                name: 'Mary Green',
                image: './vanguard_member5.png',
                role: 'Content Creator'
            },
            {
                name: 'Peter Black',
                image: './vanguard_member6.png',
                role: 'Support Analyst'
            }
        ]
    },
    {
        _id: 'doc5',
        name: 'සිරිමත්',
        image: doc5,
        speciality: 'Shahan Athma (c)',
        degree: 'Team Leader',
        experience: 'new',
        about: 'සිරිමත් excels in creating balanced arguments and engaging dialogues. They focus on adapting to diverse topics with flexibility, ensuring a memorable and thought-provoking presence in every debate.',
        fees: 1000,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        members: [
            {
                name: 'John Doe',
                image: './vanguard_member1.png',
                role: 'Research Analyst'
            },
            {
                name: 'Jane Smith',
                image: './vanguard_member2.png',
                role: 'Speaker'
            },
            {
                name: 'Alice Brown',
                image: './vanguard_member3.png',
                role: 'Strategist'
            },
            {
                name: 'Bob White',
                image: './vanguard_member4.png',
                role: 'Rebuttal Specialist'
            },
            {
                name: 'Mary Green',
                image: './vanguard_member5.png',
                role: 'Content Creator'
            },
            {
                name: 'Peter Black',
                image: './vanguard_member6.png',
                role: 'Support Analyst'
            }
        ]
    },
    {
        _id: 'doc6',
        name: 'The Monarchy',
        image: doc6,
        speciality: 'Pasindu Ambawelage (c)',
        degree: 'Team Leader',
        experience: 'new',
        about: 'The Monarchy challenge the norm with bold, innovative perspectives. Known for their fearless rebuttals and dynamic teamwork, they redefine debate by pushing intellectual boundaries.',
        fees: 1000,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        members: [
            {
                name: 'John Doe',
                image: './vanguard_member1.png',
                role: 'Research Analyst'
            },
            {
                name: 'Jane Smith',
                image: './vanguard_member2.png',
                role: 'Speaker'
            },
            {
                name: 'Alice Brown',
                image: './vanguard_member3.png',
                role: 'Strategist'
            },
            {
                name: 'Bob White',
                image: './vanguard_member4.png',
                role: 'Rebuttal Specialist'
            },
            {
                name: 'Mary Green',
                image: './vanguard_member5.png',
                role: 'Content Creator'
            },
            {
                name: 'Peter Black',
                image: './vanguard_member6.png',
                role: 'Support Analyst'
            }
        ]
    },
    {
        _id: 'doc7',
        name: 'බොට්ටු',
        image: doc7,
        speciality: 'Gayan Perera (c)',
        degree: 'Team Leader',
        eexperience: 'new',
        about: 'බොට්ටු bring finesse and sophistication to the art of debating. Their mastery lies in crafting articulate arguments paired with an impressive stage presence that captivates audiences.',
        fees: 1000,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        members: [
            {
                name: 'John Doe',
                image: './vanguard_member1.png',
                role: 'Research Analyst'
            },
            {
                name: 'Jane Smith',
                image: './vanguard_member2.png',
                role: 'Speaker'
            },
            {
                name: 'Alice Brown',
                image: './vanguard_member3.png',
                role: 'Strategist'
            },
            {
                name: 'Bob White',
                image: './vanguard_member4.png',
                role: 'Rebuttal Specialist'
            },
            {
                name: 'Mary Green',
                image: './vanguard_member5.png',
                role: 'Content Creator'
            },
            {
                name: 'Peter Black',
                image: './vanguard_member6.png',
                role: 'Support Analyst'
            }
        ]
    },
    {
        _id: 'doc8',
        name: 'චන්ද්‍රමණ්ඩලය',
        image: doc8,
        speciality: 'Tharindu Akalanka (c)',
        degree: 'Team Leader',
        experience: 'new',
        about: 'චන්ද්‍රමණ්ඩලය pride themselves on out-of-the-box arguments and deep critical thinking. Their strategy is rooted in creativity and analytical prowess, making them formidable competitors.',
        fees: 1000,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        members: [
            {
                name: 'John Doe',
                image: './vanguard_member1.png',
                role: 'Research Analyst'
            },
            {
                name: 'Jane Smith',
                image: './vanguard_member2.png',
                role: 'Speaker'
            },
            {
                name: 'Alice Brown',
                image: './vanguard_member3.png',
                role: 'Strategist'
            },
            {
                name: 'Bob White',
                image: './vanguard_member4.png',
                role: 'Rebuttal Specialist'
            },
            {
                name: 'Mary Green',
                image: './vanguard_member5.png',
                role: 'Content Creator'
            },
            {
                name: 'Peter Black',
                image: './vanguard_member6.png',
                role: 'Support Analyst'
            }
        ]
    },
    {
        _id: 'doc9',
        name: 'Silver Flames',
        image: doc9,
        speciality: 'Menura Malshan (c)',
        degree: 'Team Leader',
        experience: 'new',
        about: 'Silver Flames approach debates with sharp analysis and strategic depth. Their strength lies in breaking down complex topics into persuasive, impactful arguments that resonate with judges and audiences.',
        fees: 1000,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        members: [
            {
                name: 'John Doe',
                image: './vanguard_member1.png',
                role: 'Research Analyst'
            },
            {
                name: 'Jane Smith',
                image: './vanguard_member2.png',
                role: 'Speaker'
            },
            {
                name: 'Alice Brown',
                image: './vanguard_member3.png',
                role: 'Strategist'
            },
            {
                name: 'Bob White',
                image: './vanguard_member4.png',
                role: 'Rebuttal Specialist'
            },
            {
                name: 'Mary Green',
                image: './vanguard_member5.png',
                role: 'Content Creator'
            },
            {
                name: 'Peter Black',
                image: './vanguard_member6.png',
                role: 'Support Analyst'
            }
        ]
    },
    {
        _id: 'doc10',
        name: 'Voice of Galle',
        image: doc10,
        speciality: 'Navoda Nirmal (c)',
        degree: 'Team Leader',
        experience: 'new',
        about: 'Voice of Galle brings an energetic and relentless spirit to every competition. They thrive on teamwork, adaptability, and high-pressure environments, always delivering a performance to remember.',
        fees: 1000,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        members: [
            {
                name: 'John Doe',
                image: './vanguard_member1.png',
                role: 'Research Analyst'
            },
            {
                name: 'Jane Smith',
                image: './vanguard_member2.png',
                role: 'Speaker'
            },
            {
                name: 'Alice Brown',
                image: './vanguard_member3.png',
                role: 'Strategist'
            },
            {
                name: 'Bob White',
                image: './vanguard_member4.png',
                role: 'Rebuttal Specialist'
            },
            {
                name: 'Mary Green',
                image: './vanguard_member5.png',
                role: 'Content Creator'
            },
            {
                name: 'Peter Black',
                image: './vanguard_member6.png',
                role: 'Support Analyst'
            }
        ]
    },
    {
        _id: 'doc11',
        name: 'WOLVES',
        image: doc11,
        speciality: 'Alex Johnson',
        degree: 'Team Leader',
        experience: 'new',
        about: 'WOLVES meticulously construct well-founded cases, blending logical precision with persuasive delivery. Their debates are characterized by clarity, depth, and unparalleled strategy.',
        fees: 1000,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        members: [
            {
                name: 'John Doe',
                image: './vanguard_member1.png',
                role: 'Research Analyst'
            },
            {
                name: 'Jane Smith',
                image: './vanguard_member2.png',
                role: 'Speaker'
            },
            {
                name: 'Alice Brown',
                image: './vanguard_member3.png',
                role: 'Strategist'
            },
            {
                name: 'Bob White',
                image: './vanguard_member4.png',
                role: 'Rebuttal Specialist'
            },
            {
                name: 'Mary Green',
                image: './vanguard_member5.png',
                role: 'Content Creator'
            },
            {
                name: 'Peter Black',
                image: './vanguard_member6.png',
                role: 'Support Analyst'
            }
        ]
    },
    {
        _id: 'doc12',
        name: 'ROYAL EAGLE',
        image: doc12,
        speciality: 'Alex Johnson',
        degree: 'Team Leader',
        experience: 'new',
        about: 'ROYAL EAGLES are trailblazers in crafting compelling arguments and presenting innovative ideas. Their unmatched confidence and eloquence set them apart as leaders in the debate world.',
        fees: 1000,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        members: [
            {
                name: 'John Doe',
                image: './vanguard_member1.png',
                role: 'Research Analyst'
            },
            {
                name: 'Jane Smith',
                image: './vanguard_member2.png',
                role: 'Speaker'
            },
            {
                name: 'Alice Brown',
                image: './vanguard_member3.png',
                role: 'Strategist'
            },
            {
                name: 'Bob White',
                image: './vanguard_member4.png',
                role: 'Rebuttal Specialist'
            },
            {
                name: 'Mary Green',
                image: './vanguard_member5.png',
                role: 'Content Creator'
            },
            {
                name: 'Peter Black',
                image: './vanguard_member6.png',
                role: 'Support Analyst'
            }
        ]
    },
    {
        _id: 'doc13',
        name: 'PHOENIX',
        image: doc13,
        speciality: 'Alex Johnson',
        degree: 'Team Leader',
        experience: 'new',
        about: 'PHOENIX master the art of storytelling and impactful rhetoric. They inspire audiences with thought-provoking arguments and a passion for intellectual discourse, ensuring their voice is unforgettable.',
        fees: 1000,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        members: [
            {
                name: 'John Doe',
                image: './vanguard_member1.png',
                role: 'Research Analyst'
            },
            {
                name: 'Jane Smith',
                image: './vanguard_member2.png',
                role: 'Speaker'
            },
            {
                name: 'Alice Brown',
                image: './vanguard_member3.png',
                role: 'Strategist'
            },
            {
                name: 'Bob White',
                image: './vanguard_member4.png',
                role: 'Rebuttal Specialist'
            },
            {
                name: 'Mary Green',
                image: './vanguard_member5.png',
                role: 'Content Creator'
            },
            {
                name: 'Peter Black',
                image: './vanguard_member6.png',
                role: 'Support Analyst'
            }
        ]
    },
    {
        _id: 'doc14',
        name: 'THE MAFIA',
        image: doc14,
        speciality: 'Alex Johnson',
        degree: 'Team Leader',
        experience: 'new',
        about: 'THE MAFIA excel in intellectual dominance through deep research and critical insights. Their compelling arguments and confident rebuttals consistently earn them the edge in debates.',
        fees: 1000,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        members: [
            {
                name: 'John Doe',
                image: './vanguard_member1.png',
                role: 'Research Analyst'
            },
            {
                name: 'Jane Smith',
                image: './vanguard_member2.png',
                role: 'Speaker'
            },
            {
                name: 'Alice Brown',
                image: './vanguard_member3.png',
                role: 'Strategist'
            },
            {
                name: 'Bob White',
                image: './vanguard_member4.png',
                role: 'Rebuttal Specialist'
            },
            {
                name: 'Mary Green',
                image: './vanguard_member5.png',
                role: 'Content Creator'
            },
            {
                name: 'Peter Black',
                image: './vanguard_member6.png',
                role: 'Support Analyst'
            }
        ]
    },
]