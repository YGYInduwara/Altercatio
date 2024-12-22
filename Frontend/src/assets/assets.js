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
import doc15 from './doc15.png'
import doc16 from './doc16.png'
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
        name: 'Vanguard',
        image: doc1,
        speciality: 'Ruchira Ketawalakumbura',
        degree: 'Team Leader',
        experience: 'new',
        about: 'Vanguard is a premier debate franchise committed to fostering critical thinking, persuasive communication, and collaborative strategy. The team excels in high-pressure environments, emphasizing meticulous research, innovative arguments, and impactful delivery.',
        fees: 1000,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc2',
        name: 'The Dialectics',
        image: doc2,
        speciality: 'Induwara Rajapaksha ',
        degree: 'Team Leader',
        experience: 'new',
        about: 'Team Dialectics thrives on creative arguments and innovative solutions. The team believes in harnessing intellectual synergy to craft compelling narratives, winning debates through a balance of research and eloquence',
        fees: 1000,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc3',
        name: 'United',
        image: doc3,
        speciality: 'Nilushana Jayaratne',
        degree: 'Team Leader',
        experience: 'new',
        about: 'United combines logic, passion, and precision to outshine competitors. The team specializes in powerful rebuttals and persuasive storytelling, leaving a lasting impression in every tournament they compete in.',
        fees: 1000,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc4',
        name: 'DRAGONS',
        image: doc4,
        speciality: 'Alex Johnson',
        degree: 'Team Leader',
        experience: 'new',
        about: 'DRAGONS are renowned for their exceptional speaking skills and unmatched poise. Their approach combines thorough research, impactful delivery, and persuasive logic to dominate the debate floor.',
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
        name: 'PHANTOM',
        image: doc5,
        speciality: 'Alex Johnson',
        degree: 'Team Leader',
        experience: 'new',
        about: 'PHANTOMS excels in creating balanced arguments and engaging dialogues. They focus on adapting to diverse topics with flexibility, ensuring a memorable and thought-provoking presence in every debate.',
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
        name: 'RATHGAMA ROYAL',
        image: doc6,
        speciality: 'Alex Johnson',
        degree: 'Team Leader',
        experience: 'new',
        about: 'RATHGAMA ROYAL challenge the norm with bold, innovative perspectives. Known for their fearless rebuttals and dynamic teamwork, they redefine debate by pushing intellectual boundaries.',
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
        name: 'FAUGET',
        image: doc7,
        speciality: 'Alex Johnson',
        degree: 'Team Leader',
        eexperience: 'new',
        about: 'FAUGET bring finesse and sophistication to the art of debating. Their mastery lies in crafting articulate arguments paired with an impressive stage presence that captivates audiences.',
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
        name: 'SPARTON WARRIOR',
        image: doc8,
        speciality: 'Alex Johnson',
        degree: 'Team Leader',
        experience: 'new',
        about: 'SPARTON WARRIORS pride themselves on out-of-the-box arguments and deep critical thinking. Their strategy is rooted in creativity and analytical prowess, making them formidable competitors.',
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
        name: 'FAUGET',
        image: doc9,
        speciality: 'Alex Johnson',
        degree: 'Team Leader',
        experience: 'new',
        about: 'FAUGET approach debates with sharp analysis and strategic depth. Their strength lies in breaking down complex topics into persuasive, impactful arguments that resonate with judges and audiences.',
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
        name: 'SOLDIER',
        image: doc10,
        speciality: 'Alex Johnson',
        degree: 'Team Leader',
        experience: 'new',
        about: 'SOLDIER brings an energetic and relentless spirit to every competition. They thrive on teamwork, adaptability, and high-pressure environments, always delivering a performance to remember.',
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
    {
        _id: 'doc15',
        name: 'BLACK PANTHER',
        image: doc15,
        speciality: 'Alex Johnson',
        degree: 'Team Leader',
        experience: 'new',
        about: 'BLACK PANTHER combine academic rigor and tactical brilliance to succeed. Their approach focuses on data-driven arguments, adaptability, and collaboration, making them a force to be reckoned with.',
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
        _id: 'doc16',
        name: 'KING MAKER',
        image: doc16,
        speciality: 'Alex Johnson',
        degree: 'Team Leader',
        experience: 'new',
        about: 'KING MAKER bring energy, passion, and a collaborative spirit to debates. They shine through meticulous preparation, quick thinking, and the ability to tackle any topic with confidence.',
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
]