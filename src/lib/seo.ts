import cv from '$lib/data/cv';

export const siteUrl = 'https://pr0g3t.com';
export const ogImageUrl = `${siteUrl}/images/profile.webp`;

// Organization (optional) for Team Cardinalis with logo
const orgTeamCardinalis = {
	'@type': 'Organization',
	name: 'Team Cardinalis',
	logo: `${siteUrl}/images/companies/teamcardinalis.webp`
};

// Map schools to more specific schema.org types when possible
const schoolTypeMap: Record<string, string> = {
	'University of Helsinki': 'CollegeOrUniversity',
	'MITx Courses': 'EducationalOrganization',
	'Lycée Polyvalent Louis Armand': 'HighSchool',
	'LycǸe Polyvalent Louis Armand': 'HighSchool'
};

// Person schema enriched
const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: 'Killian OTT',
	alternateName: 'PR0G3T',
	url: `${siteUrl}/`,
	jobTitle: 'PR0G3T',
	worksFor: orgTeamCardinalis,
	alumniOf: (cv.education ?? []).map((e) => ({
		'@type': schoolTypeMap[e.school] ?? 'EducationalOrganization',
		name: e.school,
		...(e.link ? { url: e.link } : {})
	})),
	knowsAbout: cv.skills,
	address: {
		'@type': 'PostalAddress',
		addressLocality: 'Lyon',
		addressRegion: 'Auvergne-Rhône-Alpes',
		addressCountry: 'FR'
	},
	image: ogImageUrl,
	sameAs: cv.socials.map((s) => s.href)
};

const jsonLdSite = {
	'@context': 'https://schema.org',
	'@type': 'WebSite',
	url: `${siteUrl}/`,
	name: 'Killian OTT • CV',
	inLanguage: 'en-US',
	publisher: { '@id': `${siteUrl}/#organization` }
};

// ProfilePage schema referencing the Person as mainEntity
const jsonLdProfile = {
	'@context': 'https://schema.org',
	'@type': 'ProfilePage',
	url: `${siteUrl}/`,
	inLanguage: 'en-US',
	mainEntity: jsonLd
};

// Site Organization (publisher/owner)
const jsonLdOrg = {
	'@context': 'https://schema.org',
	'@type': 'Organization',
	'@id': `${siteUrl}/#organization`,
	name: 'PR0G3T',
	url: `${siteUrl}/`,
	logo: ogImageUrl,
	sameAs: cv.socials.filter((s) => s.type !== 'orcid').map((s) => s.href)
};

// Breadcrumb (even single level for homepage)
const jsonLdBreadcrumb = {
	'@context': 'https://schema.org',
	'@type': 'BreadcrumbList',
	itemListElement: [
		{
			'@type': 'ListItem',
			position: 1,
			name: 'Home',
			item: `${siteUrl}/`
		}
	]
};

// Pre-serialize JSON-LD to ensure valid inline output in SSR
const sanitizeJson = (s: string) =>
	s.replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026');

export const jsonLdStr = sanitizeJson(JSON.stringify(jsonLd));
export const jsonLdOrgStr = sanitizeJson(JSON.stringify(jsonLdOrg));
export const jsonLdSiteStr = sanitizeJson(JSON.stringify(jsonLdSite));
export const jsonLdProfileStr = sanitizeJson(JSON.stringify(jsonLdProfile));
export const jsonLdBreadcrumbStr = sanitizeJson(JSON.stringify(jsonLdBreadcrumb));
