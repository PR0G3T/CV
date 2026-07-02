// Centralized CV data to keep the page markup minimal and DRY
// Replace placeholder values with your real information
export interface CvSocialLink {
	type: 'linkedin' | 'github' | 'instagram' | 'facebook' | 'orcid';
	href: string;
	label: string;
}

export interface CvExperienceItem {
	company: string;
	role: string;
	period: string;
	location?: string;
	items: string[];
	link?: string;
}

export interface CvProjectItem {
	name: string;
	description: string;
	link?: string;
}

export interface CvEducationItem {
	school: string;
	degree: string;
	period: string;
	details?: string;
	link?: string;
	credential?: string;
	credentialLabel?: string;
	credentials?: Array<{
		label: string;
		href: string;
	}>;
}

export interface CvCertificationItem {
	name: string;
	issuer: string;
	year?: string;
	link?: string;
	credentialId?: string;
	subCertifications?: Array<{
		name: string;
		link: string;
	}>;
}

export interface CvLanguageItem {
	language: string;
	proficiency: string;
}

export interface CvData {
	name: string;
	title: string;
	summary: string;
	location?: string;
	socials: CvSocialLink[];
	skills: string[];
	experience: CvExperienceItem[];
	projects?: CvProjectItem[];
	education?: CvEducationItem[];
	certifications?: CvCertificationItem[];
	languages?: CvLanguageItem[];
}

const cv: CvData = {
	name: 'Killian OTT',
	title: 'PR0G3T',
	summary:
		'I stand in awe of the sheer scale of human potential. A privileged witness to our unfolding evolution, I seek not merely to watch, but to act, to leave a legacy that outlasts my time, forever inscribed in the collective consciousness.',
	location: '',
	socials: [
		{ type: 'linkedin', href: 'https://www.linkedin.com/in/killian-ott/', label: 'LinkedIn' },
		{ type: 'github', href: 'https://github.com/PR0G3T', label: 'GitHub' },
		{ type: 'instagram', href: 'https://www.instagram.com/pr0g3t/', label: 'Instagram' },
		{ type: 'facebook', href: 'https://www.facebook.com/PR0G3T/', label: 'Facebook' },
		{ type: 'orcid', href: 'https://orcid.org/0009-0001-2059-565X', label: 'ORCID' }
	],
	skills: [
		'Artificial Intelligence (AI)',
		'Computer Science',
		'Cybersecurity',
		'Web Development',
		'Desktop Application Development'
	],
	experience: [
		{
			company: "Sup de Vinci - école d'informatique",
			role: 'Instructor (Freelance)',
			period: 'Dec 2025 - Present',
			location: 'Bordeaux, Nouvelle-Aquitaine, France',
			items: ['Teaching Web Development and Desktop Application Development.']
		},
		{
			company: 'Team Cardinalis',
			role: 'Chief Executive Officer',
			period: 'Jul 2020 - Present',
			items: [
				'Established in 2020, Team Cardinalis stands as an international organisation where eSports converge to inspire and unite.'
			]
		},
		{
			company: 'Körber Supply Chain Software',
			role: 'Developer (Internship)',
			period: 'May 2024 - Jul 2024',
			location: 'Lyon, Auvergne-Rhône-Alpes, France',
			items: [
				'German company specializing in automation and logistics technologies, founded in 1946.',
				'Provides innovative solutions for supply chain management and digital transformation.'
			]
		},
		{
			company: 'Freelance',
			role: 'Ethical Hacker | Bounty Hunter',
			period: 'May 2019 - Jun 2021',
			location: 'France - Remote',
			items: [
				'Individuals with solid computer-science expertise and a strong spirit of curiosity can excel as bounty hunters.',
				'The essential prerequisite for sustained success is a commitment to continuous learning.'
			]
		},
		{
			company: 'StarSpace Studio',
			role: 'Chief Executive Officer',
			period: 'Sep 2017 - May 2019',
			location: 'France - Remote',
			items: [
				'Autonomous game development studio employing Unreal Engine 4.22 for game development endeavors.'
			]
		}
	],
	projects: [],
	education: [
		{
			school: 'University of Helsinki',
			degree: 'Artificial Intelligence, Computer Science & Cybersecurity',
			period: 'Apr 2025',
			link: 'https://www.helsinki.fi/en',
			credential: '/credentials/university-of-helsinki/Opiskelutodistus.pdf',
			credentialLabel: 'Opiskelutodistus',
			details:
				"The open university provides University of Helsinki's courses for everyone interested in them, offering the opportunity to strengthen your skills"
		},
		{
			school: 'MITx Courses',
			degree: 'Mathematics',
			period: 'Apr 2025',
			link: 'https://mitxonline.mit.edu/',
			credentials: [
				{
					label: 'Linear Algebra and NxN Systems',
					href: 'https://mitxonline.mit.edu/certificate/da79f264-b4a4-4c64-997c-5374659f540d/'
				},
				{
					label: 'Multivariable Calculus 3: Theorems and Applications',
					href: 'https://mitxonline.mit.edu/certificate/84ec49d0-889b-42f6-abc6-3b5bffd44a1b/'
				}
			],
			details:
				'MITx offers various types of courses and programs to learn from MIT faculty and instructors. You can access free open-licensed educational materials, online professional credentials, blended learning experiences, and original content on emerging technologies.'
		},
		{
			school: 'Lycée Polyvalent Louis Armand',
			degree: 'Baccalaureate, Science and Technology of Industry and Sustainable Development',
			period: 'Sep 2021 - Jul 2023',
			details:
				'Grade: Fairly Good. Secondary school in Villefranche-sur-Saône, part of the Lyon education authority.'
		}
	],
	certifications: [
		{
			name: 'NVIDIA Deep Learning Institute Certifications',
			issuer: 'NVIDIA Deep Learning Institute',
			year: 'Mar 2025',
			subCertifications: [
				{
					name: 'Getting Started with Deep Learning',
					link: 'https://learn.nvidia.com/certificates?id=Pxo6ElBlT6qkvVatGYfYtw'
				},
				{
					name: 'Building Real-Time Video AI Applications',
					link: 'https://learn.nvidia.com/certificates?id=TPWJvK2jT0yGPr51LTv8zQ'
				},
				{
					name: 'Disaster Risk Monitoring Using Satellite Imagery',
					link: 'https://learn.nvidia.com/certificates?id=w-ff9Q14Tj6-8BJz4JLEtA'
				},
				{
					name: 'Building RAG Agents with LLMs',
					link: 'https://learn.nvidia.com/certificates?id=cMgd0NssQaKil3NExWHiig'
				},
				{
					name: 'Getting Started with AI on Jetson Nano',
					link: 'https://learn.nvidia.com/certificates?id=ZYDksGXWRimS0ipFbytFlg'
				}
			]
		},
		{
			name: 'Online Courses',
			issuer: 'Coursera',
			year: '2025',
			link: 'https://www.coursera.org/learner/killian-ott'
		},
		{
			name: 'Open Science',
			issuer: 'NASA - National Aeronautics and Space Administration',
			year: 'Dec 2024',
			link: 'https://orcid.org/0009-0001-2059-565X'
		},
		{
			name: 'Application Developer',
			issuer: 'AMD',
			year: '2025',
			link: 'https://learning.amd.com/certs/11279/75330EE494E744348CCD3344A06D856265062.pdf'
		},
		{
			name: 'Applied Remote Sensing Training',
			issuer: 'NASA - National Aeronautics and Space Administration',
			year: '2025',
			credentialId: '9554993775KO',
			subCertifications: [
				{
					name: 'Fundamentals of Remote Sensing',
					link: '/credentials/arset/fundamentals-of-remote-sensing.webp'
				},
				{
					name: 'Hyperspectral Data for Land and Coastal Systems',
					link: '/credentials/arset/hyperspectral-data-for-land-and-coastal-systems.webp'
				}
			]
		},
		{
			name: 'Wireless Academy',
			issuer: 'Qualcomm',
			year: '2025',
			subCertifications: [
				{
					name: '5G Introductory Level',
					link: '/credentials/qualcomm/5g-introductory-level.webp'
				},
				{
					name: 'AI Upskilling Certificate - Technical Foundation',
					link: '/credentials/qualcomm/ai-upskilling-certificate-technical-foundation.webp'
				}
			]
		}
	],
	languages: [
		{ language: 'English', proficiency: 'Professional working proficiency' },
		{ language: 'Finnish', proficiency: 'Elementary proficiency' },
		{ language: 'French', proficiency: 'Native or bilingual proficiency' },
		{ language: 'French Sign Languages', proficiency: 'Elementary proficiency' },
		{ language: 'Spanish', proficiency: 'Elementary proficiency' }
	]
};

export default cv;
