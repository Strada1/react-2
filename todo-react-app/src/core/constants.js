const TYPE = {
  INPUT: {
    TEXT: 'text',
    DATETIME_LOCAL: 'datetime-local',
    RADIO: 'radio',
    CHECKBOX: 'checkbox',
  },
  BUTTON: {
    SUBMIT: 'submit',
    BUTTON: 'button',
  },
};

const TAG = {
  LABEL: 'label',
  INPUT: 'input',
  BUTTON: 'button',
};

const ICON = {
  SPRITE: '\\src\\assets\\img\\sprite.svg',
  PREFIX: 'icon-svg',
  HASHTAG: '#',
  PLUS: 'plus',
  CHECK: 'check',
  CROSS: 'cross',
  CALENDAR: 'calendar',
  LIGHTNING: 'lightning',
  CIRCLE_ARROW: 'circle-arrow',
};

const PRIORITY = ['low', 'medium', 'high'];

const STATUS = {
  DONE: true,
  TODO: false,
};

const TITLE = {
  TASK: 'Task',
  DATE: 'Date',
  PRIORITY: 'Priority',
  TASKS: 'Tasks',
  HISTORY: 'History',
};

const VALUE = {
  DEFAULT: '',
  ZERO: 0,
};

const STORAGE = {
  TODO_LIST: 'TODO List',
};

const TASK_KEY = {
  PRIORITY: 'priority',
  STATUS: 'status',
  TEXT: 'text',
  DATE: 'date',
  ID: 'id',
};

const ACTION = {
  DELETE: 'delete',
  ADD: 'add',
  CHANGE: 'change',
  UPDATE: 'update',
};

const PREFIX = {
  ...TAG,
  TASK: 'task',
};

const INPUT_DATA = {
  text: {
    label: 'Task',
    name: 'text',
    id: 'new-task',
    placeholder: 'type new task',
  },
  'datetime-local': {
    label: 'Date',
    name: 'date',
    id: 'new-date',
  },
  radio: {
    label: 'Priority',
    name: 'priority',
  },
  checkbox: {
    label: 'checkbox',
    name: 'checkbox',
  },
};

export {
  TYPE, TITLE, TAG, VALUE, STORAGE, TASK_KEY, ICON, STATUS, ACTION, PRIORITY, INPUT_DATA, PREFIX,
};
