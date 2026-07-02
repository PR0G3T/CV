import { base } from '$app/paths';

// Build safe asset URLs that respect `paths.base` during prerender
export const assetUrl = (p: string): string => {
	const clean = p.replace(/^\//, '');
	// Use root-relative when base is empty to avoid CSS-relative resolution
	return base ? `${base}/${clean}` : `/${clean}`;
};

// Resolve local paths with base prefix (shared utility)
export const resolveUrl = (url: string): string => {
	return url.startsWith('/') ? `${base}${url}` : url;
};

// Known logo mappings for companies with custom filenames
const companyLogoMap: Record<string, string> = {
	'Körber Supply Chain Software': 'korber',
	'Team Cardinalis': 'teamcardinalis',
	"Sup de Vinci - école d'informatique": 'sup-de-vinci'
};

// Brand-specific casing overrides
const brandCaseMap: Record<string, string> = {
	'Körber Supply Chain Software': 'KÖRBER Supply Chain Software'
};

export const displayCompany = (name: string): string => brandCaseMap[name] ?? name;

const resolveLogoPath = (name: string, map: Record<string, string>, subfolder: string): string => {
	const override = map[name];
	return assetUrl(`images/${subfolder}/${override ?? 'default'}.webp`);
};

export const getCompanyLogoPath = (company: string): string =>
	resolveLogoPath(company, companyLogoMap, 'companies');

const schoolLogoMap: Record<string, string> = {
	'University of Helsinki': 'university-of-helsinki',
	'MITx Courses': 'mitx_courses',
	'Lycée Polyvalent Louis Armand': 'default'
};

export const getSchoolLogoPath = (school: string): string =>
	resolveLogoPath(school, schoolLogoMap, 'schools');

// Issuer logos for certifications (fallback to companies/default)
const issuerLogoMap: Record<string, string> = {
	'Google Cloud': 'google',
	'NVIDIA Deep Learning Institute': 'nvidia',
	'NASA - National Aeronautics and Space Administration': 'nasa',
	MITx: 'mitx',
	Coursera: 'coursera',
	AMD: 'amd',
	Qualcomm: 'qualcomm'
};

export const getIssuerLogoPath = (issuer: string): string =>
	resolveLogoPath(issuer, issuerLogoMap, 'companies');

export const handleImgError = (event: Event) => {
	const target = event.currentTarget as HTMLImageElement | null;
	if (target) target.src = assetUrl('images/companies/default.webp');
};
