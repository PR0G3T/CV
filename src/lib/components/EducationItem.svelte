<script lang="ts">
	import { getSchoolLogoPath, handleImgError, resolveUrl } from '$lib/utils';
	import type { CvEducationItem } from '$lib/data/cv';
	import PdfModal from './PdfModal.svelte';

	interface Props {
		edu: CvEducationItem;
	}

	let { edu }: Props = $props();

	let showPdf = $state(false);
	let pdfUrl = $state('');

	function openPdf(e: MouseEvent, url: string) {
		if (url.endsWith('.pdf')) {
			e.preventDefault();
			pdfUrl = resolveUrl(url);
			showPdf = true;
		}
	}
</script>

<article class="item-block">
	<header>
		<div class="mt-[0.1rem] flex flex-wrap items-center gap-2">
			<img
				src={getSchoolLogoPath(edu.school)}
				alt={edu.school}
				width="28"
				height="28"
				onerror={handleImgError}
				class="logo"
			/>
			<h3 class="item-title">{edu.degree}</h3>
		</div>
		<p class="organisation">{edu.school}</p>
		<p class="item-meta">{edu.period}</p>
	</header>
	{#if edu.details}
		<p class="description">{edu.details}</p>
	{/if}
	{#if edu.credentials}
		<!-- eslint-disable svelte/no-navigation-without-resolve -->
		<div class="cred-buttons-container">
			{#each edu.credentials as cred (cred.label)}
				<a
					href={resolveUrl(cred.href)}
					class="link cred-link inline-block"
					onclick={(e) => openPdf(e, cred.href)}
					rel="noopener noreferrer"
					target="_blank">{cred.label}</a
				>
			{/each}
		</div>
		<!-- eslint-enable svelte/no-navigation-without-resolve -->
	{:else if edu.credential}
		<!-- eslint-disable svelte/no-navigation-without-resolve -->
		<a
			href={resolveUrl(edu.credential)}
			class="link cred-link inline-block"
			onclick={(e) => openPdf(e, edu.credential ?? '')}
			rel="noopener noreferrer"
			target="_blank">{edu.credentialLabel ?? 'Credential'}</a
		>
		<!-- eslint-enable svelte/no-navigation-without-resolve -->
	{/if}

	{#if showPdf}
		<PdfModal src={pdfUrl} onClose={() => (showPdf = false)} />
	{/if}
</article>
