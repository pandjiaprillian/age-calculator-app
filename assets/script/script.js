import { id, qSelector } from "./utils.js";

const dayLabel = qSelector('label[for=day]');
const monthLabel = qSelector('label[for=month]');
const yearLabel = qSelector('label[for=year]');

const dayInput = id('day')
const monthInput = id('month');
const yearInput = id('year');

const resultYears = qSelector('.result .years');
const resultMonths = qSelector('.result .months');
const resultDays = qSelector('.result .days');

const dayError = qSelector('.range .day .error');
const monthError = qSelector('.range .month .error');
const yearError = qSelector('.range .year .error');
const btn = qSelector('.divider button');

btn.addEventListener('click', (e) => {
    const age = `${yearInput.value}-${monthInput.value}-${dayInput.value}`;

    const years = new Date().getFullYear() - new Date(age).getFullYear();
    const months = new Date().getMonth() - new Date(age).getMonth();
    const days = new Date().getDate() - parseInt(dayInput.value);

    if (dayInput.value === '' || monthInput.value === '' || yearInput.value === '') {
        igniteError('empty');
    }

    if (dayInput.value > 31 || monthInput.value > 12 || yearInput.value > new Date().getFullYear()) {
        igniteError('moreThan');
    }

    if (dayError.textContent.length > 0 || monthError.textContent.length > 0 || yearError.textContent.length > 0) {
        resultYears.textContent = '--';
        resultMonths.textContent = '--';
        resultDays.textContent = '--';
    } else {
        resultYears.textContent = years;
        resultMonths.textContent = months;
        resultDays.textContent = days;
    }
});

const igniteError = (condition) => {
    if (condition === 'empty') {
        dayError.textContent = 'Tanggal Tidak Boleh Kosong!';
        monthError.textContent = 'Bulan Tidak Boleh Kosong!';
        yearError.textContent = 'Tahun Tidak Boleh Kosong!';
    } else if (condition === 'moreThan') {
        dayError.textContent = 'Tanggal Tidak Boleh Lebih Dari 31!';
        monthError.textContent = 'Bulan Tidak Boleh Lebih Dari 12!';
        yearError.textContent = `Tahun Tidak Boleh Lebih Dari ${new Date().getFullYear()}`;
    }

    dayLabel.style.color = 'red';
    monthLabel.style.color = 'red';
    yearLabel.style.color = 'red';

    dayInput.style.border = '2px solid red';
    monthInput.style.border = '2px solid red';
    yearInput.style.border = '2px solid red';
}