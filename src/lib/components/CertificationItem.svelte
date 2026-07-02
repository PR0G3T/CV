<script lang="ts">
	import { getIssuerLogoPath, handleImgError, resolveUrl } from '$lib/utils';
	import type { CvCertificationItem } from '$lib/data/cv';

	interface Props {
		cert: CvCertificationItem;
	}

	let { cert }: Props = $props();
</script>

<article class="item-block">
	<header>
		<div class="mt-[0.1rem] flex flex-wrap items-center gap-2">
			<img
				src={getIssuerLogoPath(cert.issuer)}
				alt={cert.issuer}
				width="28"
				height="28"
				onerror={handleImgError}
				class="logo"
			/>
			<h3 class="item-title">{cert.name}</h3>
		</div>
		<p class="organisation">{cert.issuer}</p>
		{#if cert.year}
			<p class="item-meta">{cert.year}</p>
		{/if}
	</header>
	{#if cert.subCertifications}
		<!-- eslint-disable svelte/no-navigation-without-resolve -->
		<div class="cred-buttons-container">
			{#each cert.subCertifications as subCert (subCert.name)}
				<a
					href={resolveUrl(subCert.link)}
					class="link cred-link inline-block"
					rel="noopener noreferrer"
					target="_blank">{subCert.name}</a
				>
			{/each}
		</div>
		<!-- eslint-enable svelte/no-navigation-without-resolve -->
	{:else if cert.link}
		<!-- eslint-disable svelte/no-navigation-without-resolve -->
		<a
			href={cert.link}
			class="link cred-link inline-block"
			rel="noopener noreferrer"
			target="_blank">Credentials</a
		>
		<!-- eslint-enable svelte/no-navigation-without-resolve -->
	{:else if cert.credentialId}
		<p class="item-meta">Credential ID: {cert.credentialId}</p>
	{/if}
</article>
