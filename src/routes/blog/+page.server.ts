import * as cheerio from 'cheerio';
import { error } from '@sveltejs/kit';

interface Post {
	id: number;
	title: string;
	date: string;
	link: string;
	image: string;
	intro: string;
}

const SOURCE_URL = 'https://www.pakolesonline.com/';
const SELECTORS = {
	parent: '#tdi_106 ',
	post: '.td-block-span12 .td_module_10.td_module_wrap.td-animation-stack',
	// each post have this:
	image: '.td-module-thumb a img',
	link: '.td-module-thumb a',
	title: '.item-details h3 a',
	intro: '.item-details .td-excerpt',
	datePost: '.item-details .td-module-meta-info .td-post-date'
};

export async function load({ fetch }) {
	let html: string;
	try {
		const res = await fetch(SOURCE_URL);
		if (!res.ok) {
			console.error(`scrape failed: HTTP ${res.status} ${res.statusText}`);
			throw error(502, 'could not load posts now');
		}
		html = await res.text();
	} catch (err) {
		console.error('scrape fetch error:', err);
		throw error(502, 'could not load posts now');
	}

	const $ = cheerio.load(html);
	const parent = $(SELECTORS.parent).find(SELECTORS.post);
	if (parent.length === 0) {
		console.error('scrape logic is stale, the source site has changed');
	}
	const posts: Post[] = [];
	parent.each((i, element) => {
		try {
			const $el = $(element);
			const title = $el.find(SELECTORS.title).text();
			const imageUrl = $el.find(SELECTORS.image).first().attr('data-img-url') ?? '';
			const link = $el.find(SELECTORS.link).attr('href') ?? '';
			const date = $el.find(SELECTORS.datePost).text();
			const intro = $el.find(SELECTORS.intro).text().trim() ?? '';
			if (!title || !imageUrl || !link || !date || !intro) {
				return;
			}
			posts.push({
				id: i,
				title: title,
				date: date,
				link: link,
				image: imageUrl,
				intro: intro
			});
		} catch (err) {
			console.error(`error at parsing post[${i}]:`, err);
		}
	});
	return { posts };
}
