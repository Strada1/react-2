const STATUS = {
    DONE: 'Done',
    TO_DO: 'To do'
};

const PRIORITY = {
    HIGH: 'High',
    LOW: 'Low',
};

const ERRORS = {
    errorAdd: 'You have not added any task in your list!',
};

const list = [ 
    { name: 'Create a post', status: STATUS.IN_PROGRESS, priority: PRIORITY.LOW  }, 
    { name: 'Make the bed', status: STATUS.TO_DO, priority: PRIORITY.LOW  },
    { name: 'Do homework', status: STATUS.IN_PROGRESS, priority: PRIORITY.HIGH  }, 
    { name: 'Pet the cat', status: STATUS.DONE, priority: PRIORITY.HIGH  }, 
    { name: 'Play the computer', status: STATUS.DONE, priority: PRIORITY.LOW  },  
];

export {STATUS, list, ERRORS, PRIORITY};