import {formatCurrency} from '../../scripts/utils/money.js';

describe('Test Suite: formatCurrency', () => {
	it('converts cents into dollars', () => {
		expect(formatCurrency(2095)).toEqual('20.95');
	});

	it('works with 0', () => {
		expect(formatCurrency(0)).toEqual('0.00');
	});

	it('round up to the nearest cent', () => {
		expect(formatCurrency(201)).toEqual('2.01');
	});
});