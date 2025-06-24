<template>
    <div class="calendar-container">
        <div class="calendar-header-top">
            <h2>{{ getEnglishMonth(currentMonth) }} {{ currentYear }}</h2>
            <div class="nav-buttons">
                <button @click="prevMonth">&lt;</button>
                <button @click="nextMonth">&gt;</button>
            </div>
        </div>

        <div class="calendar-header">
            <div v-for="(day, index) in days" :key="index" :class="['day-header', { 'sunday': index === 0 }]">
                {{ day }}
            </div>
        </div>

        <div class="calendar-grid">
            <div v-for="blank in blanks" :key="'b' + blank" class="day-blank"></div>
            <div v-for="day in daysInMonth" :key="'d' + day" class="day"
                :class="{ 'today': isToday(day), 'holiday': isHoliday(day) }">
                {{ day }}
            </div>
        </div>

        <div class="events-list">
            <div v-for="event in monthEvents" :key="event.date" class="event-item">
                <span class="event-date">{{ event.date }} {{ getDayOfWeek(event.date) }}</span>
                <span class="event-name">{{ event.name }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'KhmerEventCalendar',
    data() {
        return {
            currentYear: 2025,
            currentMonth: 5,
            days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            holidays: [
                { date: 1, month: 0, name: "New Year's Day" },
                { date: 7, month: 0, name: 'Victory Over Genocide Day' },
                { date: 14, month: 3, name: "Khmer New Year's Eve" },
                { date: 15, month: 3, name: "Khmer New Year's Day" },
                { date: 16, month: 3, name: 'Khmer New Year Celebration' },
            ],
        };
    },
    computed: {
        daysInMonth() {
            return Array.from(
                { length: new Date(this.currentYear, this.currentMonth + 1, 0).getDate() },
                (_, i) => i + 1
            );
        },
        blanks() {
            const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
            return Array(firstDay).fill('');
        },
        monthEvents() {
            return this.holidays.filter(event => event.month === this.currentMonth);
        },
    },
    methods: {
        getEnglishMonth(index) {
            const months = [
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
            ];
            return months[index];
        },
        prevMonth() {
            if (this.currentMonth === 0) {
                this.currentMonth = 11;
                this.currentYear--;
            } else {
                this.currentMonth--;
            }
        },
        nextMonth() {
            if (this.currentMonth === 11) {
                this.currentMonth = 0;
                this.currentYear++;
            } else {
                this.currentMonth++;
            }
        },
        isToday(day) {
            const today = new Date();
            return (
                today.getDate() === day &&
                today.getMonth() === this.currentMonth &&
                today.getFullYear() === this.currentYear
            );
        },
        isHoliday(day) {
            return this.holidays.some(
                event => event.date === day && event.month === this.currentMonth
            );
        },
        getDayOfWeek(day) {
            const date = new Date(this.currentYear, this.currentMonth, day);
            return this.days[date.getDay()];
        },
    },
};
</script>

<style scoped>
.calendar-container {
    width: 360px;
    margin: auto;
    font-family: 'Poppins', 'Arial', sans-serif;
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.calendar-header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

.calendar-header-top h2 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
}

.nav-buttons {
    display: flex;
    gap: 8px;
}

.nav-buttons button {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #333;
}

.calendar-header {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin-bottom: 5px;
}

.day-header {
    text-align: center;
    font-weight: 600;
    font-size: 0.9rem;
    color: #555;
}

.day-header.sunday {
    color: #4caf50;
}

.calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 6px;
}

.day,
.day-blank {
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    color: #333;
}

.day-blank {
    color: transparent;
}

.today {
    background-color: #4caf50;
    color: white;
    border-radius: 50%;
}

.holiday {
    color: #4caf50;
    font-weight: bold;
}

.events-list {
    margin-top: 20px;
}

.event-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #f8fff8;
    border: 1px solid #4caf50;
    color: #4caf50;
    padding: 8px 12px;
    border-radius: 10px;
    margin-top: 8px;
    font-size: 0.9rem;
}

.event-date {
    font-weight: bold;
}

.event-name {
    font-weight: normal;
}
</style>