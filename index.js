const readlineSync = require('readline-sync');

const workHours = Number(readlineSync.question('Enter working hours: '));
const breakMinutes = Number(readlineSync.question('Enter break minutes: '));

const MINUTES_PER_HOUR = 60;
const REGULAR_HOURS = 8;
const totalMinutes = Math.floor(workHours * MINUTES_PER_HOUR);

function formatTime(total) {
    const hours = Math.floor(total / MINUTES_PER_HOUR);
    const minutes = total % MINUTES_PER_HOUR;
    return `${hours} ${hours === 1 ? 'hour' : 'hours'} and ${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`;
}

if (!Number.isFinite(workHours) || !Number.isFinite(breakMinutes) ||
workHours < 0 || breakMinutes < 0 || breakMinutes > totalMinutes) {
    console.log('Invalid working time or break duration');
    } else {
        const paidMinutes = totalMinutes - breakMinutes;
        const overtimeMinutes = Math.max(0, paidMinutes - REGULAR_HOURS * MINUTES_PER_HOUR);

        console.log(`\nPaid working time: ${formatTime(paidMinutes)}.`);
        console.log(`Overtime: ${formatTime(overtimeMinutes)}.`);
    }