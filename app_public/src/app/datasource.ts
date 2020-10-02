export let tutoringEventData: Object[] =[{
    Id: 1,
    Subject: 'Amy\'s Level 1 French Lesson',
    Location: 'Zoom',
    StartTime: new Date(2020,9,2,16,0),
    EndTime: new Date(2020,9,2,18,30),
    //IsBlock: true
    IsReadonly: true
},{
    Id: 2,
    Subject: 'Arthur\'s Level 4 French Lesson',
    Location: 'Zoom',
    StartTime: new Date(2020,8,30,9,0),
    EndTime: new Date(2020,8,30,11,30),
    RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1;BYDAY=MO,WE,FR;COUNT=10'
}, {
    StartTime: new Date(2020,8,28),
    EndTime: new Date(2020,8,29),
    IsBlock: true

}, {
    Subject: 'Lunch',
    StartTime: new Date(2020,8,28,12,0),
    EndTime: new Date(2020,8,28,13,30),
    IsAllDay: false,
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1',
    IsBlock: true
}, {
    Id: 3,
    Subject: 'Austin\'s Level 2 French Lesson',
    Location: 'Zoom',
    StartTime: new Date(2020,8,29,13,30),
    EndTime: new Date(2020,8,29,14,30),
    //IsBlock: true
    IsReadonly: true, 
    RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1;BYDAY=TU,TH;COUNT=15'

}, {
    Id: 4,
    Subject: 'Sherezade\'s Level 1 French Lesson',
    Location: 'Zoom',
    StartTime: new Date(2020,8,30,16,0),
    EndTime: new Date(2020,8,30,19,30),
    //IsBlock: true
    IsReadonly: true   
}
]


