import dotenv from 'dotenv';
dotenv.config();

describe('Github Action CI Environment Secret', () => {
	test('Secret should be "Super_Secret"', () => {
		const secret = process.env.SECRET;
		expect(secret).toBe('Super_Secret');
	});
});
