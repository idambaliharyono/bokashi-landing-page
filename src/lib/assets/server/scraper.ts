import * as cheerio from 'cheerio';

interface BlogPost {
	id: string;
	title: string;
	date: string;
	link: string;
	image: string;
}
interface ScrapeResult {
	posts: BlogPost[];
	total: number;
	scrapedAt: number;
}
const SOURCE_URL = 'https://www.pakolesonline.com/';
const SELECTORS = {
	parent: '#tdi_106',
	post: '.td-block-span',
	imageContainer: '.td-module-thumb',
	image: 'img',
	contentContainer: '.item-details'
};

export async function scrapeHomePage(): Promise<ScrapeResult> {
	try {
		console.log('fetching data from:', SOURCE_URL);
		const response = await fetch(SOURCE_URL, {
			headers: {
				'User-Agent': 'Mozilla/5.0 (compatible; blogScapper; +https://bokashiindonesia.com/blog)'
			}
		});
		if (!response.ok) {
			throw new Error(`HTTP ${response.status}: ${response.statusText}`);
		}
		const html = await response.text();
		console.log(`HTML (${html.length} characters) fetched`);
		const posts = parseHomePage(html);
		return {
			posts,
			total: posts.length,
			scrapedAt: Date.now()
		};
	} catch (error) {
		console.error('scraping error:', error);
		return {
			posts: [],
			total: 0,
			scrapedAt: Date.now()
		};
	}
}

function parseHomePage(html: string) {
	const $ = cheerio.load(html);
	const posts: BlogPost[] = [];
	const postElements = $('#tdi_106 > .td-block-span12');
	console.log(postElements);
}
