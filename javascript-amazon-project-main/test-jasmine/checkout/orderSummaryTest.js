import { renderPaymentSummary } from "../../scripts/checkout/paymentSummary";

describe('Test Suite: renderPaymentSummary', () => {
    It('should render payment summary correctly', () => {
        document.querySelector('.js-test-container').innerHTML = `
        <div class="js-order-summary">
        </div>`;
    });
});