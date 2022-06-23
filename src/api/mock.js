export const mock= [
    {
        id:0,
        barcode_number: 'F33501272',
        first_name: 'Jennifer',
        last_name: 'Lewis',
        member_photo:'🐝',
        fitness_type:'trainer',
        membership: 3,
        time:0,
        timesheet:[],
        status:'OK',
        perks:{
            kids: [false],
            towel: false,
            racketball: false,
            guestAllowed: true,
            guest: []
        }
    },
    {
        id:1,
        barcode_number: 'F37501272',
        first_name: 'Andrea',
        last_name: 'Boccielli',
        fitness_type:'fitness',
        member_photo:'',
        status:'OK',
        time:0,
        timesheet:[],
        membership: 2,
    },
    {
        id:1,
        barcode_number: 'F37221272',
        first_name: 'Yelena',
        last_name: 'Makron',
        fitness_type:'trainer',
        member_photo:'https://images.unsplash.com/photo-1655857202782-8d0ef8f0254b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2528&q=80',
        status:'OK',
        time:0,
        timesheet:[],
        membership: 1,
    }
]

export const mock2= [
    {
        id:0,
        barcode_number: 'F33501272',
        first_name: 'Jennifer444',
        last_name: 'Lewis',
        member_photo:'🐝',
        fitness_type:'trainer',
        membership: 3,
        time:0,
        timesheet:[],
        status:'OK',
        perks:{
            kids: [false],
            towel: false,
            racketball: false,
            guest: [true,[]]
        }
    },
    {
        id:1,
        barcode_number: 'F37501272',
        first_name: 'Andrea',
        last_name: 'Boccielli',
        fitness_type:'fitness',
        status:'OK',
        membership: 2,
    }
]