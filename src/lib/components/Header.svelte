<script lang="ts">
	import { assetUrl } from '$lib/utils';
	import cv from '$lib/data/cv';
</script>

<section class="fade-in pt-12 pb-6">
	<div class="flex flex-wrap items-center justify-between gap-4">
		<div class="flex min-w-[240px] flex-auto flex-wrap items-center gap-6">
			<img
				src={assetUrl('images/profile.webp')}
				alt={cv.name}
				width="112"
				height="112"
				class="avatar"
			/>
			<div>
				<h1 class="page-title">
					{cv.name}
				</h1>
				<p class="muted mt-0">{cv.title}</p>
			</div>
		</div>
		<!-- eslint-disable svelte/no-navigation-without-resolve -->
		<nav class="ml-auto flex flex-wrap items-center gap-4">
			{#each cv.socials.filter((s) => s.type !== 'orcid') as social (social.type)}
				<a
					href={social.href}
					class="icon-link {social.type}"
					target="_blank"
					rel="noopener noreferrer"
					aria-label={social.label}
				>
					<span
						class="svg-icon"
						class:linkedin-mask={social.type === 'linkedin'}
						style={`--mask-url: url('${assetUrl(`icons/${social.type}.svg`)}')`}
						aria-hidden="true"
					></span>
				</a>
			{/each}
		</nav>
		<!-- eslint-enable svelte/no-navigation-without-resolve -->
	</div>
</section>
